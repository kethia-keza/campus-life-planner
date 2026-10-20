export function showActivities(activities) {
    const activityList = document.getElementById("activity-list");
    const activityMessage = document.getElementById("activity-message");
    activityList.innerHTML = "";

    if (activities.length === 0) {
        activityMessage.textContent = "No activities found. Try another search.";
        return;
    
    }

    activityMessage.textContent = activities.length + " activities found.";

    activities.forEach(function (activity) {
        const card = document.createElement("article");
        card.className = "activity-card";

        const title= document.createElement("h3");
        title.textContent = activity.title;

        const category = document.createElement("p");
        category.textContent ="Category: " + activity.category;


        const description = document.createElement("p");
        description.textContent = activity.description;


        const time= document.createElement("p");
        time.textContent =
             activity.day + " at " + activity.time + " (" + activity.duration + "min)";

        const button =document.createElement("button");
        button.textContent = "Plan this Activity";
        button.type = "button";
        button.dataset.activityId = activity.id;


        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(time);
        card.appendChild(button);


        activityList.appendChild(card);


       });
}

export function showMyWeek(activities) {
    const weeklySchedule = document.getElementById("weekly-schedule");
     

    weeklySchedule.innerHTML= "";

    if(activities.length === 0) {
        weeklySchedule.textContent =
        "Your week is empty. Choose an activity to get started.";

        return;
    }

    activities.forEach(function (activity, index) {
        const item = document.createElement("div");
        item.className = "schedule-item";

        const title = document.createElement("h4");
        title.textContent = activity.title;

        const details = document.createElement("p");
        details.textContent =
                activity.day + " at " + activity.time;


        const button = document.createElement("button");
        button.textContent = "Remove";
        button.type = "button";
        button.dataset.planIndex = index;
        button.setAttribute("aria-label", "Remove " + activity.title);


        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.type = "button";
        editButton.dataset.editIndex = index;
        editButton.setAttribute("aria-label", "Edit " + activity.title);

        item.appendChild(title);
        item.appendChild(details);
        item.appendChild(editButton);
        item.appendChild(button);


        weeklySchedule.appendChild(item);
    });
}

export function fillActivityOptions(activities) {
    const select = document.getElementById("selected-activity");
    const previous = select.value;

    select.innerHTML = '<option value="">Choose an activity</option>';

    activities.forEach(function (activity) {
        const option = document.createElement("option");
        option.value = activity.id;
        option.textContent = activity.title + " (" + activity.category + ")";
        select.appendChild(option);
    });
 
    select.value = previous;
}