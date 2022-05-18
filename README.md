# Phase-3-Project

## Introduction
------------

Welcome to my third Flatiron School project! This is the frontend for my Fantasy Football App. Here is the link to the backend portion of this project : https://github.com/mterrano1/fantasy-football-backend


## Requirements

- Use Active Record to interact with a database.
- Have at least two models with a one-to-many relationship.
- At a minimum, set up the following API routes in Sinatra:
  - create and read actions for both models
  - full CRUD capability for one of the models
- Build a separate React frontend application that interacts with the API to
  perform CRUD actions.
- Use good OO design patterns. You should have separate classes for each of your
  models, and create instance and class methods as necessary.

For example, build a todo list application with a React frontend interface and a
Sinatra backend API, where a user can:

- **Create** a new todo
- **Read** a list of all todos
- **Update** an individual todo
- **Delete** a todo

A `Todo` can be tagged with a `Category`, so that each todo _belongs to_ a
category and each category _has many_ todos.

## Getting Started

First, you will need to fork and clone this repository into a local directory. Once you navigate into the correct file, run:

```console
$ npm start
```

The app should open in http://localhost:3000/


I hope you enjoy viewing my riddle app as much as I enjoyed making it!


## Description
-----------

- The navigation bar will allow you to switch between the home, players, add player, and teams page
- The `'/players'` page will render all of the fantasy football players in the database. All players are sorted based on the position they play.
  - Clicking on the button titled 'Free Agents' will display all of the players available to add to a team that don't currently belong to a fantasy team. Upon clicking, the button text will change to 'All' and clicking it again will render all of the players in the database once again.
  - If a user clicks on the player card, they will be routed to `'/players/:id'` where they can view more information about the player.
- The `'/players/:id'` page will give the user additional options:
  - If the player doesn't belong to a fantasy team, the user will have the option of adding them to the team with a drop down list. Doing so will route the user to the `'/teams/:id'` page and show them on the fantasy team they just joined.
  - If the player already belongs to a fantasy team, then the user will have the option of clicking on a button to drop them from their existing fantasy team. Doing so will route the user to the `'/teams/:id'` page of the team they were dropped from.
  - Additionally, a user has the option of clicking on the button titled 'retire' which will delete the player from the database. Doing so will route the user to the `'/players'` page. This can be done whether the player belongs to a fantasy team or not.
- The `'/players/new'` page allows the user to add their own player to the database.
- The `'/teams'` page will show a list of all the fantasy teams in the league. Clicking on the team will route the user to the `'/teams/:id'` page where they will be able to see all the fantasy players belonging to that team.


## See it for yourself here!
---------------

https://www.youtube.com/watch?v=-xuh9j95Nq4