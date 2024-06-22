import React, { Component } from "react";
import NewsItem from "./NewsItem";
import defaultImage from '../images/news-1425905_1280.jpg';
import "./News.css";

export class News extends Component {
  constructor(props) {
    super(props);
    console.log("Hello, I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      error: null,
      currentPage: 1,
      postsPerPage: 12
    };
  }

  async fetchNews() {
    const { category } = this.props;
    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    console.log(`Fetching news with API key: ${API_KEY}`);
    let url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    console.log(`Fetching news from URL: ${url}`);
    
    try {
      this.setState({ loading: true, error: null });
      
      // Set headers to specify HTTP/2.0
      let headers = new Headers();
      headers.append('Upgrade', 'HTTP/2.0');
      
      let response = await fetch(url, {
        headers: headers,
        mode: 'cors',
        credentials: 'same-origin'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      let parsedData = await response.json();
      this.setState({ articles: parsedData.articles, loading: false });
    } catch (error) {
      console.error("Failed to fetch news articles:", error);
      this.setState({ articles: [], loading: false, error: error.message });
    }
  }
  

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.fetchNews();
    }
  }

  handlePageClick = (event, pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { articles, currentPage, postsPerPage, loading, error } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(articles.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="container my-4">
        <div className="top-headlines ">
          <h2>Top</h2>
          <h2> <span className="badge text-bg-secondary badge text-bg-danger">Headlines</span></h2>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <div className="row">
          {currentPosts.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage ? element.urlToImage : defaultImage}
                url={element.url}
              />
            </div>
          ))}
        </div>
        <div className="pagination">
          <nav>
            <ul className="pagination">
              {pageNumbers.map(number => (
                <li key={number} className="page-item">
                  <button onClick={(e) => this.handlePageClick(e, number)} className="page-link">
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default News;
