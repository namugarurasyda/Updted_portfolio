// Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';

// Material Icons
import InfoIcon from '@mui/icons-material/HelpOutline';
import EmailIcon from '@mui/icons-material/EmailOutlined';

const HeroButtons = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems={{ xs: 'stretch', sm: 'flex-start' }}
      justifyContent='center'
      marginTop={4}
    >
      <Button
        component='a'
        variant='contained'
        size='large'
        color='primary'
        href='https://tinyurl.com/namugarura-Syda-CV'
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<InfoIcon />}
        fullWidth={!isMd}
        disableElevation
        sx={{
          marginRight: { sm: '15px' },
          marginBottom: { xs: 2, sm: 0 },
          border: '2px solid transparent',
          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.primary.main,
            border: `2px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        Resume
      </Button>

      <Button
        component={Link}
        href='#contact'
        variant='outlined'
        color='primary'
        size='large'
        startIcon={<EmailIcon /> }
        fullWidth={!isMd}
        disableElevation
        sx={{
          border: `2px solid ${theme.palette.primary.main}`,
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            border: `2px solid ${theme.palette.primary.main}`,
          },
        }}
      >
        Let's get in touch
      </Button>
    </Box>
  );
};

export default HeroButtons;
