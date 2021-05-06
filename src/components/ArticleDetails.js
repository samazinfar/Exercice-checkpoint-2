import axios from "axios";
import { useState, useEffect } from "react";

export default function ArticleDetails(props) {
  const params = props.match.params;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://test.spaceflightnewsapi.net/api/v2/articles/${params.id}`)
      .then((response) => response.data)
      .then((data) => setArticles(data));
  }, [params.id]);

  return (
    <div>
      <h1>{articles.title}</h1>
      <img
        src={articles.imageUrl}
        alt={articles.title}
        style={{ width: "600px" }}
      />
      <h3>{articles.newsSite}</h3>
      <p>{articles.summary}</p>
      <h3>{articles.publishedAt}</h3>
    </div>
  );
}
