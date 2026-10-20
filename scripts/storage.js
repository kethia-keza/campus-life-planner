const STORAGE_KEY= "yourPlannerWeek";

export function savePlan(plan) {
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
        return true;
    }catch (error) {
        console.log("Could not save the plan.", error);
        return false;
    }
}

export function loadPlan() {
    try {
        const savedPlan = localStorage.getItem(STORAGE_KEY);

        if (savedPlan === null) {
            return [];
        }

        const plan = JSON.parse(savedPlan);

        if (!Array.isArray(plan)) {
            return [];
        }

        return plan;
    } catch (error) {
        console.log("Could not load the plan.", error);
        return [];
    }

}

export function clearPlan() {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    }catch (error) {
        console.log("Could not clear the plan.", error);
        return false;
    }
}
