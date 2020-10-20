# Initial-D API 

*This was created during my time as a student at Code Chrysalis.


Steps to run this project:

1. Run `yarn` or `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `yarn build` or `npm build` command

Available methods:
*All endpoints start from /api/
GET:
cars (optional query:first)
Retrieve a list of all (or first n)cars
cars/:manufacturer
Retrieve a list of all cars by a manufacturer

car/:model
Find a car by its model name (eg:AE86)

manufacturers
Retrieve a list of all (or first n)manufacturers

POST:
manufacturers/:name
Add a new manufacturer

car (query: manufacturer, name, mode, layout, power ,engine, torque)
Add a new car

PATCH:
car/:model (query: manufacturer, name, mode, layout, power ,engine, torque)
Edit the information of a car

DELETE:
car/:model
Delete a Car by Model Name