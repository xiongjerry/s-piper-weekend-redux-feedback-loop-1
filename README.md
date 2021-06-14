# Feedback

## Description

_Duration: 1 Week_

This project was a culmination of my first week using Redux.  This is a single page application that has the goal of capturing user feedback and storing it in a database.  When loaded the user will be asked one question at a time with a drop-down selector.  If they try to proceed without making a select an alert will remind them to do so.  They won't be able to move forward until a selection is made.  Once they have made it through the prompts they'll be able to Submit their ratings which will trigger the data to be sent to the database and reset the local data.

There is a separate admin page that lists all stored values in the database on a table and will allow you to delete them individually.

### Prerequisites

- [Node](https://nodejs.org/en/)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Fork and clone project to local computer.
2. Open with the editor of your choice.
3. Create a database in Postico.
4. [data.sql] will contain the queries needed for the database setup.
5. Terminal `npm install`.
6. Terminal `npm run server`.
7. Open a separate terminal `npm run client`.
8. Nodemon will automatically load changes made
9. Control + C to stop server or client in their respected terminal.


## Built With

- [Redux](https://redux.js.org/)
- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)


## Support

Please email me with suggestions stephen.r.piper@gmail.com