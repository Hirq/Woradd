import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StorageIcon from '@material-ui/icons/Storage';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import 'components/About.scss';
import Home from 'components/Home';
import { Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';
import Navbar from 'components/Navbar';
import List1 from 'components/List1';
import Note from 'components/Note';
import Archives from 'components/Archives';
import Timer from 'components/molecules/Timer';
import Blog from 'components/Blog/Blog';
import LoginForm from 'components/LoginRegister/Login';
import RegisterForm from 'components/LoginRegister/Register';

export const routes = {
  start: '/',
  home: '/home',
  list: '/list',
  note: '/note',
  notes: '/note/:index',
  blog: '/blog',
  register: '/register',
  login: '/login',
};


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: '65px',
    // ["@media(min-width: 660px)"]: {
    //   height: '100px',
    // },
    // ["@media(min-width: 590px)"]: {
    //   height: '110px',
    // },

    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode))
  } ,[darkMode])

  function getInitialMode(){
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPreferColorScheme();

    if(isReturningUser){
      return savedMode;
    }
    else if (userPrefersDark) {
      return true;
    }
    else{
      return false;
    }

  }

  function getPreferColorScheme(){
    if(!window.matchMedia) return;

    console.log(window.matchMedia("(prefers-color-scheme: dark)"))
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          <nav>
            <Toolbar >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
              <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Woradd
                {darkMode ? "1" : "2"}
              </Typography>
              <Navbar/>
              <div className="RightNavElements">
                <div className="toogle-dark-mode-container">
                  <span style={{ color: darkMode ? "grey" : "yellow"}}>☀</span>
                  <span className="toggle-dark-mode">
                    <input
                    checked={darkMode}
                    onChange={() => setDarkMode(prevMode => !prevMode)}
                    type="checkbox"
                    className="checkbox-dark-mode"
                    id="checkbox-dark-mode"
                    />
                  <label htmlFor="checkbox-dark-mode"/>
                  </span>
                  <span style={{ color: darkMode ? "red" : "grey"}}>☾</span>
                </div>
                <Timer/>
                <Link to={"/login" } key='LoginForm' className="LinkItem" id="LoginForm">
                  <AccountBoxIcon fontSize="large"/>
              </Link>
              </div>
            </Toolbar>
          </nav>
        </div>
      </AppBar>
      <div className={darkMode ? "dark-mode-drawer" : "light-mode-drawer"}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
 
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
          </IconButton>
        </div>

        <Divider />
        <List >
          {['Home'].map((text) => (
            <NavLink to={routes.home} 
              activeClassName = "LinkItemActive"
              className="LinkItem"><ListItem  button key={text} >
              <ListItemIcon><FitnessCenterIcon /></ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
            </NavLink>
          ))}
          {['About'].map((text) => (
            <NavLink to={routes.list}
              activeClassName = "LinkItemActive"
              className="LinkItem"><ListItem button key={text} >
              <ListItemIcon><FormatColorTextIcon /></ListItemIcon>
              <ListItemText primary={text}/>
           </ListItem>
           </NavLink>
         ))}
        </List>
        <Divider />
        <List>
          {['Note'].map((text) => (
            <NavLink to={routes.note}
              activeClassName = "LinkItemActive"
              className="LinkItem"><ListItem  button key={text} >
              <ListItemIcon><ReportProblemIcon /></ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
            </NavLink>
          ))}
          {['Blog'].map((text) => (
            <NavLink to={routes.blog} 
              activeClassName = "LinkItemActive"
              className="LinkItem"><ListItem  button key={text} >
              <ListItemIcon><StorageIcon /></ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
            </NavLink>
          ))}
          {['RegisterForm'].map((text) => (
            <NavLink to={routes.register} 
              activeClassName = "LinkItemActive"
              className="LinkItem"><ListItem  button key={text} >
              <ListItemIcon><AccountBoxIcon /></ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
            </NavLink>
          ))}
          </List> 
          <Divider />
          <List>
          {['All mail', 'Trash'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <AnnouncementIcon /> : <BeachAccessIcon /> }</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
      </div>
      <div className ={darkMode ? "dark-mode-content" : "light-mode-content"}>
      <main className={classes.content} >
      <div className={classes.toolbar}/>
        <Switch>
          <Route exact path={routes.start} render={() => <Redirect to={routes.home} />} />
          <Route path={routes.home} component={Home} />
          <Route path={routes.list} component={List1}/>
          <Route path={routes.note} component={Note}/>
          <Route path={routes.notes} component={Archives}/>
          <Route path={routes.blog} component={Blog}/>
          <Route path={routes.login} component={LoginForm}/>
          <Route path={routes.register} component={RegisterForm}/>   
        </Switch>
      </main>
      </div>
    </div>
  );
}
