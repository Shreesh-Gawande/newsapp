import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css"

export class News extends Component {
  constructor(props) {
    super(props);
    console.log("Hello, I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 12
    };
  }

  async fetchNews() {
    const { category } = this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e4d8e520419f4d8e89e0eee41150ae4d`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  async componentDidMount() {
    this.fetchNews();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.fetchNews();
    }
  }

  
  handlePageClick = (event, pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { articles, currentPage, postsPerPage } = this.state;

   
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(articles.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="container my-4">
         <div className="top-headlines "><h2>Top</h2><h2> <span class="badge text-bg-secondary badge text-bg-danger">Headlines</span></h2></div>
        <div className="row">
          {currentPosts.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://ichef.bbci.co.uk/news/1024/branded_news/120E6/production/_132585937_netanyahu.jpg"}
                  url={element.url}
                />
              </div>
            );
          })}
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
