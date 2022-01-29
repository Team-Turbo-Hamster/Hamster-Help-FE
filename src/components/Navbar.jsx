import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Typography,
  SwipeableDrawer,
  Divider,
  IconButton,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import SettingsMenu from "./SettingsMenu";
import NavMenu from "./NavMenu";
import { useNavigate } from "react-router-dom";
import SettingsMenuDrawer from "./SettingsMenuDrawer";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              onClick={() => navigate("/")}
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, mr: 2, cursor: "pointer" }}
            >
              Hamster Help
            </Typography>

            <Hidden smUp>
              {/* <NavMenu
                onClick={() => setOpenDrawer(true)}
                anchorElNav={anchorElNav}
                setAnchorElNav={setAnchorElNav}
                handleCloseNavMenu={handleCloseNavMenu}
              /> */}
              <IconButton
                color="secondary"
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <SettingsMenu handleCloseNavMenu={handleCloseNavMenu} />
            </Hidden>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          open={openDrawer}
          onOpen={() => setOpenDrawer(true)}
          onClose={() => setOpenDrawer(false)}
          anchor="right"
        >
          <div>
            <IconButton
              color="secondary"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenDrawer(false)}
            >
              <ChevronRight />
            </IconButton>
          </div>
          <Divider />
          <SettingsMenuDrawer setOpenDrawer={setOpenDrawer} />
        </SwipeableDrawer>
      </AppBar>
    </>
  );
};

export default Navbar;
