# Seminar Application Platform

[Live Demo](https://careerconnect-ir9f.onrender.com/)

This is a MERN stack project with both frontend and backend components, providing a complete authentication system including Google authentication using Firebase. Users can apply for seminars, upload their CVs, and manage their profiles through a comprehensive dashboard. The application is fully responsive and includes several features and pages to enhance user experience.

## Features

- **User Authentication**: Complete authentication system with manual sign-up and Google authentication using Firebase.
- **Dashboard**: Users can edit their username and password, upload a profile picture, and get notified about upcoming seminars and placement drives.
- **CV Upload**: Users can upload their CVs, which are stored in the database.
- **Seminar Application**: Users can apply for seminars through the platform.
- **Responsive Design**: Fully responsive design to ensure a seamless experience across all devices.
- **Pages**:
  - **Upcoming Drives**: Information about upcoming placement drives.
  - **Past Drives**: Archive of past placement drives.
  - **FAQ**: Frequently asked questions page.
  - **About Us**: Information about the platform and team.
  - **Reviews**: Users can create and view reviews, with reviews stored in the database.

## Prerequisites

Before running the project locally, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AyushGupta45/careerconnect.git
   cd careerconnect
   ```

2. **Install Dependencies**

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. **Set Up Environment Variables**

   #### Part 1: Create Environment Variables in Root

   1. In the project root directory, create a file named `.env`.
   2. Add the MongoDB URL, JWT Secret, Email, Password, and Verification Link:
      ```bash
      MONGO_URL="MONGO URL"
      JWT_SECRET="knibnaeiutniubntiuaninrijk"
      EMAIL="_YOUR EMAIL"
      PASSWORD="APP PASSWORD"
      VERIFICATION_LINK="(URL)/verify-email/"
      ```

   #### Part 2: Create Environment Variable for Firebase API Key in Client

   1. Navigate to the `client` directory of the project.

      ```bash
      cd client
      ```

   2. Create a file named `.env`.

   3. Add the Firebase API Key to the `.env` file in the `client` directory:
      ```bash
      VITE_FIREBASE_API_KEY="FIREBASE API KEY"
      ```

## Running the Project in Development Mode

To run the project in development mode, you'll need two terminal windows.

1. In the first window, start the server:

   ```bash
   cd server
   npm run dev
   ```

2. In the second window, start the React app:

   ```bash
   cd client
   npm run dev
   ```

   This will run the server on [http://localhost:3000](http://localhost:3000) and the React app on [http://localhost:5173](http://localhost:5173).

## Accessing the Application

Once the server and client are running, you can access the application in your web browser: [http://localhost:5173](http://localhost:5173)


## Questions or Issues

If you have any questions or encounter any issues while setting up or running the project, feel free to create an issue on this repository. We'll be happy to help!
