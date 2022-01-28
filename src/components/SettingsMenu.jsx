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

const SettingsMenu = ({ handleCloseNavMenu }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { signOut } = useAuth();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
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
        <MenuItem onClick={() => signOut()} variant="contained">
          Sign Out
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default SettingsMenu;
