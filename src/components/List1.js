import React, { Component } from "react";
import { connect } from "react-redux";
import './About.scss'
import * as contactAction from '../js/actions/contactAction';
import * as setAction from '../js/actions/setAction';
import { Link } from 'react-router-dom';
import uuidv1 from "uuid";
import WordsList from './ListFirebase';

class List1 extends Component {
  state = {
    word: '',
    word_pl: '',
    nameSet: '',
  }

  listView = (data, index) => {
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.word} {"---"} {data.word_pl}
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

  deleteContact = (e, index) => {
    e.preventDefault();
    this.props.deleteContact(index);
  }

  handleChangeNameSet = (e) => {
    this.setState({
      nameSet: e.target.value
    })
  };

  handleSumbit = (e) => {
    e.preventDefault();
    const { nameSet } = this.state;
    const id = uuidv1();
    this.props.createSet({nameSet, id});
    this.setState({nameSet: '',});
  }

  deleteSet = (e, index) => {
    e.preventDefault();
    this.props.deleteSet(index);
  }

  listViewSet = (data, index) => {
    return (
        <div className="row" key={index}>
            <div className="col-md-9" >
                <Link to={"/set/"+index}>
                    <li key={index} className="card" id="cardView">
                        {data.nameSet}   
                    </li>
                </Link>  
            </div>
            <div className="col-md-3">
                <button onClick={(e) => this.deleteSet(e, index)} className="btn btn-danger" id="butttonRemove">
                Remove
                </button>
            </div>
        </div> 
    )
  }

  render() {
    return(
      <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <ul className="list-group">
            {this.props.contacts.map((contact, i) => this.listView(contact, i))}
          </ul> 
        </div>
        <div className="col-sm-4">
          <form onSubmit={this.handleSumbit}>
            <button type="submit" className="btn">Add Set</button>
            <input
            type="text"
            value={this.state.nameSet}
            required="required"
            onChange={this.handleChangeNameSet}
            className="form-control"
            placeholder="Name set"
            />
          </form>
          <ul className="list-group">
            {this.props.sets.map((set, i) => this.listViewSet(set, i))}
          </ul> 
          <WordsList></WordsList>
        </div>
      </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
    sets: state.sets
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSet: set => dispatch(setAction.createSet(set)),
    deleteSet: set => dispatch(setAction.deleteSet(set)),
    deleteContact: index => dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List1);