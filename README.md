# Component-Demos-njs13

## Description

This project is a demo page showcasing various components that utilize the RapidAPI's API. It includes a Bitcoin exchange component, a price history component, and news components. By interacting with the demos, users can gain a better understanding of how these components work and how they can be integrated into their own projects. 

The project is built using Next.js 13, a React component framework that offers server-side rendering, static site generation, and other performance optimizations. Axios is used for making API requests, and Tailwind CSS is utilized for styling the components. The Bitcoin price history chart is created using Recharts, providing users with an interactive and visually appealing way to explore the historical price data of Bitcoin.

One notable feature of this project is the utilization of Next.js 13's serverless functions. This allows you to hide your API keys on the server-side, providing an additional layer of security.

## Features
- Next.js 13 Serverless Functions: The website utilizes Next.js 13's new serverless functions to create a proxy that effectively hides the API key. This ensures that the API key is not exposed on the client-side and provides an additional layer of security.
- Integration with RapidAPI's API: The component in this demo page interacts with RapidAPI's API to fetch data and display it.
- Bitcoind Exchange Component: The demo page includes a Bitcoind exchange component that allows users to view and interact with Bitcoin exchange data.
- Next.js Framework: The project is built using Next.js 13, a popular React component framework that offers server-side rendering, static site generation, and other performance optimizations.
- Axios: Axios is used for making API requests to the RapidAPI's API, providing a simple and efficient way to fetch data.
- Tailwind CSS: The project utilizes Tailwind CSS for easy and responsive styling of the components.
- Recharts: Recharts is used to create the Bitcoin price history chart, allowing users to visualize the historical data in an interactive and intuitive manner.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/smmk123/component-demos-njs13
```

2. Navigate to the project directory:

```bash
cd component-demos
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env.local` file in the project root and add your RapidAPI key:

```plaintext
RAPIDAPI_KEY=your-rapidapi-key
```

The project requires an API key from CoinAPI.co to access the Bitcoin price data. If you don't have one, you can sign up at [CoinAPI.co](https://www.coinapi.io/) and obtain an API key. The API key should be added to the `.env.local` file in the project root as follows:

```plaintext
COINAPI_KEY=your-coinapi-key
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit `http://localhost:3000` to view the demo page.

## Configuration

The project requires a RapidAPI key to make API requests. If you don't have one, you can sign up at [RapidAPI](https://rapidapi.com/) and obtain an API key.

## Usage

Once the project is set up and running, you can access the demo page by visiting `http://localhost:3000` in your web browser. The page will display the component that interacts with RapidAPI's API and the Bitcoind exchange component.

Feel free to interact with the components and explore the functionality provided.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request to the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [RapidAPI](https://rapidapi.com/) for providing the API used in this project.
- [Next.js](https://nextjs.org/) for the React component framework.
- [Axios](https://axios-http.com/) for making API requests.
- [Tailwind CSS](https://tailwindcss.com/) for the responsive styling.
- [Recharts](https://recharts.org/) for creating the Bitcoin price history chart.