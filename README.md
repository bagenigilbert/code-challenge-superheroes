# code-challenge-superheroes


# Heroes Superpowers API

Welcome to the Heroes Superpowers API! This API allows you to manage a database of superheroes and their superpowers. You can perform various actions, such as creating and updating heroes and powers, as well as associating heroes with their superpowers.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Endpoints](#endpoints)
  - [GET /heroes](#get-heroes)
  - [GET /heroes/:id](#get-heroesid)
  - [GET /powers](#get-powers)
  - [GET /powers/:id](#get-powersid)
  - [PATCH /powers/:id](#patch-powersid)
  - [POST /hero_powers](#post-hero_powers)
  - [PATCH /heroes/:id](#patch-heroesid)
  - [DELETE /heroes/:id](#delete-heroesid)
  - [POST /powers](#post-powers)
- [Author](#author)
- [License](#license)

## Getting Started

### Prerequisites

Before you start, make sure you have the following dependencies installed:

- Python
- Flask
- Flask-SQLAlchemy
- Flask-Migrate

You'll also need a PostgreSQL database if you plan to use it instead of the default SQLite database.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/heroes-superpowers-api.git
Change into the project directory:

cd heroes-superpowers-api
Install the required Python packages:

pip install -r requirements.txt
Running the Application
Create a configuration file named config.py and set the necessary environment variables for your application, such as the SECRET_KEY and DATABASE_URL. You can use the default values for development.

Initialize the database and seed it with sample data:

python config.py
Start the application:


### python app.py
The application should now be running locally on http://localhost:5007.

## Endpoints
GET /heroes
Retrieve a list of all heroes.

GET /heroes/:id
Retrieve information about a specific hero by providing their ID.

GET /powers
Retrieve a list of all superpowers.

GET /powers/:id
Retrieve information about a specific superpower by providing its ID.

PATCH /powers/:id
Update the description of a superpower by providing its ID.

POST /hero_powers
Associate a hero with a superpower by providing the hero's ID, superpower's ID, and the strength level.

PATCH /heroes/:id
Update the name and super name of a hero by providing their ID.

DELETE /heroes/:id
Delete a hero by providing their ID.

POST /powers
Create a new superpower by providing its name and description.

## Author
This Heroes Superpowers API was developed by Gilbert Bageni. You can reach out to me at gilbertwilber0@gmail.com for any questions or feedback.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
