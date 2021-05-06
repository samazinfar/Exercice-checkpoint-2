import axios from "axios";
import { useState, useEffect } from "react";
import Article from "./Article";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("https://test.spaceflightnewsapi.net/api/v2/articles")
      .then((response) => response.data)
      .then((data) => setArticles(data));
  }, []);

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="filter"
      />
      {articles
        .filter((a) => a.title.includes(input))
        .map((a) => {
          return <Article {...a} />;
        })}
    </div>
  );
}
