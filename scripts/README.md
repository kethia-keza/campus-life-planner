# YourPlanner

## About the Project

YourPlanner is a user-friendly campus activity planning website that helps students discover campus activities and organize their weekly schedules. Students can browse activities, search by title or description, filter activities by category, and build a personalized weekly plan.

The project is built using HTML, CSS, and JavaScript, with JSON data for campus activities and browser Local Storage for saving weekly plans.

##  Features

- **Browse Campus Activities:** View activities with their titles, descriptions, categories, days, times, and durations.
- **Search Activities:** Search activities by title or description.
- **Filter by Category:** Narrow down activities using the category filter.
- **Plan Activities:** Select activities and add them to a weekly schedule.
- **Edit Activities:** Update the details of activities already in the weekly plan.
- **Remove Activities:** Remove activities from the weekly schedule.
- **Form Validation:** Validate activity selections, weekdays, time formats, and positive whole-number durations.
- **Persistent Storage:** Save and load weekly plans using browser Local Storage.
- **JSON Export:** Export the weekly plan as a JSON file.
- **Responsive Interface:** Use the website on different screen sizes.

## Technologies Used

- HTML5 — page structure and semantic elements.
- CSS3 — styling and responsive layout.
- JavaScript (ES Modules) — application logic and user interactions.
- JSON — activity data and exported weekly plans.
- Regular Expressions — time-format validation.
- Browser Local Storage — persistent weekly plan storage.
- Git and GitHub — version control and project hosting.

##  Project Structure

```text
YourLifePlannner/
├── index.html
├── README.md
├── seed.json
├── tests.html
├── Codevibe_reports/
├── scripts/
│   ├── main.js
│   ├── state.js
│   ├── storage.js
│   ├── ui.js
│   ├── search.js
│   └── validator.js
└── styles/
    └── style.css
```

### Main Files

- `index.html` — contains the website's sections, forms, controls, and page structure.
- `seed.json` — provides the campus activity data.
- `scripts/main.js` — coordinates application behavior, event listeners, planning, editing, removal, and JSON export.
- `scripts/state.js` — manages the weekly plan and updates its state.
- `scripts/storage.js` — saves and loads weekly plans using Local Storage.
- `scripts/ui.js` — displays activities, weekly plans, and activity selection options.
- `scripts/search.js` — handles text searching and category filtering.
- `scripts/validator.js` — validates planning form inputs.
- `styles/style.css` — defines the website's appearance and layout.
- `tests.html` — provides a page for running project tests.

## Regular Expression Catalog

Regular expressions help validate text patterns. The following table documents relevant validation patterns and additional patterns that could be implemented as the project is extended.

| Purpose | Pattern | Example |
|---|---|---|
| Valid 24-hour time | `^([01]\d|2[0-3]):[0-5]\d$` | `14:30` |
| ISO-style date format | `^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$` | `2026-10-18` |
| Positive whole number | `^[1-9]\d*$` | `60` |
| Category or tag | `^[A-Za-z]+(?:[ -][A-Za-z]+)*$` | `Study Group` |
| Duplicate consecutive words | `\b(\w+)\s+\1\b` | `study study` |

**Implementation note:** The time pattern is implemented in `scripts/validator.js`. Duration validation currently uses JavaScript number checks rather than the positive-number regular expression. The date, category, and duplicate-word patterns should be treated as additional validation examples unless they are implemented and tested in the code.

##  How to Run the Project

1. Clone or download the project repository.
2. Open the `YourLifePlannner` folder in Visual Studio Code.
3. Install the Live Server extension if necessary.
4. Open `index.html`.
5. Right-click the file and select **Open with Live Server**.
6. Use the website to browse activities, search and filter them, create a weekly plan, edit or remove activities, and export the plan.

Live Server is recommended because the application loads activity data from `seed.json` using JavaScript's `fetch()` function.

##  Testing

1. Start Live Server.
2. Open `tests.html` through the same local server.
3. Review the test results.
4. Investigate and fix any failed tests before submission.

Also test the main application manually:

- Add an activity to the weekly plan.
- Edit an existing activity and save the changes.
- Cancel editing and confirm the form resets.
- Remove an activity.
- Search for activities and filter them by category.
- Refresh the page and confirm the saved plan remains available.
- Export the weekly plan and check the downloaded JSON file.
- Test invalid time, day, and duration inputs.

Only report tests as passing after running them and confirming the results. If a storage test clears saved data, run it with a temporary test plan or update it to preserve existing data.

## Accessibility Notes

The project should be checked for the following accessibility features:

- Semantic HTML landmarks such as `header`, `nav`, `main`, `section`, and `footer`.
- Form labels associated with their corresponding inputs.
- Visible keyboard focus indicators.
- A skip-to-content link.
- Accessible status and error messages using `aria-live` where appropriate.
- Sufficient text and background contrast.
- Keyboard access to links, buttons, forms, and other interactive elements.
- Clear feedback when activities are added, edited, removed, or exported.

Verify each feature in the running website before describing it as fully implemented.

## Keyboard Navigation

| Key | Expected action |
|---|---|
| `Tab` | Move to the next focusable element. |
| `Shift + Tab` | Move to the previous focusable element. |
| `Enter` | Activate links and buttons where supported. |
| `Space` | Activate buttons and toggle checkboxes where supported. |
| Arrow keys | Navigate options in supported select controls. |
| Typing | Enter information into search fields and form inputs. |

Test keyboard navigation in the browser to confirm that focus order is logical and all important features are accessible without a mouse.

## Future Improvements

Potential improvements include:

- Implement and test advanced regular-expression searching and input validation.
- Add sorting options for activities.
- Complete dashboard statistics and the seven-day activity trend.
- Add weekly duration targets and planning limits.
- Implement validated JSON import.
- Complete the minutes-to-hours duration converter.
- Expand automated tests for planning, editing, removal, storage, and data import/export.
- Review accessibility and responsive behavior across devices.

## 1 Deployment

GitHub Repository:
https://github.com/kethia-keza/campus-life-planner/tree/main


GitHub Pages Website:
https://kethia-keza.github.io/campus-life-planner/

## 12. Conclusion

YourPlanner provides students with a simple way to explore campus activities and organize their weekly schedules. Its modular JavaScript structure separates application state, storage, validation, searching, and user-interface rendering, making the project easier to maintain and extend.
