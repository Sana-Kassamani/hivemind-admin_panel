import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  AccountCircle,
  AccountCircleOutlined,
  HiveOutlined,
  LogoutOutlined,
  PeopleAlt,
  PeopleAltOutlined,
  Person,
  PersonOutline,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { capitalize } from "../../../core/utils/capitalize";
import { colors } from "../../../ui/theme/theme";
import "./style.css";

const drawerWidth = "20%";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    padding: "10px 12px",
    width: drawerWidth,
  },

  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    color: colors.secondary,
  },
}));
const SideBar = () => {
  const { loggedAdmin } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  const menuItems = [
    {
      text: "Users",
      icon: <PeopleAltOutlined color="secondary" />,
      path: "/panel",
    },
    {
      text: "Apiaries",
      icon: <HiveOutlined color="secondary" />,
      path: "/apiaries",
    },
  ];
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      {/* {list links} */}
      <List className={classes.list}>
        <div>
          <ListItem>
            <ListItemIcon>
              <AccountCircle color="secondary" />
            </ListItemIcon>
            <ListItemText primary={capitalize(loggedAdmin.username)} />
          </ListItem>
          <Divider />
          <div className="listItemDiv">
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  marginTop: "5px",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor:
                      location.pathname === item.path
                        ? "primary.dark"
                        : "primary.light", // Hover background color
                  },
                  backgroundColor:
                    location.pathname === item.path
                      ? "primary.main"
                      : "transparent",
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </div>
        </div>
        <div>
          <Divider />
          <ListItem
            button
            onClick={() => {
              // logout
            }}
          >
            <ListItemIcon>
              <LogoutOutlined color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </div>
      </List>
    </Drawer>
  );
};

export default SideBar;
