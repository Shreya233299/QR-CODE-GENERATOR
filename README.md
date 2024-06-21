# QR Code Generator

A simple QR Code Generator developed with Node.js, leveraging native npm libraries. This application takes user input to generate a QR code image and saves both the image and the user-provided URL in separate files.

## Features

- Takes user input for a URL using `inquirer`
- Generates a QR code image using `qr-image`
- Saves the URL in a text file using `fs`
- Saves the QR code as a PNG file

## Installation

### Prerequisites

- **Node.js** (v20.14.0 or higher): Download and install from [nodejs.org](https://nodejs.org/).
- **npm** (v10.7.0 or higher): Comes with Node.js. Verify installation with the following commands:
    ```sh
    node -v
    npm -v
    ```

### Steps to Install

1. **Clone the Repository**:
    - Open your terminal or command prompt.
    - Navigate to the directory where you want to clone the repository.
    - Run the following command to clone the repository:
        ```sh
        git clone https://github.com/Shreya233299/QR-CODE-GENERATOR.git
        ```

2. **Navigate to the Project Directory**:
    - Change into the project directory using the `cd` command:
        ```sh
        cd QR-CODE-GENERATOR
        ```

3. **Install Dependencies**:
    - Install the necessary npm packages by running:
        ```sh
        npm install
        ```

## Running the Application

1. **Run the Application**:
    - Start the application with the following command:
        ```sh
        node index.js
        ```

2. **Provide User Input**:
    - Follow the prompts to enter the URL for which you want to generate a QR code.

3. **Check Generated Files**:
    - The application will generate a QR code image and save it as `qr.png` in the project directory.
    - The provided URL will also be saved in a text file named `url.txt` in the project directory.

## Project Structure

```sh
QR-CODE-GENERATOR/
│
├── index.js          # Main file to run the application
├── package.json      # Project metadata and dependencies
├── README.md         # Project description file
├── url.txt           # Generated file containing user input URL
└── qr.png            # Generated QR code image
```

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer) - A collection of common interactive command line user interfaces.
- [qr-image](https://www.npmjs.com/package/qr-image) - A QR code image generator.
- [fs](https://nodejs.org/api/fs.html) - Node.js file system module.

## Acknowledgments

- Inspiration for this project was taken from the need to easily generate QR codes for URLs.

---

This README section provides comprehensive instructions for users to install, run, and use the QR Code Generator project on their local machines.

