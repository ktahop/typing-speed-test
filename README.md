# Typing Speed Test
> A simple React typing game project that will test your typing skill measuring accuracy (ACC) and words per minute (WPM).
> Live demo [_here_](http://typingspeed-test.com/)

## Technologies Used
- [_Vite_](https://vitejs.dev/)
- [_MongoDB_](https://www.mongodb.com/)
- [_Socket.IO_](https://socket.io/)
- [_Faker API_](https://fakerjs.dev/)
- [_react-typing-game-hook_](https://www.npmjs.com/package/react-typing-game-hook)

## Features
* Option to choose between random words using Faker API or random JavaScript syntaxes
* Characters change colors to show feedback on typing each character correctly
* Global chat to interact with other players using Socket.IO
* Leaderboard showing a list of players showing their words per minute and accuracy. User data is stored using MongoDB
* Game logics are implemented with the help from a third-party custom hook with react-typing-game-hook

![](https://i.imgur.com/CidjJpV.gif)

## Installation
To run this project, you will need <b><i>two</i></b> terminals to run both frontend and backend servers.
<br />
<br />
For the first terminal, you'll install the backend packages and run the server using:
```
$ cd server/
$ npm install
$ nodemon server.js
```
For the second terminal, you'll install the frontend packages and run the server using:
```
$ cd client/
$ npm install
$ npm run dev
```
## Acknowledgements
* This project was inspired by [_typings.gg_](https://typings.gg)
