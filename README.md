This app was built to meet the following:

<!-- "Instructions
Please create a React app that adheres to the following:
- Create a React app with 3 views - "MAIN", "LIST", "CREATE" (Main contains list and create)

- The MAIN view should contain a horizontal tab bar with 2 tabs: 1. 'List' and 2. 'Create'. Each tab will have a child view.

- The LIST child view (which should be the first/top tab and the default) has a scrollable list of items in the format of:
- {NAME} {Created Timestamp}

{NAME} {Created Timestamp}
- Pre-fill the LIST view with 8 names and corresponding Created Timestamps formatted in a human readable date format
- When the app loads, the list of items should be fetched from localStorage, and any new entries should be saved to localStorage

- Ensure the list view is sorted with the latest created timestamp at the top.
- Only on hover, change the font color of the name to #FF00B3 for a list item

- The CREATE child view contains (1) an input for 'Name', (2) non-editable text which reflects what is typed in the input formatted with <h2> and (3) a button with the label 'Add New Entry'
- The input should validate to ensure it can contain ONLY a through z in either lower or upper case and spaces.
- The user cannot create anything with empty or invalid data
- Display any errors under the input if validation failed - the best apps will not over-inform of errors, only displaying them when necessary
- Clicking the Create button navigates the app back to the list view while adding the new record's {Name} and {Created Timestamp}

- Add PropTypes to any components for validating the types of props passed down from the parent components. You are encouraged o use defaultProps as well


When designing and building, please consider usability issues!  Finally, if there is any ambiguity, make an assumption and be sure to identify and justify your decision." -->

For the 3 views (main, list, create), I wound up using a router. This app could easily be made with a main component that renders list or create components based on a toggle of state via clicking the tabs. I tried to imagine scaling this to fit within an existing app and the different ways that you could do that. In the end I felt it could be interpretted multiple ways and I found this the most satisfying way to create it.

The '/main' page contains '/list' and '/create'. Paths '/' or '/main' will always send the user to '/main/list' as that is defined as the default.

I intentionally did not use any CSS libraries although I normally would. It was not defined in the instructions so I went as base as I could in every way.
