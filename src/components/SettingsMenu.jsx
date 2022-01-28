import { useState } from "react";
import {
  Avatar,
  Box,
  Tooltip,
  Menu,
  IconButton,
  MenuItem,
} from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import useAuth from "../contexts/useAuth";
import { useNavigate, Link } from "react-router-dom";
import useStyles from "../styles/components/settings-menu.styles";

const SettingsMenu = ({ handleCloseNavMenu }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const classes = useStyles();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenuGoProfile = () => {
    setAnchorElUser(null);
    navigate("/my-profile");
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <ThemeToggle />

        <MenuItem
          variant="contained"
          className={classes.menuItem}
          onClick={handleCloseUserMenuGoProfile}
        >
          My Profile
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={() => signOut()}
          variant="contained"
        >
          Sign Out
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SettingsMenu;
