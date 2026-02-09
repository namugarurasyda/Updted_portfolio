import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Typography, Grid, LinearProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Skills = () => {
  const theme = useTheme();
  const [skills, setSkills] = useState([
    { id: 1, name: 'JavaScript', level: 80 },
    { id: 2, name: 'React', level: 80 },
    { id: 3, name: 'Node.js', level: 80 },
    { id: 4, name: 'Python', level: 90 },
    { id: 5, name: 'Django', level: 95 },
    { id: 6, name: 'PostgreSQL', level: 85 },
    { id: 7, name: 'HTML/CSS', level: 97 },
    { id: 8, name: 'Git', level: 90 },
    { id: 9, name: 'PHP', level: 70 },
    { id: 10, name: 'Laravell', level: 70 },
    { id: 11, name: 'Typescript', level: 85 }
    
  ]);

  useEffect(() => {
    axios
      .get('/skills', {
        headers: { Accept: 'application/json' },
      })
      .then((response) => {
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          setSkills(response.data);
        }
      })
      .catch((err) => {
        console.log("Using fallback skills data:", err);
      });
  }, []);

  // Logic to split the skills into two columns
  const half = Math.ceil(skills.length / 2);
  const leftCol = skills.slice(0, half);
  const rightCol = skills.slice(half);

  const SkillBar = ({ name, level }) => (
    <Box sx={{ mb: 3 }} data-aos="fade-up">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="subtitle2" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
          {level}%
        </Typography>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={level} 
        sx={{
          height: 10,
          borderRadius: 1,
          backgroundColor: theme.palette.divider,
          '& .MuiLinearProgress-bar': {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      />
    </Box>
  );

  return (
    <Box component="section" id="skills" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom data-aos="fade-up">
            Skills
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" data-aos="fade-up">
            Skilled software engineer leveraging Python and Django to build robust web applications.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            {leftCol.map((item) => (
              <SkillBar key={item.id} name={item.name} level={item.level} />
            ))}
          </Grid>
          {/* Right Column */}
          <Grid item xs={12} md={6}>
            {rightCol.map((item) => (
              <SkillBar key={item.id} name={item.name} level={item.level} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;