import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, LinearProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Skills = () => {
  const theme = useTheme();
  const [skills, setSkills] = useState([]);

  const fetchSkills = () => {
    axios
      .get('/skills', {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': process.env.BACKEND_URL,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setSkills(response.data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const half = Math.ceil(skills.length / 2);
  const leftCol = Array.isArray(skills) ? skills.slice(0, half) : [];
  const rightCol = Array.isArray(skills) ? skills.slice(half) : [];

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
    <div id="skills">
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={4}
      >
        <Box marginBottom={4}>
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            gutterBottom
            data-aos="fade-up"
          >
            Skills
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color={theme.palette.text.secondary}
            data-aos="fade-up"
          >
            Skilled software engineer leveraging Python and Django to build robust web applications.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            {leftCol.map((item) => (
              <SkillBar key={item.id} name={item.name} level={item.level} />
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            {rightCol.map((item) => (
              <SkillBar key={item.id} name={item.name} level={item.level} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Skills;