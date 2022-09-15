# Todo APP
This is a very simple todo list aplication written using React.js.

## Features

The application enables different users to make two different types of lists: a todo list and a shopping list. Items on these lists can be tagged with different categories in a one-to-many relationship:

    each todo item belongs to a todo category and each todo category can have many todo items.
    each todo item belongs to a user and each user can have many todo items.
    similarly, each shopping item belongs to a shopping category and each shopping category can have many shopping items.
    finally, each shopping item belongs to a user and each user can have many shopping categories.

The application uses Active Record to interact with the database and API routes built with Sinatra handle several different CRUD actions:

    retrieving a list of todos from the server
    adding a new todo to the todo list
    removing a todo from the list
    retrieving a list of shopping items from the server
    adding a new shopping item to the shopping list
    removing a shopping item from the list


### Live Link


### Backend repo



