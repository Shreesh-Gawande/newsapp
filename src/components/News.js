import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    console.log("Hellow i am a constructor");
    this.state={
    articles :[],
    loading :false
    }
  }
  async componentDidMount(){
  let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e4d8e520419f4d8e89e0eee41150ae4d"  
  let data= await fetch(url);
  let parsedData= await data.json();
  this.setState({articles:parsedData.articles})
  }
  render() {
    return (
      <div className="cointaner my-4">
        <h2> Top Headlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{

            return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title? element.title:""}
              description={element.description? element.description:""}
              imageUrl={element.urlToImage?element.urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/120E6/production/_132585937_netanyahu.jpg"}
              url={element.url}
            />
          </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;
