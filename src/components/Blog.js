import React, { Component } from 'react';
import uuidv1 from "uuid";
import * as blogAction from '../js/actions/blogAction';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Scene from './Scene';





class Blog extends Component {



    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeText = this.handleChangeText.bind(this);
      this.handleChangeTag = this.handleChangeTag.bind(this);

      this.state = {
        name: '',
        text: '',
        tag: '',
      }
    }

    handleChangeName(e){
      this.setState({
        name: e.target.value,
      })
    }

    handleChangeText(e){
      this.setState({
        text: e.target.value,
      })
    }

    handleChangeTag(e){
      this.setState({
        tag: e.target.value,
      })
    }

    handleSubmit(e){
      e.preventDefault();
      const { name, text, tag } = this.state;
      const id = uuidv1(); 
      this.props.createPost({name, text, tag, id});
      this.setState({name: '', text: '', tag: ''});
    }

    listView(data, index){
      return(
        <div>
          <h1>Tytul - {data.name}</h1>
          <h2>Tekst - {data.text}</h2>
          <h3>Tagi: {data.tag}</h3>
          
          <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={(e) => this.deletePost(e, index)} className="btn btn-danger" id="butttonRemove"  > 
            Delete
          </Button>

        </div>
      )
    }

    deletePost(e, index){
      e.preventDefault();
      this.props.deletePost(index);
    }



    render(){

        return(
       
          <div className="container" id="containerBlog">
             <Scene /> 
<div className="row">
          <div className="col-sm-8">
              <div className="col">
                <input type="text" id="blogInputName" value={this.state.name} onChange={this.handleChangeName} className="form-control" placeholder="Name post" />
              </div>
              <div className="col">
                  <TextareaAutosize onChange={this.handleChangeText} value={this.state.text} id="areaText" aria-label="minimum height" rows={5} placeholder="Text post" />
              </div>
              <div className="col">
                  <TextareaAutosize onChange={this.handleChangeTag} value={this.state.tag} id="areaText" aria-label="minimum height" rows={5} placeholder="Notatka pl" />
              </div>

          </div>

          <div className="col-sm-4">

              <form onSubmit={this.handleSubmit} id="divFormNote" >
                <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />} type="submit" className="btn" id="buttonArea">
                  Save
                </Button>
              </form>
     
                  <h2>BLOG</h2>

                  <ul className="list-group">
                      {this.props.posts.map((post, i) => this.listView(post, i))}
                  </ul> 
          
              </div>
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