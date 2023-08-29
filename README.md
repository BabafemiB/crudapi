# InventoryScheduler

## Introduction

InventoryScheduler utilizes REST APIs powered by Node.js and Express to query the database using the CRUD operations to converse and send data between the front end and the database.

## API Details :

### Accepted Parameters

The API will respond to the following 'Accept:' values with appropriate content.

- text/plain - Content will be returned as a plain string.
- application/json - Content will be returned as a JSON object.
- text/html - Content will be returned as an HTML page containing key:value pairs in an unordered list.

### Operations

| Method   | Path                   | Description                                                                                                                                   |
| :------- | :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`    | `/api/inventories/`    | Fetches all the inventory datas from the database                                                                                             |
| `POST`   | `/api/inventories/`    | creates and stores a inventory data in the database                                                                                           |
| `GET`    | `/api/inventories/:id` | Fetches specific inventory data with help of the id from the database                                                                         |
| `PATCH`  | `/api/inventories/:id` | Updates specific inventory data with help of the id to the database                                                                           |
| `DELETE` | `/api/inventories/:id` | Deletes specific inventory data with help of the id from the database                                                                         |
| `POST`   | `/api/user/login`      | Would make a login POST request to the database by crosschecking user info and returning a tokenised password to login                        |
| `POST`   | `/api/user/signup`     | Would make a login POST request to the database as well as save the user details to the database whilst returning tokenised password to login |

## Testing

Test CRUD operations, Accept parameters, and construct requests with [Postman](https://www.postman.com/)
