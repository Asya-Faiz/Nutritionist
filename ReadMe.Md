 #	NUTRITIONIST - A Case Study

## Problem Statement

Build a system to search for a specific food to find it’s nutrition details, show list of matching food, view the nutrition content for a selected food and bookmark favourite food for later reference.

## FoodData Central API

- The application needs to search for food and find nutrition data for a selected food by registering with the following link and get API key required to call the APIs.

- https://fdc.nal.usda.gov/api-key-signup.html      
- https://fdc.nal.usda.gov/api-guide.html

## Modules

### User Module

On launching the application the user should get the login page. The login page should have a link for registration using which the user should be able to register.
Upon login, the user should be taken to the home page.  Home page should have proper ui elements to search for food based on  fooddescription, food type,  published date.
Home page should have proper navigation links to logout, fetch  favourite food, fetch  recommended food etc.

![Screenshot from 2020-01-21 09-12-48](https://user-images.githubusercontent.com/60126977/72788068-23e12380-3c57-11ea-81fe-99591a2b8538.png)

### Search Food Module


User should able to search with different crieteria (based on availability of rest end point) like
a)ingredients
b)brandOwner
c)requireAllWords

Pagination should implemented sorting shoulld be implemented.

Sorting the results should also be possible. Based on selected field – like description, food type, published date.

![Screenshot from 2020-01-21 13-59-12](https://user-images.githubusercontent.com/60126977/72787579-39a21900-3c56-11ea-82e4-4213bf127934.png)

The users should be able to select a specific item, which should display the nutrients of the particular item (Data fetched form the API).
           
![Screenshot from 2020-01-21 09-17-13](https://user-images.githubusercontent.com/60126977/72787843-b1704380-3c56-11ea-8aaf-e7faacedc9d8.png)

### Favorite Food Module

User should able to add food as favorite. 
User should able to delete food as favorite

![Screenshot from 2020-01-21 09-18-05](https://user-images.githubusercontent.com/60126977/72787685-648c6d00-3c56-11ea-9a3a-77575c4a38e0.png)

User should able to fetch all favorite food items display into categories (brand owner)

![Screenshot from 2020-01-21 09-18-16](https://user-images.githubusercontent.com/60126977/72787901-d49af300-3c56-11ea-885e-32c3109d64e9.png)

### Recomended Food Module

Fetch all the food items based on the brand of food which the user ordered mostly.

### Meal Module
 
We have added a Meal module to display the total nutrients of total Food items together.

![Screenshot from 2020-01-21 09-20-43](https://user-images.githubusercontent.com/60126977/72787977-f6947580-3c56-11ea-814c-dc1569166f77.png)

## Tech Stack

- Spring Boot
- MySQL
- Angular- CI (Gitlab Runner)
- Docker, Docker Compose


### Commands to run the project on your system (Ubunutu)

1. Make sure docker is installed. 
2. Stop MySQL and MongoDB services running on your system

```
sudo service mysql stop
sudo service mongodb stop.
```
3. run the Docker command

```
docker-compose up --build
```

## Overall Goals

1. Make sure all the functionalities are implemented
2. Make sure both the UI (Component and Services) and server side (For all layers) codes are unit tested.
3. All the Services are up and running using docker (Docker should be used for running them)
4. E2E tests should be executed and shown.
5. Application is completely responsive in nature.
