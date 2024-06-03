
# Personal Task Manager

Welcome to the Personal Task Manager! This is the front-end part of a task management application, developed using React and Bootstrap. The back-end will be developed in the future.


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
## Features

- User Authentication (Login $ Sing Up)
- Task Creation with priority levels
- Task Deletion
- Dashboard view for managing tasks
## Technologies Used
- React.js
- Bootstrap
- React Bootstrap
- React Router
- CSS
## Setup and Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/hasantohidul/personal-task-manager.git
    ```
2. Navigate to the project directory:
    ```bash
    cd personal-task-management
    ```
3. Navigate to the client directory:
    ```bash
    cd client
    ```
4. Install dependencies:
    ```bash
    npm install
    ```
5. Start the development server:
    ```bash
    npm start
    ```
    
## File Structure
```bash
personal-task-managemer/
├── public/
├── src/
│ ├── components/
│ │ ├── Auth/
│ │ │ ├── Login.js
│ │ │ ├── Signup.js
│ │ ├── Task/
│ │ │ ├── TaskForm.js
│ │ │ ├── TaskItem.js
│ │ │ ├── TaskList.js
│ ├── pages/
│ │ ├── Dashboard.js
│ │ ├── Home.js
│ ├── App.js
│ ├── App.css
│ ├── index.css
├── .gitignore
├── package.json
├── README.md
```
## Usage
1. **Home Page**: 
   - The home page is the entry point where users can log in or sign up.
   - Navigation to the Dashboard is available after logging in.

2. **Dashboard**:
   - Add tasks using the task form.
   - View tasks in the task list.
   - Delete tasks as necessary.
## Future Enhancements
- Implement back-end functionality for data persistence.
- Add user authentication and authorization.
- Introduce task categories and filters.
- Implement task due dates and notifications.
- Enhance UI with more features and animations.
## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.
## License

Distributed under the MIT License. See `LICENSE` for more information.

