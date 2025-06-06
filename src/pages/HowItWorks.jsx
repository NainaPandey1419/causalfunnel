import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import howitworks1 from '../assets/howitworks1.png';
import howitworks2 from '../assets/howitworks2.png';
import howitworks3 from '../assets/howitworks3.png';
import howitworks4 from '../assets/howitworks4.png';

const steps = [
  {
    id: 1,
    title: 'Identify Visitor',
    text: 'Our ground-breaking DeepID tech is the industry’s first cookie-less anonymous visitor identification.',
    img: howitworks1,
    bg: '#E0F7FA',
    align: 'right',
    shift: 40,
  },
  {
    id: 2,
    title: 'Predict Intent',
    text: 'Our proprietary AI models predict every visitors’ intent to buy with great accuracy, only possible with our cookie-less DeepID.',
    img: howitworks2,
    bg: '#FCE4EC',
    align: 'left',
    shift: -40,
  },
  {
    id: 3,
    title: 'Discover Persona',
    text: 'Our behavior models help you discover the visitor persona, like discount buyers, convenience shoppers, impulse buyers, etc.',
    img: howitworks3,
    bg: '#FFF8E1',
    align: 'right',
    shift: 40,
  },
  {
    id: 4,
    title: 'Targeted Offers',
    text: 'Powered with buying intent and persona we show targeted offers to the visitors in real-time when they are about to abandon your site and lead them to convert.',
    img: howitworks4,
    bg: '#F3E5F5',
    align: 'left',
    shift: -40,
  },
];

const HowItWorks = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 4 }}
      >
        How It Works?
      </Typography>

      <Grid container direction="column" spacing={6} alignItems="center">
        {steps.map(({ id, title, text, img, bg, align, shift }) => (
          <Grid item key={id} sx={{ width: '100%' }}>
            <Box
              sx={{
                position: 'relative',
                width: { xs: '100%', sm: '550px' },
                transform: { sm: `translateX(${shift}px)`, xs: 'none' },
                mx: 'auto',
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: 'flex',
                  flexDirection: isMobile
                    ? 'column'
                    : align === 'left'
                    ? 'row'
                    : 'row-reverse',
                  alignItems: 'center',
                  bgcolor: bg,
                  borderRadius: 4,
                  px: 3,
                  py: 4,
                  position: 'relative',
                  overflow: 'visible',
                  minHeight: isMobile ? 'auto' : 180,
                  gap: isMobile ? 2 : 0,
                }}
              >
                {/* Text */}
                <Box
                  sx={{
                    flex: 1,
                    position: 'relative',
                    textAlign: isMobile ? 'center' : 'left',
                    maxWidth: isMobile ? '100%' : '250px',
                    px: isMobile ? 2 : 0,
                    zIndex: 2,
                    ml: !isMobile && align === 'left' ? 30 : 0,
                    mr: !isMobile && align === 'right' ? 30 : 0,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {title}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {text}
                  </Typography>
                </Box>

                {/* Image */}
                <Box
                  component="img"
                  src={img}
                  alt={title}
                  sx={{
                    width: isMobile ? 130 : 180,
                    height: 'auto',
                    mt: isMobile ? 2 : 0,
                    position: isMobile ? 'static' : 'absolute',
                    top: isMobile ? 'auto' : '50%',
                    transform: isMobile ? 'none' : 'translateY(-50%)',
                    [align]: isMobile ? 'auto' : -75,
                    zIndex: 1,
                  }}
                />
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
