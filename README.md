# Book Management System

A simple book management system that allows users to add, edit, and delete books. This project is built with React for the frontend and Node.js/Express for the backend, using MongoDB for data storage.

## Features

- Add new books with a name and description.
- Edit existing books.
- Delete books from the list.
- Navigation between home (add book) and book list views.

## Technologies Used

- Frontend: React, Axios
- Backend: Node.js, Express, Mongoose (MongoDB)
- CSS: Custom styles for layout and design

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. **Clone the repository:**

   ```git clone https://github.com/your-username/book-management-system.git
   cd book-management-system

2. **Install server dependencies:**

   ```cd back
   npm install

3. **Install client dependencies:**

   ```cd ../front
   npm install

### Configuration

1. **Backend:**

- Create a .env file in the backend directory with the following content:

    ```PORT=5000
    MONGODB_URI=mongodb://localhost:27017/bookdb

- Replace mongodb://localhost:27017/bookdb with your MongoDB connection string if it's different.

2. **Frontend:**

- Ensure the backend API URL is correctly set in your Axios requests (default is http://localhost:5000).

## Running the Application

1. **Start the backend server:**

    ```back
    npm start

2. **Start the frontend development server:**

    ```../front
    npm start

3. **Open your browser:**

- Navigate to http://localhost:3000

## Project Structure

The project is structured as follows:

- **`back/`**: Contains the backend server code.

- `model.js`: Mongoose schemas and models.
- `controllers`: Express route handlers.
- `routes.js`: Express routes.
- `server.js`: Express server.

- **`front/`**: Contains the frontend code.
- `src/`: Contains the React code.
- `public/`: Contains the static assets (images, fonts, etc.).
- `public/index.html`: The main HTML file.
- `src/index.js`: The main React entry point.
- `src/App.js`: The main React component.
- `src/components/`: Contains the React components.
- `src/styles/`: Contains the CSS stylesheets.

- **README.md**: Project documentation.

## API Endpoints

**GET /books:** Fetch all books.
**POST /books:** Add a new book.
**PUT /books/**
: Update an existing book.
**DELETE /books/**
: Delete a book.


## Contributing

1. **Fork the repository.**
2. **Create a new branch (git checkout -b feature-branch).**
3. **Make your changes.**
4. **Commit your changes (git commit -am 'Add new feature').**
5. **Push to the branch (git push origin feature-branch).**
6. **Create a new Pull Request.**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.