export function checkTitle(title) {
    return title.trim() !== "";

}

export function checkDuration(duration) {
    return Number.isInteger(Number(duration)) && Number(duration) >0;
}

export function checkDay(day) {
    const days= [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    return days.includes(day);
}

export function checkTime(time) {
    const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/;
    return timePattern.test(time);
}

export function validatePlan(plan) {
    const errors = {};

    if (!plan.activityId) {
        errors.activityId= "Please choose an activity.";
    }

    if(!checkDay(plan.day)) {
        errors.day = "Please choose a valid day.";

    }

    if(!checkTime(plan.time)) {
        errors.time = "Please enter a valid time.";

    }

    if (!checkDuration(plan.duration)) {
        errors.duration = "Please enter a valid duration.";
        
    }

    return errors;
}

export function checkSearch(searchText) {
    return searchText.trim() !=="";

}