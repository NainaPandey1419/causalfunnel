import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import { styled } from '@mui/system';

import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import skype from '../assets/skype.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';

const SocialIcon = styled('img')({
  width: 20,
  height: 20,
});

const IconWrapper = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: 8,
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
  margin: '0 5px',
});

const SubscribeCard = styled(Paper)(({ theme }) => ({
  maxWidth: 1000,
  margin: '0 auto',
  marginBottom: '-70px',
  padding: '20px 30px',
  borderRadius: 10,
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  zIndex: 2,
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));


const Footer = () => {
  return (
    <>
      {/* Subscribe */}
      <SubscribeCard>
        <Typography fontWeight="500" textAlign="center">
          Get Funnel Optimization Insights Delivered To Your Inbox!
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          <TextField
            placeholder="Enter email..."
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: '#fff',
              minWidth: 250,
              '& .MuiOutlinedInput-root': {
                borderRadius: 0,
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: 0,
              textTransform: 'none',
              px: 3,
              backgroundColor: '#1A73E8',
              '&:hover': { backgroundColor: '#155ec0' },
            }}
          >
            SUBSCRIBE
          </Button>
        </Box>
      </SubscribeCard>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#E6FAFF', pt: 12, pb: 5, mt: 5 }}>
        <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
          {/* Logo Column */}
          <Grid item xs={12} sm={3} display="flex" justifyContent="center" smjustify="flex-start">
            <Box display="flex" alignItems="center" sx={{position: 'relative' , right: '350px'}}>
              <img src={logo} alt="Logo" style={{ height: 30 }} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              px={2}
            >
              {/* Links */}
              <Box
                display="flex"
                gap={4}
                mb={2}
                flexWrap="wrap"
                justifyContent="center"
              >
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                  Platform
                </Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                  Company
                </Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                  Blog
                </Typography>
              </Box>

              {/* Socials */}
              <Box display="flex" justifyContent="center" mt={1} flexWrap="wrap">
                <IconWrapper>
                  <SocialIcon src={facebook} alt="Facebook" />
                </IconWrapper>
                <IconWrapper>
                  <SocialIcon src={twitter} alt="Twitter" />
                </IconWrapper>
                <IconWrapper>
                  <SocialIcon src={linkedin} alt="LinkedIn" />
                </IconWrapper>
                <IconWrapper>
                  <SocialIcon src={skype} alt="Skype" />
                </IconWrapper>
              </Box>

              <Divider sx={{ mt: 4, mb: 2, width: '100%' }} />
              <Typography
                variant="caption"
                color="textSecondary"
                align="center"
                display="block"
              >
                2022 copyrights. All Rights Reserved
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
