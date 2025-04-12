# UMHackathon 2025: Enhancing Charity & Donations through Fintech & Technology

## What is the use of this Repo

This Project is a Simple ReactJS Prototype illustrating an online donation platform with seamless collection and secure fund management, enforces transparent distribution and provide measurable impact tracking to both donors and charitable organisations.

The project can be used as an evolutionary prototype to build a more complete version of this donation application.

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1.  **`App`**: The main application component acting as the entry point after `index.js`. It utilizes `react-router-dom` to manage routing between different views, such as the main charity page and the customer list page.

2.  **`Header`**: Renders the navigation bar displayed at the top of the page. Includes navigation links (Donations, Institutions, etc.) and authentication buttons (Sign In, Register).

3.  **`Hero`**: Displays the large banner section prominently below the header. It features a background image (`heroImg.jpg` imported locally) and overlay text ("Make a difference today").

4.  **`CharitySection`**: This component serves as the container for displaying the list of available charitable causes. It includes the section heading ("Charitable Causes You Can Donate To Right Now:") and arranges `CharityCard` components in a grid layout. The data for the charities (including images like `charityImg1.png`, etc.) is currently defined as an array of objects directly within this component.

5.  **`CharityCard`**: Represents a single card displaying information about a specific charitable cause. It shows the charity's image, title, organization name, donation progress bar, amount raised, and donation end date. This is a *Child Component* of the `CharitySection` Component and receives its data via props.

6.  **`Footer`**: Renders the footer section at the bottom of the page. Includes a logo placeholder, social media links, and columns of resource/navigation links (Use cases, Explore, Resources).

#### HTTP client

**axios** library is used to make HTTP Calls

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
