# Playwright-QuickStart

Playwright-QuickStart is a tool designed to help you quickly set up Playwright testing structures for automated browser testing. This tool supports and TypeScript

## Features

- **Quick Setup**: Instantly creates the necessary folder structure and files for Playwright testing.
- **TypeScript Support**: Ready-to-use TypeScript configuration for writing tests in TypeScript.
- **Simple Configuration**: Default settings to get Playwright tests up and running quickly.
- **Supports Playwright's Full Testing Capabilities**: Automate browser testing across different environments.

## Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)
- **TypeScript** (if you plan to use TypeScript for tests)

## Installation

1. Clone the repository or install the package directly from npm:

   ```bash
   npm install playwright-quickstar

##  Project Structure

     ```bash
└── 📁fixtures
    └── 📁expectedResult
        └── fees.page.ts
        └── withdraw.page.ts
    └── 📁locators
        └── common.page.ts
        └── fees.page.ts
        └── login.page.ts
        └── withdraw.page.ts
    └── 📁testData
        └── login.page.ts
        └── withdraw.page.ts

- **`fixtures/`**: Contains all the test fixtures, including expected results, locators, and test data files.
- **`expectedResult/`**: Contains files with the expected results for your tests.
- **`locators/`**: Contains Page Object Model (POM) files defining locators for various pages.
- **`testData/`**: Contains data files used by the tests, such as input data for login or withdraw.
- **`.DS_Store`**: A macOS-specific file that can be safely ignored or deleted.