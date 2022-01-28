import { Typography, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  // { title: "Tutor", url: "tutor" },
  { title: "Cloudinary Test", url: "cloudinary-test" },
  // { title: "Login", url: "login" },
  // { title: "Register here", url: "register" },
  { title: "Search our archives", url: "stack" },
  { title: "My Profile", url: "/my-profile" },
];

const NavMenu = ({ anchorElNav, setAnchorElNav, handleCloseNavMenu }) => {
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="secondary"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{}}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.url}
            onClick={handleCloseNavMenu}
            component={RouterLink}
            to={page.url}
          >
            <Typography textAlign="center">{page.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavMenu;
