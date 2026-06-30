export default async function handler(req, res) {
  const { q, page, pageSize } = req.query;

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.VITE_NEWS_API_KEY}`,
  );

  const data = await response.json();
  res.status(200).json(data);
}
