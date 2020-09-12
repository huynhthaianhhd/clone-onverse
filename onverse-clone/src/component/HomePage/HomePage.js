import React, { Component } from "react";
import Header from "../Header/Header";
import ContentTitle from "../ContentTitle/ContentTitle";
import ItemPost from "../ItemPost/ItemPost";
import "./HomePage.css";
import ContentMid from "../ContentMid/ContentMid";
import listCard from "./list";
import {
    Link
  } from "react-router-dom";
import Footer from "../Footer/Footer";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeName: 1,
    };
  }
  handleOnClick = (value, pageCurrent) => (e) => {
    if (value !== pageCurrent) {
        window.scrollTo(0, 0);
    }
    this.setState(
      {
        activeName: value,
      }
    );
  };
  handleOnClickNext = (pageCurrent) => (e) => {
    this.setState(
      {
        activeName: pageCurrent + 1,
      },
      window.scrollTo(0, 0)
    );
  };
  handleOnClickPrevious = (pageCurrent) => (e) => {
    this.setState(
      {
        activeName: pageCurrent - 1,
      },
      window.scrollTo(0, 0)
    );
  };
  createPageNum = (num, pageCurrent) => {
    let page = [];
    for (let i = 1; i <= num; i++) {
      page.push(
        <span
          key={i}
          className={pageCurrent === i ? "active" : ""}
        >
          <Link onClick={this.handleOnClick(i,pageCurrent)} to={`/${i}`}>{i}</Link>
        </span>
      );
    }
    return page;
  };
  createListCard = (page, column, limitCard) => {
    let elementCurr = (page - 1) * limitCard;
    let elementEnd = page * limitCard;
    let listResult = [];
    if (elementEnd > listCard.length) {
      elementEnd = listCard.length;
    }
    for (let i = elementCurr; i < elementEnd; i++) {
      if (i % 3 === column) {
        if (listCard[i].isPost === 0){
          listResult.push(<ContentMid key={i} title={listCard[i].title} author={listCard[i].author}></ContentMid>);
        }
        else{
          listResult.push(
            <ItemPost
              key={i}
              image={listCard[i].image}
              title={listCard[i].title}
              date={listCard[i].date}
              type={listCard[i].type}
              description={listCard[i].description}
            ></ItemPost>
          );
        }
      }
    }
    return listResult;
  };
  createNext = (pageCurrent,limitCard) => {
    pageCurrent=parseInt(pageCurrent);
    let numberOfPage = Math.ceil(listCard.length / limitCard);
    if (pageCurrent === numberOfPage) return;
    else
      return (
        <span onClick={this.handleOnClickNext(pageCurrent)}>
          <Link to={`/${pageCurrent+1}`}>Next</Link>
        </span>
      );
  };
  createPrevious = (pageCurrent) => {
    pageCurrent=parseInt(pageCurrent);
    if (pageCurrent === 1) {
        return;
    }
    else
      return (
        <span onClick={this.handleOnClickPrevious(pageCurrent)}>
          <Link to={`/${pageCurrent-1}`}>Previous</Link>
        </span>
      );
  };
  render() {
    const  limitCard  = 9;
    const {match}=this.props;
    let pageCurrent;
    console.log(match);
    if (match){
        pageCurrent = match.params.page;
    }
    else pageCurrent = 1;
    pageCurrent=parseInt(pageCurrent);
    let numberOfPage = Math.ceil(listCard.length / limitCard);
    return (
      <div className="home">
        <Header></Header>
        <div className="bodyPage">
        <div>
          <ContentTitle></ContentTitle>
        </div>
        <div className="card_post">
          <div className="card_post_1">
            {this.createListCard(pageCurrent, 0, limitCard)}
          </div>
          <div className="card_post_2">
            {this.createListCard(pageCurrent, 1, limitCard)}
          </div>
          <div className="card_post_3">
            {this.createListCard(pageCurrent, 2, limitCard)}
          </div>
        </div>
        <div className="pagination">
          {this.createPrevious(pageCurrent)}
          {this.createPageNum(numberOfPage,pageCurrent)}
          {this.createNext(pageCurrent,limitCard)}
        </div>
        <div>
            <Footer></Footer>
        </div>
        </div>
      </div>
    );
  }
}
