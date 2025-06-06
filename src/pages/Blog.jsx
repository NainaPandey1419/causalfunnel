import React from 'react';
import {
  Box,
  Typography,
} from "@mui/material";

import Navbar from "./Navbar.jsx";
import BlogCards from "./BlogCards.jsx";
import RecentPosts from "./RecentPosts.jsx";
import Footer from "./Footer.jsx";
import bloghero from "../assets/bloghero.png";

const Blog = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
      </Box>

      {/* Hero */}
      <Box sx={{ display: "flex", justifyContent: "center", py: 4, px: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            maxWidth: "1500px",
            width: "100%",
          }}
        >
          {/* Text */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              background: "#E4FAFF",
              display: "flex",
              alignItems: "center",
              py: { xs: 4, md: 8 },
              px: { xs: 2, md: 4 },
              borderRadius: "24px",
              ml: '4%'

            }}
          >
            <Box sx={{ maxWidth: "600px", mx: "auto", pr: { md: 4 } }}>
              <Typography
                variant="h2"
                sx={{
                  color: "#1e3a8a",
                  fontWeight: 700,
                  fontSize: { xs: "28px", md: "48px" },
                  lineHeight: 1.2,
                  mb: 3,
                  
                }}
              >
                CausalFunnel's Knowledge Base
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  mb: 4,
                  maxWidth: "500px",
                }}
              >
                Insights from our team to help you drive your sales and marketing strategies with cutting edge AI and ML.
              </Typography>
            </Box>
          </Box>

          {/* Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: { xs: 4, md: 8 },
              px: { xs: 2, md: 4 },
            }}
          >
            <img
              src={bloghero}
              alt="Analytics Dashboard"
              style={{
                width: "100%",
                maxWidth: "550px",
                height: "auto",
                borderRadius: "12px",
                ml: '-10%',
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', px: 2, py: 6 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            maxWidth: '1500px',
            width: '100%',
          }}
        >
          {/* Blog Cards */}
          <Box sx={{ width: { xs: '100%', md: '65%' } }}>
            <BlogCards />
          </Box>

          {/* Recent Posts */}
          <Box sx={{ width: { xs: '100%', md: '35%' } }}>
            <RecentPosts />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Blog;
