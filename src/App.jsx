import { useState, useMemo, useEffect } from "react";
import { ThemeProvider, CssBaseline, Container, Box } from "@mui/material";
import useDynamicTitle from './hooks/useDynamicTitle';
import createAppTheme from './theme';
import { flatProjectData as projectData } from './data/projectData';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Navbar from "./components/Navbar";

export default function App() {
  const [isAnalyticsReady, setIsAnalyticsReady] = useState(false); 
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => createAppTheme(darkMode ? 'dark' : 'light'), [darkMode]);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-79VEQXJHSX"; 
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      }
      window.gtag("js", new Date());
      window.gtag("config", "G-79VEQXJHSX");
      setIsAnalyticsReady(true);
    };
    document.head.appendChild(script);
  }, []);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);

    if (isAnalyticsReady) {
      window.gtag('event', 'project_click', {
        'event_category': 'Projects',
        'event_label': project.title,
      });
    } else {
      console.log("Google Analytics is not ready yet.");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  useDynamicTitle("Daryl Ong");

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
