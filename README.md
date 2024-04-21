# This is a simple node.js project with express.js and sequelize

## Development

1. Clone from `git clone https://github.com/Alekxys29/mini-project-nodejs.git`

2. Assuming you already have a MySQL installed and running on your local machine. This requires a local test DB which in this case, I'm using `sample_db` as the DB name. 

3. Navigate to the project folder

4. Go to `/config/config.json`

5. Change the `username`, `password`, `database` and `host` attributes under `development` depending on your local setup.

6. Find and rename the `.env.example` file into `.env` file

7. Open a new terminal

8. Run `npm install` to install all of its dependencies.

9. Run `npm install -g nodemon`

10. If your database doesn't exist yet, you can just call `npx sequelize-cli db:create` command. With proper access it will create that database for you, otherwise skip this step.

11. Run `npx sequelize-cli db:migrate` to create all required tables

12. Run `npx sequelize-cli db:seed:all` to seed all initial data

13. Run `nodemon index.js` to start the node server.

14. Done


## API Routes

* `/api/treasures`
* `/api/moneyvalues`

## Route List (Treasure)

1. Find Treasure (main objective). 
    * _Note_: I added `Basic Auth` on this endpoint to make use of `users` table. The credentials are `email` and `password`. 
    * Feel free to remove the `auth` under `/routes/treasureRouter.js` if not needed.

```
Endpoint: 
GET http://localhost:3000/api/treasures/findTreasure

Authorization:
username: u1@kitra.abc
password: 123123

Body raw (json):
{
    "latitude": "14.552036595352455",
    "longitude": "121.01696118771324",
    "distance": "10",
    "prize_value": "10"
}
```

2. Get All Treasures
```
GET http://localhost:3000/api/treasures
```

3. Get One Treasure
```
GET http://localhost:3000/api/treasures/101
```

4. Add New Treasure
```
Endpoint:
POST http://localhost:3000/api/treasures

Body raw (json):
{
    "latitude": "10.670288392637774",
    "longitude": "122.95022516775629"
}
```

5. Update a Treasure
```
Endpoint:
PUT http://localhost:3000/api/treasures/101

Body raw (json):
{
    "latitude": "10.669345274555331",
    "longitude": "122.95017113813441"
}
```

5. Delete a Treasure
```
DELETE http://localhost:3000/api/treasures/101
```


## Route List (MoneyValue)

1. Get All Money Value
```
GET http://localhost:3000/api/moneyvalues
```


2. Get Money Value by ID
```
GET http://localhost:3000/api/moneyvalues/1
```

3. Get Money Value by Treasure ID
```
GET http://localhost:3000/api/moneyvalues/treasure/101
```

4. Add New Money Value
```
Endpoint:
POST http://localhost:3000/api/moneyvalues

Body raw (json):
{
    "treasure_id": "101",
    "amt": 30
}
```

5. Update Money Value
```
Endpoint:
PUT http://localhost:3000/api/moneyvalues/1

Body raw (json):
{
    "amt": "15"
}
```

5. Delete Money Value
```
DELETE http://localhost:3000/api/moneyvalues/1
```

## Postman Collection

I added a postman collection that I used for testing, feel free to import this if you want. 

Filename: `Serino.postman_collection.json`