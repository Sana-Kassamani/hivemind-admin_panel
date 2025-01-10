import { useTheme } from "@emotion/react";
import { Box, Divider, Icon, Typography } from "@mui/material";
import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { colors } from "../../../ui/theme/theme";
import { Link } from "react-router-dom";
import { AccountCircle, Hive, People, Person } from "@mui/icons-material";
const SideBar = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <Sidebar>
      <Box
        display="flex"
        gap="10px"
        p="20px 10px"
        alignItems="center"
        color={colors.secondary}
      >
        <Person />
        <Typography variant="h3">Admin Name</Typography>
      </Box>
      <Divider />
      <Menu
        menuItemStyles={{
          root: {
            "&:hover": {
              backgroundColor: colors.primary,
              color: colors.textColor,
            },
          },
        }}
        // menuItemStyles={{
        //   root: {
        //     [`&.hover`]: {
        //       backgroundColor: `${colors.primary}`,
        //     },
        //   },
        //   button: {
        //     [`&.hover`]: {
        //       backgroundColor: `${colors.primary}`,
        //     },
        //   },
        // }}
      >
        <Item
          title="Users"
          to="/"
          icon={<People htmlColor="" />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item
          title="Apiaries"
          to="/"
          icon={<Hive />}
          selected={selected}
          setSelected={setSelected}
        />
        <Item />
      </Menu>
    </Sidebar>
  );
};

export default SideBar;

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.secondary,
        "&:hover": {
          backgroundColor: colors.primary,
          color: colors.textColor,
        },
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography variant="h5">{title}</Typography>
    </MenuItem>
  );
};
