import { Outlet } from "react-router-dom";
import { useState } from "react";
import { AppBar, Toolbar, Container } from "@mui/material";

import SettingsMenu from "./SettingsMenu";
import NavMenu from "./NavMenu";

const Layout = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavMenu
              anchorElNav={anchorElNav}
              setAnchorElNav={setAnchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
            />
            <SettingsMenu handleCloseNavMenu={handleCloseNavMenu} />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;
