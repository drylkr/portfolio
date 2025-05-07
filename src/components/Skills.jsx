import { Box, Grid, Typography, Paper } from "@mui/material";

const styles = {
  skillBox: {
    borderRadius: 3,
    padding: 3,
    height: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
    }
  },
  categoryHeading: {
    marginBottom: 1,
    fontWeight: 500
  },
  techBadgesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1.5,
    marginTop: 2
  },
  techBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0.5
  },
  techLogo: {
    width: 40,
    height: 40,
    objectFit: 'contain',
    filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.1))'
  },
  techName: {
    fontSize: '0.75rem',
    textAlign: 'center'
  }
};

const techLogoMap = {
  // Programming Languages
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
  "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  
  // Frontend
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Material UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS": "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
  "Shadcn UI": "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png",
  
  // Backend
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  
  // Databases
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MSSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Firebase Firestore": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  
  // DevOps
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "GitHub Actions": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Postman": "https://icon.icepanel.io/Technology/svg/Postman.svg",
  "Google Analytics": "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg",
  
  // Design & Tools
  "WordPress": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
};

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "PHP"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React.js", "Vue.js", ]
    },
    {
      title: "UI Frameworks",
      skills: ["Material UI", "Bootstrap", "Tailwind CSS", "Shadcn UI"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Django"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MSSQL", "MongoDB", "Firebase Firestore"]
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub Actions", "Postman", "WordPress", "Figma", "Google Analytics"]
    }
  ];

  const TechBadge = ({ name }) => (
    <Box sx={styles.techBadge}>
      <Box
        component="img"
        src={techLogoMap[name] || "/api/placeholder/40/40"}
        alt={`${name} logo`}
        sx={styles.techLogo}
      />
      <Typography sx={styles.techName}>{name}</Typography>
    </Box>
  );

  return (
    <Box py={5}>
      <Typography 
        variant="h2" 
        gutterBottom 
        fontWeight={500} 
        mb={4}
      >
        Skill Set
      </Typography>
      
      <Grid container spacing={3}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={styles.skillBox} elevation={0}>
              <Typography variant="h6" sx={styles.categoryHeading}>
                {category.title}
              </Typography>
              
              <Box sx={styles.techBadgesContainer}>
                {category.skills.map((skill, idx) => (
                  <TechBadge key={idx} name={skill} />
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}