import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';

import buttonleft from '../assets/buttonleft.png';
import buttonright from '../assets/buttonright.png';

import embold from '../assets/embold.png';
import cherishx from '../assets/cherishx.png';

import vdoshlogo1 from "../assets/vdoshlogo1.png";
import TechnlogyInnovatorslogo1 from "../assets/TechnlogyInnovatorslogo1.png";
import FastCompanylogo1 from "../assets/FastCompanylogo1.png";

const logoData = [embold, cherishx, FastCompanylogo1, vdoshlogo1, TechnlogyInnovatorslogo1];

const News = () => {
  const logoScrollRef = useRef(null);

  const scrollLeft = () => {
    logoScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    logoScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <Box sx={{ background: '#fff', px: { xs: 2, sm: 4 }, py: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 10, gap: 2 }}>
        <Box
          component="img"
          src={buttonleft}
          alt="left"
          sx={{ width: 25, height: 25, cursor: 'pointer' }}
          onClick={scrollLeft}
        />
        <Box
          ref={logoScrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: { xs: 3, sm: 6 },
            px: 1,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
            maxWidth: '100%',
          }}
        >
          {logoData.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              sx={{
                height: { xs: 40, sm: 50, md: 45 },
                flexShrink: 0,
              }}
            />
          ))}
        </Box>
        <Box
          component="img"
          src={buttonright}
          alt="right"
          sx={{ width: 28, height: 28, cursor: 'pointer' }}
          onClick={scrollRight}
        />
      </Box>

      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: 'bold', mb: 6, color: '#0a2a66', fontSize: { xs: 18, sm: 22, md: 26 } }}
      >
        News Latest Updates
      </Typography>

      {/* News Cards */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: { xs: 2, sm: 3 },
        }}
      >
        <NewsCard
          text="VDOSH Makes Investment in CausalFunnel"
          image={vdoshlogo1}
        />
        <NewsCard
          text="CausalFunnel named Top 50 AI CEOs of 2021 by Technology Innovators Magazine."
          image={TechnlogyInnovatorslogo1}
        />
        <NewsCard
          text="CausalFunnel invited to the Fast Company Executive Board for our industry expertise."
          image={FastCompanylogo1}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#0a2a66',
            px: { xs: 3, sm: 4 },
            py: 1.2,
            borderRadius: 2,
            fontSize: { xs: 14, sm: 14 },
          }}
        >
          Start Free Trial
        </Button>
      </Box>
    </Box>
  );
};

const NewsCard = ({ text, image }) => (
  <Box
    sx={{
      width: { xs: '100%', sm: 260, md: 300 },
      backgroundColor: '#E4FAFF',
      p: 3,
      borderRadius: 4,
      boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)'

    }}
  >
    <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#0a2a66' }}>{text}</Typography>
    <Box component="img" src={image} sx={{ width: '100%', mt: 2 }} />
  </Box>
);

export default News;
