import {
    getMyWeek,
    addToMyWeek,
    removeFromMyWeek,
    updateMyWeek
} from "./state.js";

import {
    showActivities,
    showMyWeek,
    fillActivityOptions
}  from "./ui.js";

import { searchActivities } from "./search.js";

import {
    checkDay,
    checkTime,
    checkDuration,
    validatePlan
} from "./validator.js";

let allActivities = [];

async function loadActivities() {
    try {
        const response = await fetch("./seed.json");

        if(!response.ok) {
            throw new Error("Could not load seed.json");
        }

        allActivities = await response.json();

        showActivities(allActivities);
        fillActivityOptions(allActivities);
        showMyWeek(getMyWeek());

    } catch (error) {
        console.error("Error loading activities:", error);

        document.getElementById("activity-message").textContent =
            "Could not load activities. Check seed.json and try again.";
    }
}

function refreshWeek() {
    showMyWeek(getMyWeek());
}

document.getElementById("weekly-schedule").addEventListener("click", function (event) {
    const button = event.target.closest("button[data-edit-index]");

    if(!button) {
        return;
    }

    const index= Number(button.dataset.editIndex);
    const activities = getMyWeek();
    const activity = activities[index];

    if (!activity) {
        return;
    }


document.getElementById("editing-id").value = index;
document.getElementById("selected-activity").value = activity.activityId;
document.getElementById("plan-day").value=activity.day;
document.getElementById("plan-time").value = activity.time;
document.getElementById("plan-duration").value = activity.duration;
document.getElementById("plan-tag").value = activity.category;

document.getElementById("save-plan-button").textContent = "Save Changes";
document.getElementById("cancel-edit").hidden = false;

document.getElementById("plan-message").textContent =
          "Editing " + activity.title + ". Update the details and  save.";

 document.getElementById("my-week").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("cancel-edit").addEventListener("click", function () {
    document.getElementById("plan-form").reset();
    document.getElementById("editing-id").value = "";
    document.getElementById("save-plan-button").textContent = "Add to my week";
    this.hidden = true;

    document.getElementById("plan-message").textContent =
        "Editing Cancelled.";
});

document.getElementById("activity-list").addEventListener("click", function (event) {
    const button = event.target.closest("button[data-activity-id]");

    if (!button) {
        return;
    }

    const activityId = button.dataset.activityId;

    document.getElementById("selected-activity").value = activityId;

    document.getElementById("my-week").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("plan-day").focus();

    document.getElementById("plan-message").textContent =
        "Activity selected. Choose your day, time, duration, and category.";

});

document.getElementById("activity-search").addEventListener("input", function () {
    const searchText = this.value;
    const category = document.getElementById("category-filter").value;

    const filteredActivities = searchActivities(
        allActivities,
        searchText,
        category
    );

    showActivities(filteredActivities);

});

document.getElementById("category-filter").addEventListener("change", function () {
    const searchText = document.getElementById("activity-search").value;

    const filteredActivities  = searchActivities(
        allActivities,
        searchText,
        this.value
    );

    showActivities(filteredActivities);

});

document.getElementById("plan-form").addEventListener("submit", function (event) {
 event.preventDefault();


 const activityId = Number(document.getElementById("selected-activity").value);
 const activity = allActivities.find(function (item) {
    return item.id === activityId;
 });

  const plan = {
    activityId: activityId,
    title: activity ? activity.title : "",
    category: document.getElementById("plan-tag").value,
    day: document.getElementById("plan-day").value,
    time: document.getElementById("plan-time").value,
    duration: Number(document.getElementById("plan-duration").value)

};

   const errors = validatePlan(plan);

   if (!activity || Object.keys(errors).length >0 || 
       !checkDay(plan.day) ||
       !checkTime(plan.time)||
       !checkDuration(plan.duration)) {
        document.getElementById("plan-message").textContent =
        "Please choose an activity and enter a valaid day,time and duration." ;
        return;
       }

       const editingId = document.getElementById("editing-id").value;

       let success;

       if (editingId !== "") {
        const index = Number(editingId);
        success = updateMyWeek(index, plan);

       } else {
        success = addToMyWeek(plan);
       }

       document.getElementById("plan-message").textContent = success

    ? "Your weekly plan has been saved."
    : "Could not save your plan. Please try again.";

    if(success) {
        this.reset();
        document.getElementById("editing-id").value =  "";
        document.getElementById("save-plan-button").textContent = "Add to my week";
        document.getElementById("cancel-edit").hidden = true;
        refreshWeek();
    }
});

document.getElementById("weekly-schedule").addEventListener("click", function(event) {
    const button = event.target.closest("button[data-plan-index]");

    if(!button) {
        return;
    }

    const index  = Number(button.dataset.planIndex); 

        if (removeFromMyWeek(index)) {
            refreshWeek();
            document.getElementById("plan-message"). textContent = 
             "Activity removed from your week.";
             
        }   
             });

    document.getElementById("export-json").addEventListener("click", function (){
        const plan = getMyWeek();

        const jsonData = JSON.stringify(plan, null, 2);

        const blob = new Blob([jsonData],{
            type: "application/json"
        });

        const url = URL.createObjectURL(blob);


        const link = document.createElement("a");
        link.href = url;
        link.download = "my-week-plan.json";


        link.click();

        URL.revokeObjectURL(url);

        document.getElementById("data-message").textContent =
          "Your weekly plan has been exported.";
    });

    loadActivities();
