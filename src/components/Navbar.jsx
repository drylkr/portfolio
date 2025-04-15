import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Link as MuiLink,
  Container,
  Menu,
  MenuItem
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const toggleTheme = () => setDarkMode(prev => !prev);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const navbarHeight = 80;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth"
    });
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        py: { xs: 1, md: 3 }
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "500",
              cursor: "pointer",
              "&:hover": { color: "primary.main" },
              flex: 1
            }}
            onClick={(e) => scrollToSection(e, "hero")}
          >
            Daryl Ong
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton onClick={handleMenuOpen} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {sections.map((section) => (
                <MenuItem
                  key={section.id}
                  onClick={(e) => {
                    scrollToSection(e, section.id);
                    handleMenuClose();
                  }}
                >
                  {section.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5, alignItems: "center" }}>
            {sections.map((section) => (
              <MuiLink
                key={section.id}
                onClick={(e) => scrollToSection(e, section.id)}
                underline="none"
                color="inherit"
                sx={{
                  fontWeight: 500,
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" }
                }}
              >
                {section.label}
              </MuiLink>
            ))}
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
