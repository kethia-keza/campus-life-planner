export function removeFromMyWeek(index) {
    if (index <0 || index >= removeFromMyWeek.length) {
        return false;
    }

    const removedActivity = removeFromMyWeek.splice(index, 1)[0];

    if(!savePlan(myWeek)) {
        myWeek.splice(index, 0, removedActivity);
        return false;
    
    
    }

    return true;
}