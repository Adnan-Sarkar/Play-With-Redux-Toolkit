# Redux-Toolkit ![](https://img.shields.io/badge/Redux-764ABC.svg?style=for-the-badge&logo=Redux&logoColor=white)

This project is a Node.js application that fetches and sorts videos from a given API using Redux Toolkit. The project uses async thunks to fetch data from the API and dispatch additional thunks to fetch related videos based on the tags present in the first fetched videos object. The project also uses the `redux-logger` middleware to log actions and state changes to the console.

## Features

- Fetch video object from a given API using first async thunks

- Fetch related videos using second async thunks based on the tags present in the first fetched video object

- Sort videos based on view count property

- Log actions and state changes to the console using redux-logger

## Credits

This project was completed as part of the `Think in a Redux Way` course on [learn with sumit](https://learnwithsumit.com/) platform.
