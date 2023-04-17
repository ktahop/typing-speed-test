# Typing Speed Test
> A simple typing game that will test your typing skill measuring accuracy and words per minute.
> Live demo [_here_](http://typingspeed-test.com/)

## Technologies Used
- [_Vite_](https://vitejs.dev/)
- [_MongoDB_](https://www.mongodb.com/)
- [_Socket.IO_](https://socket.io/)
- [_Faker API_](https://fakerjs.dev/)
- [_react-typing-game-hook_](https://www.npmjs.com/package/react-typing-game-hook)

## Features
* Option to choose between random words or random JavaScript syntaxes
* Characters change colors to show feedback on typing each character correctly
* Global chat to interact with other players
* Leaderboard showing a list of players showing their words per minute and accuracy

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
<br />
<br />
For the second terminal, you'll install te frontend packages and run the server using:
```
$ cd client/
$ npm install
$ npm run dev
```
![](https://i.imgur.com/CidjJpV.gif)
