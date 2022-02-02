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
  Box,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import SettingsMenu from "./SettingsMenu";
import { useNavigate } from "react-router-dom";
import SettingsMenuDrawer from "./SettingsMenuDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import BackButton from "./BackButton";
import CottageIcon from "@mui/icons-material/Cottage";

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
            <Hidden smUp>
              <BackButton />
            </Hidden>
            <Box sx={{ flexGrow: 1, mr: 2, cursor: "pointer", marginLeft: 2 }}>
              <IconButton
                onClick={() => navigate("/")}
                sx={(theme) => ({
                  color: theme.palette.primary.light,
                })}
              >
                <CottageIcon />
              </IconButton>
            </Box>

            <Hidden smUp>
              <IconButton
                color="secondary"
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setOpenDrawer(true)}
                sx={(theme) => ({
                  color: theme.palette.primary.dark,
                })}
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
          <Box
            sx={(theme) => ({
              background: theme.palette.primary.main,
            })}
          >
            <IconButton
              color="secondary"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenDrawer(false)}
              sx={(theme) => ({
                color: theme.palette.primary.dark,
              })}
            >
              <ChevronRight />
            </IconButton>
          </Box>
          <Divider />
          <SettingsMenuDrawer setOpenDrawer={setOpenDrawer} />
        </SwipeableDrawer>
      </AppBar>
    </>
  );
};

export default Navbar;
