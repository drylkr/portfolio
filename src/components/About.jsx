import React from 'react';
import { Typography, Stack, Box, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

const styles = {
  aboutText: {
    color: "text.secondary",
    lineHeight: 1.6,
    flex: 1,
  },
  educationIcon: {
    marginLeft: '12px',
    opacity: 0.4,
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    '&:hover': {
      opacity: 0.8
    }
  }
};

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const handleTooltipClick = () => {
    if (isMobile) {
      setTooltipOpen((prev) => !prev);
    }
  };

  return (
    <Box py={5}>
      <Typography variant="h2" gutterBottom>
        About Me
        <Tooltip
          title={
            <Typography variant="body2">
              B.S. Computer Engineering<br />
              Specialization in Software Engineering<br />
              De La Salle University–Dasmariñas
            </Typography>
          }
          placement={isMobile ? "bottom" : "right"}
          arrow
          open={isMobile ? tooltipOpen : undefined} 
          onClose={() => setTooltipOpen(false)} 
        >
          <SchoolIcon
            sx={styles.educationIcon}
            onClick={handleTooltipClick} 
          />
        </Tooltip>
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 14 }} mt={3}>
        <Typography sx={styles.aboutText}>
          I’m a software developer who enjoys building user-friendly web applications that solve real-world problems. I love collaborating with designers and fellow developers to bring ideas to life, whether it's for finance, healthcare, or productivity tools.
        </Typography>

        <Typography variant="body1" sx={styles.aboutText}>
          Outside of tech, I like reading books on personal growth and psychology. I also enjoy making art and curating Spotify playlists. Whether learning or creating, I’m always exploring ways to grow and stay inspired.
        </Typography>
      </Stack>
    </Box>
  );
}
