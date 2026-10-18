export function searchActivities(activities, searchText, category) {
    const search = searchText.trim().toLowerCase();

    return activities.filter(function (activity) {

        const matchesText =
        activity.title.toLowerCase().includes(search) ||
        activity.description.toLowerCase().includes(search);

        const matchesCategory=
              category === "all" || activity.category === category;

              return matchesText && matchesCategory;
    });
}

