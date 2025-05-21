# onlydigital E2E Tests
## Introduction
This guide provides instructions on how to set up and run **end-to-end (E2E) tests** for **onlydigital** using **Playwright**.

---

## Setup

### 1️⃣ Install Playwright Dependencies
Run the following command to install Playwright dependencies:
```sh
npx playwright install
```

### 2️⃣ Install Project Dependencies
Ensure all project dependencies are installed:
```sh
npm install
```

### 3️⃣ Create a `.env` File
Create a new `.env` file in the root of your project and add the following environment variables:
```
SITE_URL=https://only.digital
```


---

## Running Tests
To execute the E2E tests, run:
```sh
npm run test
```

---

## Generating Test Reports
To generate and view the test report, use:
```sh
npm run report
```

### Accessing the Last Report
After running tests, you can view the latest test report by visiting:
```
http://localhost:2004
```
This will display the results of your most recent test run.
