# **Edward Dougherty and Jordan Benjamin T3A2**

## **SpaceSaver: MERN full-stack app assignment**

---

### Client

- Deployed Client: [SpaceSaver Client](https://space-saver.netlify.app/)

- Repository: [github.com/Space-Saver-Bookings/space-saver-client](https://github.com/Space-Saver-Bookings/space-saver-client)

### Server

- Deployed Server: [SpaceSaver Server](https://space-saver-server-ab36c9d46e81.herokuapp.com)

- Repository: [github.com/Space-Saver-Bookings/Space-Saver-Server](https://github.com/Space-Saver-Bookings/Space-Saver-Server)

### Part A Documentation

- Repository: [github.com/Space-Saver-Bookings/Space-Saver-Docs](https://github.com/Space-Saver-Bookings/Space-Saver-Docs)

---

SpaceSaver is a web application designed to streamline office space bookings and enhance communication about room availability within an office space. Our goal is to simplify the process of reserving rooms and signal their availability to others.

---

# Table of Contents

- [Deployed Client and Repository](#client)
- [Deployed Server and Repository](#server)
- [Part A Documentation](#part-a-documentation)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Libraries and Dependencies](#libraries-and-dependencies)
- [Project Management](#project-management)
   - [Trello Boards](#trello-boards)
- [User Stories](#user-stories)
- [Retrospective](#retrospective)

---
### Installation

To use the production app, please visit [https://space-saver.netlify.app/](https://space-saver.netlify.app/) and create an account. To use the app locally, please follow the below instructions.

**Requirements:**

- Node.js 18.17
- MongoDB. If you do not have MongoDB installed, please follow the installation instructions [here](https://www.mongodb.com/docs/manual/installation/) and make sure that Mongo is running locally.

**Server:**

1. Create a directory on your machine named SpaceSaver and navigate into it.
2. While in the SpaceSaver directory, from the command line, clone the server repo: `git clone https://github.com/Space-Saver-Bookings/Space-Saver-Server.git`.
3. Navigate into the Space-Saver-Server folder: `cd Space-Saver-Server`.
4. Install npm packages with: `npm install`.
5. Make sure that Mongo is running.
6. Seed the Mongo database with the following command: `npm run seed-dev` to view dummy data in your local application.
7. From the command line, run: `npm start-dev` to start the local server.
8. The server will run on localhost port 3000.

**Client:**

1. From the command line, navigate into the SpaceSaver root directory and clone the client repo: `git clone https://github.com/Space-Saver-Bookings/space-saver-client.git`.
2. Move into the space-saver-client folder: `cd space-saver-client`.
3. Install npm packages with: `npm install` or `yarn install`.
4. Make sure that your local server is still running on port 3000.
5. From the command line, run: `npm run dev` or `yarn run dev` to start the local client.
6. The server will allow requests from localhost 3000.
7. A browser window will open.


[Back to contents](#table-of-contents)

---

### API documentation

Details for how to use the API for the local or deployed server can be found in the [SpaceSaver Server repository](https://github.com/Space-Saver-Bookings/Space-Saver-Server)

### Testing

This application underwent thorough testing, primarily in Chrome Version 119.

#### User Testing

Our user testing process was comprehensive, ensuring a smooth and reliable experience for end-users. We conducted extensive testing sessions to validate the application's usability, functionality, and overall performance.

#### Client

The client benefits from a robust automated testing framework implemented through Github Actions. Leveraging the power of [Vitest](https://vitest.dev) and the React Testing Library ([testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)), our client-side testing ensures the functionality and integrity of the application.

#### Server

On the server side, automated testing is seamlessly integrated into our development workflow through Github Actions. The testing suite incorporates [Jest](https://jestjs.io) for comprehensive testing capabilities and [Supertest](https://www.npmjs.com/package/supertest) to facilitate API endpoint testing. This ensures the reliability and stability of the server components.

## Libraries and Dependencies:

The project utilises a variety of libraries and dependencies to enhance functionality, styling, testing, and development workflow:

### Client

**Dependencies:**

1. **@emotion/react (^11.11.1)**: Provides CSS-in-JS styling for React components.

2. **@emotion/styled (^11.11.0)**: A utility for styling React components with Emotion.

3. **@fullcalendar/core, @fullcalendar/daygrid, @fullcalendar/react, @fullcalendar/timegrid (^6.1.10)**: Offers a feature-rich calendar
   component for React applications.
4. **@mui/icons-material, @mui/material (^5.14.19, ^5.15.0)**: Material-UI components and icons for React applications.

5. **@mui/x-date-pickers (^6.18.4)**: Extension package for Material-UI, providing additional date picker components.

6. **axios (^1.6.2)**: A promise-based HTTP client for making requests to a server.

7. **dayjs (^1.11.10)**: A lightweight and modular JavaScript date library for parsing, validating, manipulating, and formatting dates.

8. **jwt-decode (^4.0.0)**: Decodes JWT tokens, useful for extracting information from tokens.

9. **prop-types (^15.8.1)**: Runtime type checking for React props.

10. **react, react-dom (^18.2.0)**: Core libraries for building React applications.

11. **react-hook-form (^7.49.2)**: A library for managing forms in React applications.

12. **react-hot-toast (^2.4.1)**: Lightweight and customisable toasts for React applications.

13. **react-router-dom (^6.20.1)**: Declarative routing for React applications.

14. **zustand (^4.4.7)**: A small, fast, and scalable state management library for React.

**DevDependencies:**

1. **@testing-library/react (^14.1.2)**: Testing utilities for React applications.

2. **@types/react, @types/react-dom (^18.2.37, ^18.2.15)**: TypeScript type definitions for React and React DOM.

3. **@vitejs/plugin-react (^4.2.0)**: Vite plugin for React support.

4. **@vitest/coverage-v8 (^1.1.0)**: Code coverage tool for V8 JavaScript engines.

5. **autoprefixer (^10.4.16)**: PostCSS plugin to parse CSS and add vendor prefixes.

6. **eslint (^8.53.0)**: Linter for identifying and fixing problems in JavaScript code.

7. **eslint-config-prettier (^9.1.0)**: Shareable ESLint configuration that disables rules that conflict with Prettier.

8. **eslint-plugin-react (^7.33.2)**: Additional ESLint rules for React.

9. **eslint-plugin-react-hooks (^4.6.0)**: ESLint plugin for React hooks.

10. **eslint-plugin-react-refresh (^0.4.4)**: ESLint plugin for React Fast Refresh.

11. **jsdom (^23.0.1)**: A JavaScript implementation of the DOM and HTML standards for use with testing.

12. **postcss (^8.4.32)**: A tool for transforming CSS with JavaScript plugins.

13. **prettier (^3.1.0)**: Code formatter to ensure consistent code styling.

14. **prettier-plugin-tailwindcss (^0.5.8)**: Prettier plugin for Tailwind CSS.

15. **tailwindcss (^3.3.6)**: Utility-first CSS framework for rapidly building custom designs.

16. **vite (^5.0.0)**: A next-generation frontend tooling.

17. **vite-plugin-eslint (^1.8.1)**: ESLint integration for Vite.

18. **vitest (^1.1.0)**: A lightweight testing library for Vite.

### Server

**Dependencies:**

1. **bcryptjs (^2.4.3):** A library for hashing and salting passwords, enhancing security.
2. **cors (^2.8.5)**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in the Express.js framework.

3. **dotenv (^16.3.1)**: A zero-dependency module for loading environment variables from a `.env` file into `process.env`.

4. **express (^4.18.2)**: A fast, unopinionated, minimalist web framework for Node.js, used for building server-side applications and APIs.

5. **helmet (^7.1.0)**: A collection of middleware functions to help secure Express.js applications by setting various HTTP headers.

6. **jsonwebtoken (^9.0.2)**: A library for creating and verifying JSON Web Tokens (JWTs), commonly used for authentication.

7. **mongoose (^8.0.2)**: A MongoDB object modelling tool designed to work in an asynchronous environment. It provides a straightforward schema-based solution to model application data.

**DDependencies:**

1. **jest (^29.7.0)**: A JavaScript testing framework for Node.js applications. Jest provides a test runner, assertion library, and other testing utilities.

2. **nodemon (^3.0.2)**: A utility that monitors for changes in files and automatically restarts the Node.js application when changes are detected. It's commonly used during development to streamline the testing and debugging process.

3. **supertest (^6.3.3)**: A library for testing HTTP assertions, often used in conjunction with Jest to test API endpoints and HTTP requests.

[Back to contents](#table-of-contents)

---

### Project Management

Reflecting on our project journey, it's clear that our initial planning methodology provided a solid foundation for our MERN stack application development. As we progressed, we encountered the need to make decisions and adjustments based on the realities of our timeline and resources.

One significant adaptation was the decision to streamline our efforts by dividing tasks into frontend and backend development, aligning them with our team members' skill sets and interests. This pragmatic approach allowed us to leverage individual strengths, enhance productivity, and maintain a focus on delivering a quality product within our constraints.

While this division of labour proved effective and contributed to the project's success, we acknowledge that given more time, we could have delved deeper into certain areas. The constraints of time prompted us to make thoughtful trade-offs and prioritise essential functionalities, sacrificing in-depth exploration of certain features.

In retrospect, the collaborative and adaptive nature of our team played a crucial role in overcoming challenges and finding innovative solutions. The use of Trello, the adoption of agile methodologies with sprints, and the integration of collaborative tools like Discord for pair programming facilitated efficient communication and coordination despite geographical differences.

Moving forward, we recognise the value of continuous improvement and learning from our experiences. While we celebrate our achievements within the given constraints, we also acknowledge the areas where additional time and exploration could have enhanced the overall project. This reflection serves as a valuable lesson for future endeavours, emphasising the importance of balancing scope with available resources and making strategic decisions to ensure successful project outcomes.

### Trello Boards

#### Start of our development phase
![Beginning](./docs/trello/trello-2023-11-28.png)

#### End of our development phase
![Submission](./docs/trello/trello-2023-12-24.png)

[Back to contents](#table-of-contents)

---

### User Stories

SpaceSaver's user stories outline a comprehensive set of features and functionalities aimed at creating a Minimum Viable Product (MVP) for efficient space management within office spaces. The core aspects include an account system, space management, user access management, booking management, and a central dashboard:

1. **Account System (Feature 1):**
   - Implemented a user account system for login functionality.
   - Stored essential user data for various application features.
   - Integrated JWT-based authentication for security.

2. **Space Management (Feature 2):**
   - Enabled users to create and join spaces with flexible permissions.
   - Facilitated space and room creation, allowing admins to manage spaces effectively.

3. **User Access Management (Feature 3):**
   - Provided users with access to information about others in the same space.
   - Allowed non-admin users to invite others to a room.
   - Gave admin users full control over user access management within a space.

4. **Booking Management (Feature 4):**
   - Implemented a robust booking management system.
   - Users could create, view, update, delete, and invite others to bookings.
   - Integrated calendar overview for visualising space bookings.

5. **Dashboard (Feature 5):**
   - Created a central hub for users and admins with a user-friendly interface.
   - Included sections like headers, sidebars, and main content areas.
   - Featured sub-sections for user details, calendar access, room availability, and quick booking.

While the primary features were successfully addressed, it's noted that certain "nice-to-have" or optional features, such as additional authentication methods, robust user access management, notifications for bookings, and analytics in the dashboard, were not fully implemented due to time constraints.

[Back to contents](#table-of-contents)

---

### Retrospective

Edward and Jordan take immense pride in the successful completion of this project. Their dedication and hard work not only met their own high standards but also left the client, thoroughly satisfied. Throughout the journey, they operated seamlessly as a team, supporting each other through challenges and maintaining a positive spirit, even in the face of unexpected bugs.

Despite the challenge of coordinating work across different continents, with Edward based in Europe and Jordan in Australia, they faced a critical bug the day before the handover with humour and resilience. Navigating through the debugging process together, they demonstrated exceptional teamwork and adaptability, overcoming the obstacle despite the geographical distance.

The client expressed such satisfaction with the final product that discussions for potential future projects are already underway. Discussions already for the additional functionality of a tablet display which would work in tandem with the current SpaceSaver application.

[Back to contents](#table-of-contents)