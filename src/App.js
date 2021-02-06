import React, { useState } from "react";
import "./App.css";

import CodeIcon from "@material-ui/icons/Code";
import HomeIcon from "@material-ui/icons/Home";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import NatureIcon from "@material-ui/icons/Nature";
import InfoIcon from "@material-ui/icons/Info";
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  cardroot: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

let arr = [1, 2, 3];

function App() {
  const classes = useStyles();
  const [toggle_sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!toggle_sidebar);
  };
  let sidebarclass = ["sidebar"];
  let mainclass = ["main"];
  if (toggle_sidebar) {
    sidebarclass.push("sidebar-opened");
    mainclass.push("main-closed");
  }
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      {/* sidebar */}
      <div className={sidebarclass.join(" ")}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button onClick={toggleSidebar.bind(this)}>
            <ListItemIcon>
              <CalendarViewDayIcon fontSize="large" className="sideIcons" />
            </ListItemIcon>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <HomeIcon fontSize="large" className="sideIcons" />
            </ListItemIcon>
            <ListItemText primary="Home" className="sideText" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GraphicEqIcon fontSize="large" className="sideIcons" />
            </ListItemIcon>
            <ListItemText primary="Graphs" className="sideText" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NatureIcon fontSize="large" className="sideIcons" />
            </ListItemIcon>
            <ListItemText primary="Trees" className="sideText" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <InfoIcon fontSize="large" className="sideIcons" />
            </ListItemIcon>
            <ListItemText primary="About" className="sideText" />
          </ListItem>
          {/* <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItemLink href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemLink>
          </List> */}
        </List>
      </div>
      {/* mainbody */}
      <div className={mainclass.join(" ")}>
        <Card className={classes.cardroot} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default App;
