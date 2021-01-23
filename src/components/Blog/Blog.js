import React, { Component } from 'react';
import uuidv1 from "uuid";
import * as blogAction from '../../js/actions/blogAction';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import './Blog.scss';
import MultipleSelect from './BlogSelectBox';

var dateCurrent = new Date(),
today = dateCurrent.getFullYear() + '-' + (dateCurrent.getMonth() + 1) + '-' + dateCurrent.getDate();

class Blog extends Component {
  state = {
    name: '',
    textPl: '',
    textAng: '',
    tag: '',
    today: today,
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleChangeText = (e) => {
    this.setState({
      textPl: e.target.value,
    })
  }

  handleChangeTextAng = (e) =>{
    this.setState({
      textAng: e.target.value,
    })
  }

  handleChangeTag = (e) => {
    this.setState({
      tag: e.target.value,
    })
  }

  handleCallback = (childData) => {
    this.setState({
      tag: childData
    })
  }


  setValue = (value) => {
    this.setState(prevState => ({
      select: {
        ...prevState.select,
        value
      }
    }));
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const { name, textPl,textAng, tag, today } = this.state;
    const id = uuidv1(); 
    this.props.createPost({name, textPl, textAng, tag, today, id });
    this.setState({name: '', textPl: '', textAng: '', tag: '', today: today});
  }

  listView = (data, index) => {
    return(
      <div className="containerPost">
        <h1>Tytul - {data.name}</h1>
        <h2>Tekst - {data.textPl}</h2>
        <h2>TekstAng - {data.textAng}</h2>
        <h3>Tagi: {data.tag}</h3>
        <h3>Data: {data.today}</h3> 
        <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={(e) => this.deletePost(e, index)} className="btn btn-danger" id="butttonRemove"  > 
          Delete
        </Button>
      </div>
    )
  }

  deletePost = (e, index) => {
    e.preventDefault();
    this.props.deletePost(index);
  }

  render(){
    return(
      <div className="container" id="containerBlog">
        <div className="row">
          <div className="col-sm-12">
            <input type="text" id="blogInputName" value={this.state.name} onChange={this.handleChangeName} className="form-control" placeholder="Name post" />
          </div>
          <div className="col-sm-6" id="TextareaBlog">
            <TextareaAutosize onChange={this.handleChangeText} value={this.state.textPl} id="areaTextBlog" rows={5} placeholder="Notatka pl" />
          </div>
          <div className="col-sm-6" >
            <TextareaAutosize onChange={this.handleChangeTextAng} value={this.state.textAng} id="areaTextBlog" aria-label="minimum height" rows={5} placeholder="Note ang" />
          </div>
        </div>
        <div>
        <MultipleSelect parentCallback={this.handleCallback} onChange={this.handleChangeTag}/>
        </div>
        <form onSubmit={this.handleSubmit} id="buttonSave" >
          <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />} type="submit" className="btn">
            Save
          </Button>
        </form>
        <div className="postBlog">
          <h1 id="headerPostBlog">BLOG</h1>
          <ul className="list-group">
              {this.props.posts.map((post, i) => this.listView(post, i))}
          </ul>
        </div> 
      </div>
    );
  }
}

const mapStateToProps = ( state, ownProps) => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: post => dispatch(blogAction.createPost(post)),
    deletePost: index => dispatch(blogAction.deletePost(index))
  }
};

export default connect (mapStateToProps, mapDispatchToProps)(Blog);