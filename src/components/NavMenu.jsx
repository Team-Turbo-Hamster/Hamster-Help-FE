import { Typography, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [{ title: "Tutor", url: "tutor" }];

const NavMenu = ({ anchorElNav, setAnchorElNav, handleCloseNavMenu }) => {
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <>
      <Box>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
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
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, mr: 2 }}
      >
        Hamster Help
      </Typography>
    </>
  );
};

export default NavMenu;
