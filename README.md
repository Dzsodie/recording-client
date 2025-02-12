![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow.svg)
![Vue 3](https://img.shields.io/badge/Vue-3-green.svg)
![Vite](https://img.shields.io/badge/Vite-Fast%20Build-blue.svg)
![WebSocket](https://img.shields.io/badge/WebSocket-Real%20Time-red.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# Recording Client
## Introduction
This project is a frontend client in JavaScript with Vue 3 in Vite to fetch and save recording data to and from a mock database.
## Purpose
This project is a demo for the Zetoinc interview process, it's main purpose is to showcase the ability to develop a fullstack application.
## Technologies Used
- **JavaScript (ES6+)** - Core language
- **Vue 3** - Frontend framework
- **Vite** - Build tool for fast development
- **WebSockets** - Real-time data synchronization with backend
- **Bootstrap (Optional)** - For styling
- **ESLint & Prettier** - Code linting and formatting
## Features
- displays a list of recordings.
- enables real-time data manipulation for recordings with the status `RECORDED`.
- communicates real-time with backend service.
## Project structure
    ```shell
    src/
    ├── components/
    │   ├── RecordingList.vue
    │   ├── RecordingItem.vue
    ├── views/
    │   ├── Home.vue
    ├── App.vue
    ├── main.js

    ```
## Installation
1. Make sure you have node and npm installed.
    ```shell
    node -v
    npm -v
    ```
2. If node is not installed, run this command.
- Mac users: Use Homebrew
    ```shell
    brew install node
    ```
- download manually from nodejs.org.
3. Clone the repository to your local.
    ```shell
    git clone  https://github.com/Dzsodie/recording-client.git
    ```
## Starting the application
1. At first start, or when the frontend app has changes, run this command, to update dependencies.
    ```shell
    npm install
    ```
2. Start the client with the following command from the root folder of the cloned application.
   ```shell
   npm run dev
   ```
## Manual testing
1. Open http://localhost:5173/ and verify that:
- The WebSocket connection establishes.
- The recording list displays correctly.
- "Recorded" recordings have editable fields.
- "Scheduled" and "Reported" recordings are read-only.
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.