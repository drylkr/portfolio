import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Button,
  Typography,
  Stack,
  Chip,
  Box,
  MobileStepper,
  Tooltip,
  Modal,
  Paper,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function Projects({ projects, handleOpen, darkMode }) {
  const [fullImageOpen, setFullImageOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // Extract unique categories from projects
  const categories = ['all', 'featured', 'professional', 'personal', 'academic'];

  const openFullImage = (project, imageIndex) => {
    setCurrentProject(project);
    setActiveImageIndex(imageIndex);
    setFullImageOpen(true);
  };

  const closeFullImage = () => {
    setFullImageOpen(false);
  };

  const handleCategoryChange = (event, newValue) => {
    setActiveCategory(newValue);
  };

const filteredProjects = activeCategory === 'all' 
  ? projects 
  : projects.filter(project => {
      if (project.categories && Array.isArray(project.categories)) {
        return project.categories.includes(activeCategory);
      }
      else if (project.category) {
        return project.category === activeCategory;
      }
      else {
      }
    });

  const styles = {
    icon: {
      marginLeft: '12px',
      opacity: 0.4,
      cursor: 'pointer',
      transition: 'opacity 0.2s',
      '&:hover': {
        opacity: 0.8
      }
    }
  };

  const chipStyle = { 
    bg: "rgba(48, 79, 254, 0.2)", 
    text: darkMode ? "#fff" : "#000" 
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [tooltipOpen, setTooltipOpen] = useState(false);
  
  const handleTooltipClick = () => {
    if (isMobile) {
      setTooltipOpen((prev) => !prev);
    }
  };

  return (
    <Box sx={{ py: 5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant="h2" gutterBottom>
          Projects
          <Tooltip 
            title={
              <Typography variant="body2">
                To be updated...
              </Typography>
            } 
            placement={isMobile ? "bottom" : "right"}
            open={isMobile ? tooltipOpen : undefined} 
            onClose={() => setTooltipOpen(false)} 
            arrow
          >
            <ErrorIcon sx={styles.icon} onClick={handleTooltipClick} />
          </Tooltip>
        </Typography>
      </Box>

      {/* Category Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs 
          value={activeCategory} 
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="project categories"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'capitalize',
              fontWeight: 500,
              fontSize: '1rem',
              px: 3,
            }
          }}
        >
          {categories.map((category) => (
            <Tab 
              key={category} 
              value={category} 
              label={category === 'all' ? 'All Projects' : category} 
            />
          ))}
        </Tabs>
      </Box>

      {filteredProjects.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: 'center', py: 5 }}>
          No projects found in this category.
        </Typography>
      ) : (
        <Stack
          direction="row"
          spacing={{ xs: 4, sm: 6, md: 10 }}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
        >
          {filteredProjects.map((project, index) => (
            <Box
              key={index}
              sx={{
                flexBasis: { xs: "100%", sm: "45%" },
                flexGrow: 1,
                maxWidth: { sm: "45%" }
              }}
            >
              <ProjectCard 
                project={project} 
                handleOpen={handleOpen} 
                openFullImage={openFullImage}
                chipStyle={chipStyle}
              />
            </Box>
          ))}
        </Stack>
      )}
      
      <FullscreenImageViewer
        open={fullImageOpen}
        handleClose={closeFullImage}
        project={currentProject}
        activeStep={activeImageIndex}
        setActiveStep={setActiveImageIndex}
      />
    </Box>
  );
}

const FullscreenImageViewer = ({ open, handleClose, project, activeStep, setActiveStep }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  if (!project) return null;
  
  const maxSteps = project.images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep < maxSteps - 1 ? prevActiveStep + 1 : prevActiveStep
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => 
      prevActiveStep > 0 ? prevActiveStep - 1 : prevActiveStep
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe && activeStep < maxSteps - 1) {
      handleNext();
    }
    
    if (isRightSwipe && activeStep > 0) {
      handleBack();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && activeStep < maxSteps - 1) {
      handleNext();
    } else if (e.key === 'ArrowLeft' && activeStep > 0) {
      handleBack();
    } else if (e.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Box 
        sx={{ 
          position: 'relative', 
          maxWidth: '90vw', 
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: -20,
            right: -20,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
            zIndex: 2
          }}
        >
          <CloseIcon />
        </IconButton>
        
        <Box 
          sx={{ 
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {activeStep > 0 && (
            <IconButton
              onClick={handleBack}
              sx={{
                position: 'absolute',
                left: -16,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                },
                zIndex: 1
              }}
            >
              <KeyboardArrowLeft />
            </IconButton>
          )}
          
          <Box
            sx={{ 
              width: '100%', 
              height: '100%',
              display: 'flex',
              justifyContent: 'center' 
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={project.images[activeStep]}
              alt={`${project.title} - full size`}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
            />
          </Box>
          
          {activeStep < maxSteps - 1 && (
            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: -16,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                },
                zIndex: 1
              }}
            >
              <KeyboardArrowRight />
            </IconButton>
          )}
        </Box>
        
        {maxSteps > 1 && (
          <Typography 
            variant="caption" 
            sx={{ 
              mt: 1,
              color: 'text.secondary',
              backgroundColor: 'rgba(255,255,255,0.8)',
              px: 1,
              py: 0.5,
              borderRadius: 1
            }}
          >
            {activeStep + 1} / {maxSteps}
          </Typography>
        )}
      </Box>
    </Modal>
  );
}


const ProjectCard = ({ project, handleOpen, openFullImage, chipStyle }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = project.images.length;

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (e) => {
    e.stopPropagation();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleCardImageClick = () => {
    openFullImage(project, activeStep);
  };

  const truncateDescription = (description, maxLength = 150) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: 'relative',
          cursor: 'pointer',
          '&:hover': {
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            '& .zoom-icon': {
              opacity: 1,
            },
          },
        }}
        onClick={handleCardImageClick}
      >
        <CardMedia
          component="img"
          image={project.images[activeStep]}
          sx={{
            height: { xs: 220, sm: 240, md: 280 },
            objectFit: "cover",
            objectPosition: "top",
          }}
          alt={`${project.title} - image ${activeStep + 1}`}
        />
        
        {project.document && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              borderRadius: '4px',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.75rem',
              zIndex: 1,
            }}
          >
            <PictureAsPdfIcon fontSize="small" />
            <span>Doc</span>
          </Box>
        )}

        <Box
          className="zoom-icon"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: '50%',
            padding: 1,
            opacity: 0,
            transition: 'opacity 0.2s',
            zIndex: 1,
          }}
        >
          <ZoomOutMapIcon sx={{ color: 'white' }} />
        </Box>
        
        {maxSteps > 1 && (
          <Paper
            elevation={0}
            sx={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 8,
              padding: 0,
              zIndex: 2,
            }}
          >
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{
                backgroundColor: 'transparent',
                width: '100%',
                padding: '4px 8px',
                minHeight: 'unset',
                '.MuiMobileStepper-dot': {
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  margin: '0 2px',
                  width: 6,
                  height: 6,
                },
                '.MuiMobileStepper-dotActive': {
                  backgroundColor: 'white',
                },
              }}
              nextButton={
                <IconButton
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                  sx={{ color: 'white', padding: 0.5 }}
                >
                  <KeyboardArrowRight fontSize="small" />
                </IconButton>
              }
              backButton={
                <IconButton
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{ color: 'white', padding: 0.5 }}
                >
                  <KeyboardArrowLeft fontSize="small" />
                </IconButton>
              }
            />
          </Paper>
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncateDescription(project.description)} 
        </Typography>
      </CardContent>

      {project.tech && (
        <Box sx={{ px: 2, mt: "auto", mb: 1 }}>
          <Stack
            direction="row"
            spacing={0}
            flexWrap="wrap"
            sx={{
              gap: 1,
              '& .MuiChip-root': {
                marginLeft: 0,
                marginBottom: 0,
              },
            }}
          >
            {project.tech.map((tech, i) => (
              <Chip
                key={i}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: chipStyle.bg,
                  color: chipStyle.text,
                  fontWeight: 300,
                }}
              />
            ))}
          </Stack>
        </Box>
      )}

      <CardActions>
        {project.github && (
          <IconButton href={project.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
        )}
        {project.demo && (
          <IconButton href={project.demo} target="_blank" rel="noopener noreferrer">
            <LaunchIcon />
          </IconButton>
        )}
        {project.document && (
          <IconButton href={project.document} target="_blank" rel="noopener noreferrer">
            <PictureAsPdfIcon />
          </IconButton>
        )}
        <Button onClick={() => handleOpen(project)}>Show More</Button>
      </CardActions>
    </Card>
  );
};