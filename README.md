# SK Pauh Jaya - School Website Project

## Project Overview
This project is a demo school website for SK Pauh Jaya, featuring an admin dashboard and a parent portal. The website includes functionality for managing school activities, reports, payments, and user profiles.

## Project Structure
The project has been structured following web development best practices by separating HTML, CSS, and JavaScript components:

```
SK Pauh Jaya/
├── index.html           # Main HTML structure
├── asset/               # Asset directory for resources
│   ├── css/             # CSS stylesheets
│   │   └── style.css    # Main stylesheet
│   └── js/              # JavaScript files
│       └── script.js    # Main JavaScript functionality
├── README.md            # Project documentation
└── .gitignore           # Git ignore file
```

## Component Separation

The original monolithic `index.html` file has been separated into three distinct components:

### 1. HTML Structure (index.html)
Contains the semantic markup and document structure with appropriate references to external CSS and JavaScript files.

![HTML Structure](images/html-structure.png)

### 2. CSS Styles (asset/css/style.css)
Contains all styling information including:
- Basic styling (margins, padding, colors)
- Layout components (grid, flexbox)
- Responsive design rules
- UI component styling (buttons, forms, tables)
- Dashboard styling
- Modal and popup styling

![CSS Styles](images/css-styles.png)

### 3. JavaScript Functionality (asset/js/script.js)
Contains all interactive functionality including:
- User authentication and session management
- Dashboard navigation and section display
- Activity and program management
- Report handling
- Payment processing
- Form validation and submission
- Modal and popup controls

![JavaScript Functionality](images/js-functionality.png)

## Benefits of Component Separation

This separation of concerns provides several important benefits:

1. **Improved Maintainability**: Each file serves a specific purpose, making code easier to locate and modify.

2. **Better Organization**: Code is logically grouped by function, improving readability and organization.

3. **Easier Debugging**: Issues can be isolated to specific components, simplifying the debugging process.

4. **Improved Performance**: External files can be cached by browsers, potentially improving load times on subsequent visits.

5. **Better Collaboration**: Different team members can work on different aspects of the website simultaneously.

6. **Enhanced Scalability**: New features can be added more easily when the codebase is well-organized.

## Before and After Comparison

The following images show the comparison between the original monolithic structure and the new component-based structure:

### Before: Monolithic Structure
![Before Separation](images/before-separation.png)

### After: Component-Based Structure
![After Separation](images/after-separation.png)

## Features

- **Admin Dashboard**: Manage school activities, reports, and payments
- **Parent Portal**: View child information, reports, and process payments
- **Responsive Design**: Works on various screen sizes
- **User Authentication**: Secure login for different user roles

## Future Improvements

- Implement server-side functionality
- Add a database for persistent data storage
- Enhance security features
- Add more interactive elements and animations