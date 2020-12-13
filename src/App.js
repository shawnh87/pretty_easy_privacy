
import React, {useState} from "react";
import Encrypt from "./components/encrypt/Encrypt";
import Decrypt from "./components/decrypt/Decrypt";
import KeyGen from "./components/key_gen/KeyGen";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  titleBarIcons: {
    marginLeft: 'auto'
    // flex: 1,
  },
  drawer: {
    zIndex: 0,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    // position: "absolute",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  layout: {
    maxWidth: "650px",
    // marginTop:0,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    // [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    //   width: 600,
    //   marginLeft: "auto",
    //   marginRight: "auto",
    // },
  },
  paper: {
    // backgroundColor:'blue',//'#f8f5fc',
    // marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    // padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      // marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      // padding: theme.spacing(3),
    },
  },
}));

function App(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [menuState, setMenuState] = useState(3);

  let state;
  if (menuState === 3) {
    state = <Encrypt />;
  } else if (menuState === 4) {
    state = <Decrypt />;
  } else if (menuState === 5) {
    state = <KeyGen />;
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let pages1 = {
    Introduction: 1,
    Help: 2,
  };
  let pages2 = { Encrypt: 3, Decrypt: 4, "Key Generation": 5 };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["Introduction", "Help"].map((text, index) => (
          <ListItem
            button
            key={text}
            selected={pages1[text]===menuState}
            disabled={true}
            onClick={() => setMenuState(pages1[text])}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Object.keys(pages2).map((text, index) => (
          <ListItem
            button
            selected={pages2[text]===menuState}
            value={pages2[text]}
            key={text}
            onClick={() => setMenuState(pages2[text])}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Pretty Easy Privacy
          </Typography>
          <div className={classes.titleBarIcons}>
          <IconButton  aria-label="github.com" onClick={() => window.open('https://shawnh87.github.io/pretty_easy_privacy/')}>
            <GitHubIcon color="secondary" />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Paper className={classes.paper}>aaa</Paper> */}
        <div className={classes.layout}>
          <Paper className={classes.paper} elevation={0}>
           {state}
          </Paper>
        </div>
      </main>
    </div>
  );
}

export default App;
