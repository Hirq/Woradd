import React from "react";
import { connect } from "react-redux";
import { addArticle, deleteArticle } from "../js/actions/index"
import Form from "./Form"
const mapStateToProps = state => {
  return { 
    articles: state.articles, 
  };
};


const ConnectedList = ({ articles, index }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title} {" - "}
        {el.title_pl}
        {"   "}
              </li>
    ))}

  </ul>

);

const List1 = connect(mapStateToProps)(ConnectedList);
export default List1;