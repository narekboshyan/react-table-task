# React Table Product Listing

This project is a responsive product listing table built using React Table v8, Next.js, and Tailwind CSS. The table displays product information and includes features such as sorting, column hiding/showing, resizing, and responsiveness.

## Features

- **Responsive Design**:
  - The table is fully responsive down to a minimum width of 800px.
  - For screens between 800px and 1000px, a horizontal scroller is implemented if necessary.
- **Sorting**:
  - Sorting functionality is implemented for all columns.
  - Default sorting: The "Name" column is sorted in ascending order, while all other columns are sorted in descending order.
- **Column Visibility**:
  - Users can hide/show columns, except for the "Name" column, which is pinned and cannot be hidden.
- **Column Resizing**:
  - Column resizing functionality is implemented using React Table v8's built-in capabilities.

## Project Specifications

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Table Library**: [React Table v8](https://tanstack.com/table/v8)
- **TypeScript**: Strict rules are followed throughout the project to ensure type safety.
- **Testing**: [Jest](https://jestjs.io/) is used to write and run tests for the product listing table component.
- **Linting**: [ESLint](https://eslint.org/) is used for enforcing code quality and style rules.
- **Formatting**: [Prettier](https://prettier.io/) is used for code formatting.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-table-product-listing.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd react-table-product-listing
   ```
3. **Install the dependencies**:
   ```bash
   npm install
   ```

## Running the Application

1. **Development Mode**:

   ```bash
   npm run dev
   ```

   This will start the Next.js development server. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. **Build the Application**:

   ```bash
   npm run build
   ```

   This command creates an optimized production build of the application.

3. **Start the Production Server**:
   ```bash
   npm start
   ```
   This will start the Next.js production server.

## Testing

1. **Run Tests**:

   ```bash
   npm run test
   ```

   This command will run the Jest test suite.

2. **Watch Tests**:

   ```bash
   npm run test:watch
   ```

   This will run the tests in watch mode.

3. **Generate Coverage Report**:
   ```bash
   npm run test:coverage
   ```
   This command will generate a test coverage report.

## Linting and Formatting

1. **Run ESLint**:

   ```bash
   npm run lint
   ```

   This command will run ESLint to check for code quality issues.

2. **Run Prettier**:
   Prettier is integrated with ESLint and will automatically format your code according to the specified rules.

## Data Mocking

- The data displayed in the table is mocked, and no real API calls are made. This is for demonstration and testing purposes.

## Contributing

Feel free to fork this repository and make improvements. Pull requests are welcome!

## License

This project is licensed under the MIT License.
