# regMan

regMan is a CRM to manage registrations for summer camps and other small courses. Right now it is built to match the specific needs o Crisol de Cuerda summer camp in Spain (www.crisoldecuerda.com) but it can be easily adapted to match the needs of any other course.

<img src="./client/public/Screenshot 2020-08-28 at 16.45.18.png" alt="Screenshot 2020-08-28 at 16.45.18" style="zoom:50%;" />

<img src="./client/public/Screenshot 2020-08-28 at 16.46.03.png" alt="Screenshot 2020-08-28 at 16.46.03" style="zoom:50%;" />

<img src="./client/public/Screenshot 2020-08-28 at 16.46.15.png" alt="Screenshot 2020-08-28 at 16.46.15" style="zoom:50%;" />

regMan is composed of backend and frontend servers that handle the user information from the website to the database. Checkout the backend server in this repository:

2 separate installations are requiered: one for the backend and one for the frontend.
Go to the server and run `npm i`.
Go to the client and run `npm i`.

Install Postgres and have it running in the default port.
Sequelize will initiate a db called 'crisoltest_db'. Feel free to change it at your convenience.

After this, run `npm start` in both the client and the server. The client uses CRACO to handle internal paths for the components. If you don't start the project with npm start, it won't work.
In each folder you'll find a copy of the .env file with some mock data.

In the .env.copy of the server, you'll find the JWT details for the auth0. Since they're for a mock program, feel free to use them. It might make things easier for you :)

Same with the .env file of the client.

Thanks for picking up this project!! I'm really happy ^\_^
