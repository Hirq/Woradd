import React, { Component } from "react";
import { connect } from "react-redux";
import './About.scss';
import * as noteAction from '../js/actions/noteAction';

class Archives extends Component {

  constructor(props){
    super(props);

    this.state = {
        noteAng: '',
        notePl: '',
        lista: [],
    }
  }

  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-10">
          <div className="card" id="nameArchive">
            <h2>{data.noteName}</h2>
          </div>
          <div className="row">
            <div className="col-md-5 card">
              <h2>ANG</h2>
              {data.noteAng}
            </div>
            <div className="col-md-1">
            </div>
            <div id="column" className="col-md-5 card">
              <h3>PL</h3>
              {data.notePl}
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    this.lista = this.props.notes.map((note, i) => this.listView(note, i))

    return(
      <div className="container">
          {this.lista[this.props.match.params.index]}
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
        deleteNote: index => dispatch(noteAction.deleteNote(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Archives);