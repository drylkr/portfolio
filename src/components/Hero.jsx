import { Stack, Box, Typography, Link as MuiLink } from "@mui/material";
import user from "../assets/userProfile.jpg";

const styles = {
  highlightedText: {
    position: 'relative',
    lineHeight: 1.6,
    fontSize: {xs: "1.5rem", md: "2.5rem"},
    '& .highlight': {
      position: 'relative',
      zIndex: 1,
    },
    '& .highlight::after': {
      content: '""',
      position: 'absolute',
      bottom: '0.4em',
      left: 0,
      width: '100%',
      height: '0.3em',
      backgroundColor: 'rgba(48, 79, 254, 0.3)',
      zIndex: -1,
      borderRadius: '4px',
    }
  },
  link: {
    color: 'inherit',
    textDecorationColor: 'inherit',
    '&:hover': {
      textDecorationColor: 'inherit'
    }
  },
  profileImage: {
    width: { xs: '250px', md: '350px' },
    height: 'auto',
    maxWidth: '100%'
  }, //Pompom
  userImage: {
    width: { xs: '250px', md: '350px' },
    height: 'auto',
    borderRadius: '50%',
    objectFit: 'cover',
  }, //Circle image 
};

export default function Hero() {
  return (
    <Stack 
      direction={{ xs: 'column', md: 'row-reverse' }}  
      spacing={18}
      width="100%"
      alignItems="center"
      paddingY={8}
      mt={1}
      mb={8}
    >
      <Box flex={1} display="flex" justifyContent="center">
        <Box
          component="img"
          // src="https://cdn.sanriowiki.com/8/81/Pompompurin.png"
          src={user}
          alt="Developer illustration"
          sx={styles.userImage}
        />
      </Box>

      <Box flex={1}>
        <Typography variant="h2" gutterBottom   
        sx={{
            ...styles.highlightedText,
            textAlign: { xs: 'center', md: 'left' }
          }}>
          I'm a{' '}
          <Box component="span" className="highlight">software</Box>{' '}
          <Box component="span" className="highlight">developer</Box>{' '}
          who builds clean and simple web applications.
        </Typography>

        <Box mt={3}>
          <Typography variant="body1" color="text.secondary"
            sx={{
              textAlign: { xs: 'center', md: 'left' } 
            }}>
            Find me on{' '}
            <MuiLink 
              href="https://github.com/drylkr"
              target="_blank"
              rel="noopener"
              sx={styles.link}
            >
              GitHub
            </MuiLink>
            {' '}or{' '}
            <MuiLink 
              href="mailto:ongdaryl01@gmail.com"
              sx={styles.link}
            >
              send me an email
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}
