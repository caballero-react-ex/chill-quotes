###### Project Site
https://caballero-react-ex.github.io/chillquotes/

# Chillquotes: a Quotes Front-End App
A front-end ReactJS app that request quotes from a RESTful API and deliver them to the user to share. The project was created using the create-react-app CLI. 

## Table of Content
- [Description](#Description)
- [Motivation](#Motivation)
    - [Project Goals](#Project-Goals)
- [Tech Used](#Tech-Used)
- [Installation](#Installation)
- [Thanks](#Thanks)


## Description 
A straight forward ReactJS web application using the create-react-app. The app consumes data from the [Quote Garden REST API](https://github.com/pprathameshmore/QuoteGarden) and deliver a quote to the user. She/He can copy that quote to the clipboard or share it directly in Twitter. 


## Motivation
This project was created by myself with the intention of getting better at React. I wanted to create my own small project, get my hands dirty and not just follow an online tutorial. 

#### Project Goals: 
1) Learn how to consume an API.
2) Get a better understanding how React Hooks works.
3) Learn about PropTypes.
4) Use as little as possible dependencies.
5) Get comfortable with the ReactJS ecosystem.
 
After learning how to use axios and the fetch API, I decided to stick to the fetch API and avoid an extra dependency.  

The majority of the React components and logic was written from scratch (and with the help of Stack Overflow and Google :). I chose not to use existing component libraries because that forces me to get a better understanding of React and I could practice my SCSS skills. 

#### About the UX/UI Design
The goal of this project was not to develop a great UI/UX design, just to focus on coding. But as a designer myself, I needed at least a minimun viable UX to pleased my eyes while coding. I didn´t designed everything from scratch, but got inspiration from the old medium.com landing site. 

## Tech Used
- React (create-react-app)
- SASS
- Fetch API
- PropTypes
- React-uuid

## Installation   
This project requires node and npm installed globally.

Clone the repository to a directory of your choosing
```
$ git clone https://github.com/caballero-react-ex/chillquotes.git
```

Navigate into chillquote directory and install the necessary packages
```
$ npm install 
```

To start up the app locally
```
$ npm start
```

## Thanks
Many thanks to:
- [Prathamesh More](https://github.com/pprathameshmore), creator of the [Quote Garden REST API](https://github.com/pprathameshmore/QuoteGarden) that I use for the ChillQuotes app.
- Github user [JL978](https://github.com/JL978), who inspired me with his [Spotify Clone Project](https://github.com/JL978/spotify-clone-client) to write a proper README file. 
