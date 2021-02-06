import React,{useState} from "react";
import "./App.css";

import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import HomeIcon from "@material-ui/icons/Home";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import NatureIcon from "@material-ui/icons/Nature";
import InfoIcon from "@material-ui/icons/Info";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

class App extends React.Component {

  const [name, setName] = useState('John Doe');

  const handleNameInput = e => {
    setName(e.target.value);
  };

  constructor() {
    // let classes = useStyles;
    super();
    this.state = {
      toggle_sidebar: false,
    };
  }

  toggleSidebar() {
    this.setState({ toggle_sidebar: !this.state.toggle_sidebar });
  }
  // this part renders again whenever state changes
  render() {
    let sidebarclass = ["sidebar"];
    let mainclass = ["main"];
    if (this.state.toggle_sidebar) {
      sidebarclass.push("sidebar-opened");
      mainclass.push("main-closed");
    }

    return (
      <div className="App">
        {/* sidebar */}
        <div className={sidebarclass.join(" ")}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <CodeIcon
                  fontSize="large"
                  className="sideIcons"
                  onClick={this.toggleSidebar.bind(this)}
                />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <HomeIcon fontSize="large" className="sideIcons" />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GraphicEqIcon fontSize="large" className="sideIcons" />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <NatureIcon fontSize="large" className="sideIcons" />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <InfoIcon fontSize="large" className="sideIcons" />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </div>
        {/* mainbody */}
        <div className={mainclass.join(" ")}>Hello</div>
      </div>
    );
  }
}

export default App;

