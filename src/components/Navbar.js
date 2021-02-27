import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import 'components/About.scss';
import * as contactAction from 'js/actions/contactAction';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Timer from 'components/molecules/Timer';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import firebaseApp from 'Firebase/firebase'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    marginTop: '10px',

  },

  cssLabel: {
    color : 'black',
    top: '-7px',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `white !important`,
    },
    height: '40px',
  },

  cssFocused: {
    color: 'white !important',
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'black !important',
  },

});

class Word extends Component {
  state = {
    word: '',
    word_pl: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.id] : e.target.value});
  }

  handleChange2 = (e) => {
    this.setState({
      word : e.target.value,
    });
  };

  handleChange3 = (e) => {
    this.setState({
      word_pl: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { word, word_pl } = this.state;
    const id = uuidv1();
    this.props.createContact({word, word_pl, id});
    this.setState({ word: "", word_pl: ""});


    firebaseApp
    .firestore()
    .collection('words')
    .add({
      word,
      word_pl
    })
  }

  render() {
    const { classes } = this.props;

    return(
      <div>

        <form onSubmit={this.handleSubmit} id="NavbarWordDiv" className={classes.container} noValidate autoComplete="off">
        <TextField
          label="ANG"
          className={classes.textField}
          value={this.state.word}
          onChange={this.handleChange2}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,

            },
            inputMode: "numeric"
          }}
        />
        <TextField
          label="PL"
          className={classes.textField}
          value={this.state.word_pl}
          onChange={this.handleChange3}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            inputMode: "numeric"
          }}
        />
        <Button
          variant="contained"
          color="default"
          type="submit" className="btn btn-sm" id="NavbarBtnAdd"
          >
          Upload1
        </Button>
       </form>

{/* 
       <div className="RightNavElements">
                <div className="toogle-dark-mode-container">
                  <span style={{ color: this.props.darkMode ? "grey" : "yellow"}}>☀</span>
                  <span className="toggle-dark-mode">
                    <input
                    checked={this.props.darkMode}
                    onChange={() => this.props.setDarkMode(prevMode => !prevMode)}
                    type="checkbox"
                    className="checkbox-dark-mode"
                    id="checkbox-dark-mode"
                    />
                  <label htmlFor="checkbox-dark-mode"/>
                  </span>
                  <span style={{ color: this.props.darkMode ? "red" : "grey"}}>☾</span>
                </div>
                <Timer/>
                <Link to={"/login" } key='LoginForm' className="LinkItem" id="LoginForm">
                  <AccountBoxIcon fontSize="large"/>
              </Link>
              </div> */}



      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
  }
};

export default  connect(null, mapDispatchToProps)(withStyles(styles)(Word));