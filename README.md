# 3D Portfolio

## Project Description

This is a 3D Portfolio website built using React.js and Three.js. It is a fully responsive and interactive portfolio showcasing 3D graphics and animations.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/en/) (version 14 or higher recommended).
- You have installed [npm](https://www.npmjs.com/get-npm) (comes with Node.js).
- You have installed [Git](https://git-scm.com/downloads).
- You have Visual Studio Code installed. Download it from [here](https://code.visualstudio.com/).

## Installation

Follow these steps to get the project running on your local machine:

1. Clone the repository:

```bash
git clone https://github.com/ladunjexa/reactjs18-3d-portfolio.git
```

2. Navigate to the project directory:

```bash
cd reactjs18-3d-portfolio
```

3. Install the dependencies:

```bash
npm install
```

## Running the Project in Visual Studio Code

1. Open Visual Studio Code.

2. Open the project folder by selecting **File > Open Folder...** and choosing the `reactjs18-3d-portfolio` directory.

3. Open the integrated terminal in VS Code by selecting **Terminal > New Terminal**.

4. Start the development server by running:

```bash
npm run dev
```

5. Open your browser and go to [http://localhost:5173](http://localhost:5173) to view the portfolio.

## Additional Information

- The project uses EmailJS for sending emails from the client side. You need to create an EmailJS account and set the following environment variables in a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=<your_service_id>
VITE_EMAILJS_TEMPLATE_ID=<your_template_id>
VITE_EMAIL_JS_ACCESS_TOKEN=<your_access_token>
```

- To build the project for production, run:

```bash
npm run build
```

- To preview the production build locally, run:

```bash
npm run preview
```

## Technologies Used

- React.js
- Three.js
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For any questions or feedback, please contact the project owner via GitHub: [ladunjexa](https://github.com/ladunjexa)
