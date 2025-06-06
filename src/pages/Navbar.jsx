// components/Navbar.jsx
import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: 'white',
        border: 'none'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', }}>
          <img
            src={logo}
            alt="CausalFunnel"
            style={{ height: '32px', marginRight: '8px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <Typography
              sx={{
                color: '#333',
                cursor: 'pointer',
                '&:hover': { color: '#1976d2' },
                
                fontWeight: 'bold',
              }}
              onClick={() => navigate('/')}
            >
              PLATFORM
            </Typography>
            <Typography
              sx={{
                color: '#333',
                cursor: 'pointer',
                '&:hover': { color: '#1976d2' },
                
                fontWeight: 'bold',
              }}
              onClick={() => navigate('/')}
            >
              COMPANY
            </Typography>
            <Typography
              sx={{
                color: '#333',
                cursor: 'pointer',
                '&:hover': { color: '#1976d2' },
                
                fontWeight: 'bold',
              }}
              onClick={() => navigate('/blog')}
            >
              BLOG
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1e3a8a',
              color: 'white',
              textTransform: 'none',
              borderRadius: '6px',
              px: 3,
              py: 1,
              fontSize: '14px',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#1e40af'
              }
            }}
          >
            FREE TRIAL
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
