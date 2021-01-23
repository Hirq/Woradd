import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    textAlign: 'center',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 0,
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  inputLabel: {
    display: 'table',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input:{
    marginTop: '8px !important',
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = [
  'Book',
  'Video',
  'Internet',
  'Story',
  'Diary',
  'Job',
  'Holiday',
  'Shopping',
];

function getStyles(tag, tagName, theme) {
  return {
    fontWeight:
      tagName.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



export default function MultipleSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [tagName, setTagName] = React.useState([]);

  const handleChange = (e) => {
    setTagName(e.target.value);
    props.parentCallback(e.target.value + '');
  };

  const ClearMultipleSelect = (e) => {
    e.preventDefault();
    setTagName([]);
  }

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.inputLabel} id="demo-mutiple-chip-label">Tags</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={tagName}
          onChange={handleChange}
          input={<Input className={classes.input} id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag}  style={getStyles(tag, tagName, theme)}>
              {tag}
            </MenuItem>
          ))}   
        </Select>

      </FormControl>
      <Button onClick={ClearMultipleSelect}>CLEAR - do zmiany</Button>
    </>
  );
}
