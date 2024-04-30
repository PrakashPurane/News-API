import React, { useState } from "react";
import "./News.css";
import axios from "axios";

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

 
  const fetchNews = () => {
    setLoading(true); // Set loading state to true when fetching starts
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=au&apiKey=6b25fc84dbd9478fa4664a21c4c559f7"
      )
      .then((response) => {
        // console.log(response);
        setData(response.data.articles);
        setLoading(false) // Set loading state to false when fetching is complete
    })
    .catch((error) => {
      console.error("Error fetching news:", error);
      setLoading(false); // Set loading state to false on error
     
    });
}



  return (
    <>
    <div className="news-container">

      <div className="news-button">
        <button className="button" onClick={fetchNews} disabled={loading} >
        {loading ? "Loading..." : "Fetch News"}
          
        </button>
      </div>
      <div className="container">
        <div className="container-box">
         

          {data.map((value, i) => {
            return (
                <div className="news-card" key={i}>
                <div className="cards">
                  <img src={value.urlToImage} alt="" />
                  <h1>{value.title}</h1>
                  <p>{value.description}</p>
                  <span>value.publishedAt</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
            </div>
    </>
  );
};

export default News;
