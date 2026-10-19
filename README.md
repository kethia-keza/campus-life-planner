#YourPlanner

#About the project
 
 Your Planner is a easy and user-friendly campus life planning website that help student discover their campusactivities and organize their time in a week .




 #2.Features

 -Browse campus Activities.
 -Search activities by title or description.
 - Browse campus activities.
- Search activities by title or description.
- Filter activities by category.
- Add activities to a weekly plan.
- Remove activities from the plan.
- Validate planning form inputs.
- Save and load weekly plans using Local Storage.
- Display activities using JavaScript and DOM manipulation.

## 3. Technologies Used

- HTML5
- CSS3
- JavaScript (ES Modules)
- JSON
- Browser Local Storage

## 4. Regex Catalog

The following patterns are intended for validating user input and searching activities. Confirm that each pattern is implemented in the code before submission.

| Purpose | Regex Pattern | Example |
|---|---|---|
| Valid time | `^([01]\d|2[0-3]):[0-5]\d$` | `14:30` |
| Valid date | `^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$` | `2026-10-18` |
| Positive whole number | `^[1-9]\d*$` | `60` |
| Category or tag | `^[A-Za-z]+(?:[ -][A-Za-z]+)*$` | `Study Group` |
| Duplicate word detection (advanced) | `\b(\w+)\s+\1\b` | `study study` |

## 5. Keyboard Map

The following describes the expected keyboard navigation. Test each action in the website before claiming it works.

- **Tab:** Move to the next interactive element.
- **Shift + Tab:** Move to the previous interactive element.
- **Enter:** Activate links and buttons.
- **Space:** Activate buttons and select checkboxes where applicable.
- **Arrow keys:** Navigate options in supported dropdowns.
- **Typing:** Enter text into search and form fields.

## 6. Accessibility Notes

The website should support:

- Semantic HTML landmarks such as `header`, `nav`, `main`, `section`, and `footer`.
- Labels connected to form inputs.
- Visible keyboard focus indicators.
- A skip-to-content link.
- Accessible status and error messages using `aria-live` or appropriate ARIA roles.
- Sufficient text and background contrast.
- Keyboard navigation without requiring a mouse.

Verify these features in the actual implementation.

## 7. How to Run the Project

1. Open the YourPlanner folder in Visual Studio Code.
2. Install the Live Server extension if needed.
3. Open `index.html`.
4. Right-click and select **Open with Live Server**.
5. Use the website to explore, search, filter, and plan activities.

Live Server is needed because the website loads activity data from `seed.json` using `fetch()`.

## 8. Testing

1. Start Live Server.
2. Open `tests.html` using the same local server.
3. Review the test results.
4. Investigate and fix any failed tests.

The tests cover basic input validation, searching, category filtering, and saving and loading a plan.

**Note:** The current storage test clears its temporary saved data. Run it before creating a real weekly plan, or update the test to preserve existing data.

## 9. Project Structure

```text
YourPlanner/
├── index.html
├── tests.html
├── seed.json
├── README.md
├── styles/
│   └── style.css
└── scripts/
    ├── main.js
    ├── validators.js
    ├── storage.js
    ├── state.js
    ├── search.js
    └── ui.js
```

## 10. Deployment

GitHub Repository: [Add your repository URL]

GitHub Pages Website: [Add your deployed website URL]

## 11. Future Improvements

- Add editing and sorting of activities.
- Add JSON import and export with validation.
- Include dashboard statistics and planning targets.
- Add unit conversions for minutes and hours.
- Improve reminders and accessibility features.

## 12. Conclusion

YourPlanner aims to help students discover campus opportunities and organize their time. Future development can expand its planning tools, accessibility, and data management features.


Video link 