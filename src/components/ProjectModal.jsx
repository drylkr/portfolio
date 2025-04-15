import { useState } from 'react';
import { 
  Dialog, 
  Box, 
  Typography, 
  Button, 
  IconButton,
  MobileStepper,
  Paper,
  Modal,
  Stack,
  Chip,
  useMediaQuery,
  useTheme
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';

export default function ProjectModal({ open, handleClose, project, darkMode }) {
  const [activeStep, setActiveStep] = useState(0);
  const [fullImageOpen, setFullImageOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!project) return null;
  
  const maxSteps = project.images.length;

  const chipStyle = { 
    bg: "rgba(48, 79, 254, 0.2)", 
    text: darkMode ? "#fff" : "#000" 
  };

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

  const handleOpenFullImage = () => {
    setFullImageOpen(true);
  };

  const handleCloseFullImage = () => {
    setFullImageOpen(false);
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
    if (fullImageOpen) {
      if (e.key === 'ArrowRight' && activeStep < maxSteps - 1) {
        handleNext();
      } else if (e.key === 'ArrowLeft' && activeStep > 0) {
        handleBack();
      } else if (e.key === 'Escape') {
        handleCloseFullImage();
      }
    }
  };

  const getDocumentIcon = () => {
    if (project.document && project.document.endsWith('.pdf')) {
      return <PictureAsPdfIcon />;
    }
    return <DescriptionIcon />;
  };

  return (
    <>
    <Dialog 
    open={open} 
    onClose={handleClose} 
    fullWidth 
    maxWidth="md"
    PaperProps={{
        sx: {
        borderRadius: 2,
        overflowY: 'auto', 
        }
    }}
    >
    <Box>
        <Box sx={{ position: 'relative' }}>
        <Box 
            component="div" 
            onClick={handleOpenFullImage}
            sx={{ 
            cursor: 'pointer',
            position: 'relative',
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
                justifyContent: 'center'
                },
                '& .zoom-icon': {
                opacity: 1
                }
            }
            }}
        >
            <img 
            src={project.images[activeStep]} 
            alt={`${project.title} - image ${activeStep + 1}`}
            style={{ 
                width: '100%', 
                height: 'auto',   
                maxHeight: '400px',  
                objectFit: 'cover',
                objectPosition: 'top'
            }} 
            />
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
                transition: 'opacity 0.2s'
            }}
            >
            <ZoomOutMapIcon sx={{ color: 'white' }} />
            </Box>
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
                padding: 0
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
                    height: 6
                },
                '.MuiMobileStepper-dotActive': {
                    backgroundColor: 'white'
                }
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

        <Box p={3}>
        <Typography variant="h6" gutterBottom fontWeight="500">{project.title}</Typography>
        <Typography variant="body2" color='text.secondary'>{project.description}</Typography>
        
        {project.tech && (
            <Box mt={2} mb={3}>
                <Stack 
                    direction="row" 
                    spacing={0} 
                    flexWrap="wrap" 
                    sx={{ 
                        gap: 1,
                        '& .MuiChip-root': {
                            marginLeft: 0, 
                            marginBottom: 0 
                        }
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
        
        <Box mt={3} display="flex" gap={2} flexWrap="wrap">
          {project.github && (
            <Button 
                href={project.github} 
                target="_blank" 
                startIcon={<GitHubIcon />}
                variant="outlined"
                size={isMobile ? 'small' : 'large'}
            >
                GitHub
            </Button>
          )}
          {project.demo && (
            <Button 
                href={project.demo} 
                target="_blank" 
                startIcon={<LaunchIcon />}
                variant="contained"
                size={isMobile ? 'small' : 'large'}
            >
                Live Demo
            </Button>
          )}
          {project.document && (
            <Button 
                href={project.document} 
                target="_blank" 
                startIcon={getDocumentIcon()}
                variant="outlined"
                size="large"
                sx={{ 
                  backgroundColor: 'rgba(63, 81, 181, 0.1)', 
                  '&:hover': {
                    backgroundColor: 'rgba(63, 81, 181, 0.2)',
                  }
                }}
            >
                {project.documentName || 'View Document'}
            </Button>
          )}
        </Box>
        </Box>
    </Box>
    </Dialog>

      <Modal
        open={fullImageOpen}
        onClose={handleCloseFullImage}
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
            onClick={handleCloseFullImage}
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
    </>
  );
}