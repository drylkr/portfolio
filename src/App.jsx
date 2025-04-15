import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import useDynamicTitle from './hooks/useDynamicTitle';
import createAppTheme from './theme';
import projectData from './data/projectData';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Navbar from "./components/Navbar";

export default function App() {
  useDynamicTitle("Daryl Ong");

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => createAppTheme(darkMode ? 'dark' : 'light'), [darkMode]);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Box id="hero" sx={{ py: 5 }}>
          <Container maxWidth="lg">
            <Hero />
          </Container>
        </Box>
        <Box id="about" sx={{ py: 5 }}>
          <Container maxWidth="lg">
            <About />
          </Container>
        </Box>
        <Box id="skills" sx={{ py: 5 }}>
          <Container maxWidth="lg">
            <Skills />
          </Container>
        </Box>
        <Box id="projects" sx={{ py: 5 }}>
          <Container maxWidth="lg">
            <Projects projects={projectData} handleOpen={handleOpen} darkMode={darkMode} />
          </Container>
        </Box>
        <ProjectModal open={open} handleClose={handleClose} project={selectedProject} darkMode={darkMode} />
      </Box>
    </ThemeProvider>
  );
}