import { validatePlan } from "./validator.js";
import {
    getMyWeek,
    addToMyWeek,
    removeFromMyWeek
} from "./state.js";
import { searchActivities } from "./search.js";
import {
    showActivities,
    showMyWeek,
    fillActivityOptions
} from "./ui.js";


const searchInput = document.getElementById("activity-search");
const categoryFilter = document.getElementById("category-filter");
const activityList = document.getElementById("activity-list");


const planForm = document.getElementById("plan-form");
const selectedActivity = document.getElementById("selected-activity");
const  planDay = document.getElementById("plan-day");
const planTime = document.getElementById("plan-time");
const planMessage = document.getElementById("plan-message");


let activities = [];

function updateActivities () {
    const results =searchActivities(
    activities,
    searchInput.value,
    categoryFilter.value
    );

    showActivities(results);

}

function updateMyWeek(){
    showMyWeek(getMyWeek());
}

async function startPlanner() {
    try {
        const response = await fetch("./seed.json");


        if(!response.ok){
            throw new Error("Could not load activities. ");

        }

         activities = await response.json();

        fillActivityOptions(activities);
        updateActivities();
        updateMyWeek();


    }catch (error) {
        activityList.textContent =
        "Actvities could not load . PLease run the project using VS code Live Server.";
        console.log(error);

    }
}

searchInput.addEventListener("input",updateActivities);


categoryFilter.addEventListener("change", updateActivities);


activityList.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }

    const activityId = Number(event.target.dataset.activityId);

    const activity = activities.find(function (item) {
        return item.id === activityId;

    });

    if(!activity){
        return;
    }

    const planItem = {
        activityId: activity.id,
        title: activity.title,
        day: activity.day,
        time: activity.time,

    };

    if (addToMyWeek(planItem)) {
        updateMyWeek();
        planMessage.textContent =
                    activity.title + " was added to your week!";

    }else {
        planMessage.textContent =
        "The activity could not be saved. PLease try again.";
    }
});


planForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const planDetails = {
        activityId: String(selectedActivity.value),
        day: planDay.value,
        time: planTime.value
    };

    const errors = validatePlan (planDetails);

    const activity = activities.find(function (item){
        return item.id === Number(selectedActivity.value);
    });

    if (!activity) {
        errors.activityId = "Please choose an activity.";

    }


    if (Object.keys(errors).length > 0) {
        planMessage.textContent = Object.values(errors).join("");
        return;
    }

    const planItem= {
        activityId: activity.id,
        title:activity.title,
        day:planDay.value,
        time: planTime.value,
    };

    if(addToMyWeek(planItem)) {
        updateMyWeek();
        planMessage.textContent=
                                activity.tile + "was added to your week.";

                                planDay.planForm.reset();
                                 
                                     
    }else {
        planMessage.textContent = 
        "The activity could not be saved .PLease try again.";

    }



});

document.getElementById("weekly-schedule").addEventListener(
    "click",
    function (event) {
        if(event.target.tagName !== "BUTTON") {
            return;
        }

        const planIndex = Number(event.target.dataset.planIndex);

        if(removeFromMyWeek(planIndex)) {
            updateMyWeek();
            planMessage.textContent = "Activity removed form your week.";

        }else {
            planMessage.textContent =
            "The activity could not be removed.Please try again.";
        }
    }
);
startPlanner();

