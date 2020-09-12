import React, { Component } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import uuidv1 from "uuid";
import * as noteAction from '../js/actions/noteAction';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


class Note extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePl = this.handleChangePl.bind(this);
        this.handleChangeAng = this.handleChangeAng.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);

        this.state = {
            noteName: '',
            noteAng: '',
            notePl: '',
        }
    }

    handleChangeName(e){
        this.setState({
            noteName: e.target.value,
          })
    }

    handleChangePl(e){
        this.setState({
            notePl: e.target.value,
          })
    };

    handleChangeAng(e){
        this.setState({
            noteAng: e.target.value,
          })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { noteName, noteAng, notePl } = this.state;
        const id = uuidv1();
        this.props.createNote({noteName, noteAng, notePl, id});
        this.setState({noteName: '', noteAng: '', notePl: ''});
    }

    listView(data, index){
        return (
            <div className="row" key={index}>
                <div className="col-md-9" >
                    <Link to={"/archives/"+index}>
                        <li key={index} className="card" id="cardView">
                            {data.noteName}   
                            {/* {"---"} {data.noteAng} {"/"} {data.notePl}  */}
                        </li>
                    </Link>  
                </div>
                <div className="col-md-3">
                    <button onClick={(e) => this.deleteNote(e, index)} className="btn btn-danger" id="butttonRemove">
                    Remove
                    </button>
                </div>
            </div> 
        )
    }

    deleteNote(e, index){
        e.preventDefault();
        this.props.deleteNote(index);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <form onSubmit={this.handleSubmit} id="divFormNote" >
                            <button type="submit" className="btn" id="buttonArea">Add Note</button>
                            <input
                            type="text"
                            id="inputNote"
                            value={this.state.noteName}
                            required="required"
                            onChange={this.handleChangeName}
                            className="form-control"
                            placeholder="Name note"
                            />
                        </form>
                    </div>
                    <div className="col-sm-4" id="saveNote">
                        Zapisane notatki
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <TextareaAutosize onChange={this.handleChangeAng} value={this.state.noteAng} id="areaText" aria-label="minimum height" rows={5} placeholder="Note ang" />
                    </div>
                    <div className="col-sm-4">
                        <TextareaAutosize onChange={this.handleChangePl} value={this.state.notePl} id="areaText" aria-label="minimum height" rows={5} placeholder="Notatka pl" />
                    </div>
                    <div className="col-sm-4" >
                        <ul className="list-group">
                            {this.props.notes.map((note, i) => this.listView(note, i))}
                        </ul> 
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        notes: state.notes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNote: note => dispatch(noteAction.createNote(note)),
        deleteNote: index => dispatch(noteAction.deleteNote(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
