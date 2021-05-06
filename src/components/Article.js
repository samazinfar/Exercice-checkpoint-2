import React from "react";
import { NavLink } from "react-router-dom";

export default function Article({ id, title, imageUrl, newsSite, publishedAt }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} style={{ width: "250px" }} />
      <h2>{newsSite}</h2>
      <NavLink to={`/articles/${id}`}>Details</NavLink>
      <h3>{publishedAt}</h3>
    </div>
  );
}
