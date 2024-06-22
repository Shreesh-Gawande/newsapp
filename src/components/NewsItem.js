import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url}=this.props
    return (
      <div>
        <div className="card mx-5 my-4" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body  ">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
