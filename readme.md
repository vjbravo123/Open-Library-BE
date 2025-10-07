# Open Library Backend 📚

![Open Library Logo](https://cdn-icons-png.flaticon.com/512/29/29302.png)

**Live Demo:** [https://open-library-be-1.onrender.com](https://open-library-be-1.onrender.com)
**GitHub Repo:** [Open Library Backend](https://github.com/vjbravo123/Open-Library-BE.git)

---

## Table of Contents

* [About](#about)
* [Features](#features)
* [Technologies](#technologies)
* [API Endpoints](#api-endpoints)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

---

## About

Open Library Backend provides a **RESTful API** for managing books, categories, and user interactions in the Open Library project. It supports fetching book details, searching by categories or keywords, and handling user requests efficiently.

The backend works seamlessly with the [Open Library Frontend](https://open-library-fe.vercel.app/).

---

## Features ✨

* Upload books with PDF files and thumbnails
* Fetch book thumbnails
* Download books by ID
* Easy integration with frontend applications
* Hosted on Render for **live backend API access**
* MongoDB database integration for persistent storage

---

## Technologies 🛠️

* **Node.js** – Backend runtime
* **Express.js** – REST API framework
* **MongoDB** – NoSQL database for books and categories
* **Mongoose** – MongoDB ODM
* **CORS** – Cross-Origin Resource Sharing support
* **Multer** – File uploads handling
* **dotenv** – Environment variable management

---

## API Endpoints 🚀

| Method | Endpoint            | Description                                 |
| ------ | ------------------- | ------------------------------------------- |
| POST   | `/upload`           | Upload a book file along with its thumbnail |
| GET    | `/getThumbnails`    | Get all book titles with thumbnails         |
| GET    | `/DownloadBook/:id` | Download a book by ID                       |

---

## Installation 💻

1. Clone the repository:

```bash
git clone https://github.com/vjbravo123/Open-Library-BE.git
```

2. Navigate to the project folder:

```bash
cd Open-Library-BE
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file based on `.env.example` and add your MongoDB URI and other secrets.

---

## Usage 🏃‍♂️

Start the server:

```bash
npm start
```

The API will run on `http://localhost:5000` (or the port specified in `.env`).

---

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

---

## License 📝

This project is licensed under the MIT License.
