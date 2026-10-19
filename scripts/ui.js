export function showActivities(activities) {
    const activityList = document.getElementById("activity-list");

    activityList.innerHTML = "";

    if (activities.length === 0) {
        activityList.textContent = "No activities found.Try another search.";
        return;
    
    }

    activities.forEach(funtion(activity) {
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
             activity.day + " at " + activity.time;

        const button =document.createElement("button");
        button.textContent = "Add to My Week";
        button.type = "button";
        button.dataset.activityId= activity.id;


        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(time);
        card.appendChild(button);


        activityList.appendChild(card);


       });
}

export function showMyWeek(activities) {
    const weeklySchedule =document.getElementById("weekly-schedule");
     

    weeklySchedule.innerHTML="";

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

        item.appendChild(title);
        item.appendChild(details);
        item.appendChild(button);


        weeklySchedule.appendChild(item);
    });
}

export function fillActivityOptions(activities) {
    const select = document.getElementById("selected-activity");
    select.innerHTML = '<option value="">Choose an activity</option>';

    activities.forEach(function (activity) {
        const option = document.createElement("option");
        option.value = activity.id;
        option.textContent = activity.title;
        select.appendChild(option);
    });

}