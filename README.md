# fastjobs
# Database is hosted on mongo atlas and Nodejs app is hosted on heroku

# Steps to run the project
1. Clone the project from github using git clone.
2. Connect to a local mongo database. DB name: pets(Will be automatically created), user:localhost, port:27017
3. npm install with node version 17.18.0
4. RUN npm start

Nodejs: 17.18.0
Tech Stack: Nodejs, Expressjs, MongoDB.

# Note
1. To use local DB, uncomment line no 19 and comment line no 21 in app.js
2. To use mongo atlas, comment line no 19 and uncomment line no 21 inapp.js.
3. To run API in postman using localhost: http://localhost:4000
4. To run API in postman using heroku: https://fastjobs-assignment.herokuapp.com
5. Download this sample excel: https://docs.google.com/spreadsheets/d/1eb7PzPXvuOD-EZ7dJalHcpNGcNm7YQEjDIc_Wp__6Cs/edit#gid=0

# APIs

- A POST route “/api/pet” to add pets from an excel file (Pass an excel file in form-data in postman)
- A GET route “/api/pet” to get all the pets in the database (For eg: https://fastjobs-assignment.herokuapp.com/api/pet or http://localhost:4000/api/pet)
- A GET route “/api/pet/:petId” to get a specific pet (petId will be a dynamic value eg. /api/pet/abc123)
- A PATCH route “/api/pet/:petId” to update the details of a specific pet (Pass key-value in params in postman)
- A DELETE route “/api/pet/:petId” to delete a specific pet
