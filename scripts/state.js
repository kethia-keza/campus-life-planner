import { savePlan, loadPlan } from "./storage.js";

let myWeek = loadPlan();

export function getMyWeek(){
    return myWeek;

}

export function addToMyWeek(planItem) {
    myWeek.push(planItem);


    if (!savePlan(myWeek)) {
        myWeek.pop();
        return false;

    }

    return true;
}

export function updateMyWeek(index, updatedActivity) {
    if(index < 0|| index >= myWeek.length) {
        return false;
    }

    const originalActivity = myWeek[index];
    myWeek[index] = updatedActivity;

    if (!savePlan(myWeek)) {
        myWeek[index] = originalActivity;
        return false;
    }

    return true;
}


export function removeFromMyWeek(index) {
    if (index < 0 || index >= myWeek.length) {
        return false;
    }

    const removedActivity = myWeek.splice(index, 1)[0];

    if(!savePlan(myWeek)) {
        myWeek.splice(index, 0, removedActivity);
        return false;
    
    
    }

    return true;
}