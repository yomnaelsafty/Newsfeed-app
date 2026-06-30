# 📰 NewsFeed App

A React-based news aggregator that fetches and displays live news articles using the [NewsAPI](https://newsapi.org/). Built as part of a front-end development learning journey, with custom features added on top of the original course project.

## ✨ Features

- 🔍 **Live search** with debounced API calls to minimize unnecessary requests
- 🗂️ **Category filtering** (general, sports, technology, business, etc.)
- 📄 **Pagination** (Next / Previous navigation)
- ⏳ **Loading skeletons** for a smoother UX while fetching data
- ⚠️ **Error handling** with user-friendly messages
- 📱 Responsive, MUI-based UI

## 🛠️ Built With

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Material UI (MUI)](https://mui.com/)
- [NewsAPI](https://newsapi.org/) — `everything` endpoint
- [Lodash](https://lodash.com/) (debounce)

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- A free [NewsAPI](https://newsapi.org/register) API key

### Installation

```bash
git clone https://github.com/<your-username>/newsfeed-app.git
cd newsfeed-app
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your NewsAPI key:

```
VITE_NEWS_API_KEY=your_api_key_here
```

> ⚠️ Make sure `.env` is listed in `.gitignore` so your API key is never pushed to GitHub.

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## 📌 Notes

- NewsAPI's free tier has a daily request limit (100 requests/day) and does not support browser-based requests on some endpoints — this project uses the `everything` endpoint, which works directly from the client for development purposes.
- Search input is debounced (500ms) to avoid hitting the API on every keystroke.

## 👩‍💻 Author

**Yomna Ali El-Safty**
Clinical Pharmacist & Front-End Developer — building the bridge between medicine and technology.

[GitHub](https://github.com/yomnaelsafty) · [LinkedIn](https://linkedin.com/in/yomna-ali-66a778148)

## 📄 License

This project is open source and available for learning purposes.
