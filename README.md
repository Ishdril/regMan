<img src="./client/public/regman-logo-wide.png" alt="regman-logo-wide" style="width: 100%;" />[![GitHub license](https://img.shields.io/github/license/Ishdril/regMan)](https://github.com/Ishdril/regMan/blob/develop/LICENSE)[![GitHub release](https://img.shields.io/github/release/Ishdril/regMan)](https://github.com/Ishdril/regMan/releases/latest)[![GitHub contributors](https://img.shields.io/github/contributors/Ishdril/regMan)](https://github.com/Ishdril/regMan/graphs/contributors)[![GitHub issues](https://img.shields.io/github/issues/Ishdril/regMan)](https://GitHub.com/Ishdril/regMan/issues)

### Introduction

regMan is a CRM to manage registrations for summer camps and other small courses. Right now it is built to match the specific needs of Crisol de Cuerda summer camp in Spain (www.crisoldecuerda.com) but it can be easily adapted to match the needs of any other course.

regMan offers a simple public-access registration form for anyone wishing to attend the course and an administration section that allows the organisers to manage the registration status of each participant, control their payment status and send status updates to the participants using email.

<img src="./client/public/Screenshot 2020-08-28 at 16.45.18.png" alt="Screenshot 2020-08-28 at 16.45.18" style="zoom:50%;" />

<img src="./client/public/Screenshot 2020-08-28 at 16.46.03.png" alt="Screenshot 2020-08-28 at 16.46.03" style="zoom:50%;" />

<img src="./client/public/Screenshot 2020-08-28 at 18.03.54.png" alt="Screenshot 2020-08-28 at 18.03.54" style="zoom:50%;" />

Checkout a video demo of the app on [youtube](https://www.youtube.com/watch?v=D84fCTPduDY):

[![Watch the video](https://img.youtube.com/vi/D84fCTPduDY/hqdefault.jpg)](https://youtu.be/D84fCTPduDY)

### Getting started?

---

##### Here's what you should do:

regMan is composed of backend and frontend servers that handle the user information from the website to the database.

To get the program started, follow the next steps:

1. From the root directory, run `npm i`. This will install the necessary dependencies in both the client and server folders, as well as some global ones.
2. Install and run a postgreSQL database using the default port.
3. From the root directory, run `npm run dbStart`. This will generate the database and seed the initial data for the project.
4. Finally, from the root directory, run `npm start`. This will fire up the server process and the client.

In the client and server folders, you'll find copies of the .env files with mock data to help you with the .env file structure.

### Tech stack:

---

##### Frontend:

- [React](https://reactjs.org/)
- [React-Router](https://reactrouter.com/)
- [Auth0](https://auth0.com/)
- [Chart.js](https://www.chartjs.org/)
- [React-Switch](https://github.com/markusenglund/react-switch)

##### Backend:

- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [NodeMailer](https://nodemailer.com/)

### Author

---

Bernat Duran - [Github](https://github.com/Ishdril) - [Linkedin](www.linkedin.com/in/bernat-duran)
