import BuildIcon from "@mui/icons-material/Build";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Header = () => {
  const pages = ["Books", "ydeet", "About Us"];
  const [anchorELNav, setAnchorELNav] = useState(null);

  const navOpenHandler = (event) => {
    console.log("abc");
    setAnchorELNav(event.currentTarget);
  };
  const navCloseHandler = () => {
    setAnchorELNav(null);
  };
  return (
    <Box sx={{ display: "flex", m: 0, p: 0 }}>
      <AppBar position="static">
        <Container maxwidth="xl">
          <Toolbar disableGutters>
            <BuildIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              component="div"
              variant="h5"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                color: "inherit",
              }}
            >
              Header
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                color="inherit"
                aria-label="test"
                aria-controls="appbar-menu"
                aria-haspopup="true"
                onClick={navOpenHandler}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="appbar-menu"
                anchorEl={anchorELNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorELNav)}
                onClose={navCloseHandler}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={navCloseHandler}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
