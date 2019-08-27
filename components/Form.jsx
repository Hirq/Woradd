import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle, deleteContact } from "../js/actions/index"
import { blockStatement } from "@babel/types";
import '../components/About.css'
import List1 from "./List1"

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article)),
        deleteContact: index =>dispatch(deleteContact(index))
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        articles: state.articles
    }
  };

class ConnectedForm extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            title_pl: "",
                
        };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, title_pl } = this.state;
        const id = uuidv1();
        this.props.addArticle({title, title_pl, id});
        this.setState({ title: "", title_pl: "" });
    }

    listView(data, index){
        return (
          <div className="row">
            <div className="col-md-10">
              <li key={index} className="list-group-item clearfix">
                {data.title}
              </li>
            </div>
            <div className="col-md-2">
              <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
                Remove
              </button>
            </div>
        </div> 
        )
      }
    
      deleteContact(e, index){
        e.preventDefault();
        this.props.deleteContact(index);
      }


    render() {
        return(
<div>
            <form onSubmit={this.handleSubmit} id="divForm" >
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.props.title}
                        onChange={this.handleChange}
                        placeholder="ANG"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="title_pl"
                        value={this.props.title_pl}
                        onChange={this.handleChange}
                        placeholder="PL"
                    />
                </div>

                <button type="submit" className="btn btn-sm" id="buttonAdd">
                    ADD
                </button>
            </form>  
             <hr />
              {<ul>
               {this.props.articles.map((article, i) => this.listView(article, i))}
             </ul> }
        </div>
        );
    }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;