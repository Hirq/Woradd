import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import './About.scss';
import * as contactAction from '../js/actions/contactAction';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from '../firebase';


import { withStyles } from '@material-ui/core/styles';

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

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      word: '',
      word_pl: '',
    }
  }

  handleChange(e){
    this.setState({ [e.target.id] : e.target.value});
  }

  handleChange2 = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChange3 = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { word, word_pl } = this.state;
    const id = uuidv1();
    this.props.createContact({word, word_pl, id});
    this.setState({ word: "", word_pl: ""});

    firebase
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
          onChange={this.handleChange2('word')}
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
          onChange={this.handleChange2('word_pl')}
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