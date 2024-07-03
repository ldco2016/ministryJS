# MinistryJS CLI

MinistryJS is a CLI tool designed to launch an interactive development environment for writing and documenting code. This tool is intended to streamline your coding workflow by providing a user-friendly interface for development and documentation.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive Development Environment:** Launches an environment where you can write, test, and document your code interactively.
- **Code Documentation:** Automatically generates and updates documentation as you code.
- **User-Friendly Interface:** Simplifies the development process with an intuitive interface.
- **Real-Time Preview:** See changes in real-time as you code and document.
- **Customizable:** Tailor the environment to fit your specific needs.

## Installation

Before you begin, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine. If you don't have them installed, you can download and install Node.js which includes npm.

To install MinistryJS CLI globally on your machine, run the following command:

```bash
npm install -g ministryjs
```

## Usage

To launch the interactive development environment, navigate to your project directory in your terminal and run:

```bash
ministryjs serve
```

## Commands

### `ministryjs serve`

Starts the MinistryJS interactive development environment.

#### Options:

- `--port <port>`: Specify a custom port (default: 3000).

```bash
ministryjs serve --port 4000
```

## Contributing

We welcome contributions to improve MinistryJS! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

Please ensure all pull requests are well-documented and include any necessary tests.

## License
MinistryJS is licensed under the MIT License.
