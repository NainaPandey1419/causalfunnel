import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import HowItWorks from "./HowItWorks.jsx";
import HowWeImprove from "./HowWeImprove.jsx";
import Customer from "./Customer.jsx";
import News from "./News.jsx";
import Footer from "./Footer.jsx";

import logo from "../assets/logo.png";
import home1 from "../assets/home1.png";
import home21 from "../assets/home21.png";
import home22 from "../assets/home22.png";
import home23 from "../assets/home23.png";
import home24 from "../assets/home24.png";
import home25 from "../assets/home25.png";

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const features = [
    {
      icon: home21,
      title: "High Accuracy",
      subtitle: "Intent Prediction",
      bgColor: "#e3f2fd",
    },
    {
      icon: home22,
      title: "Automated Personalized",
      subtitle: "Nudges (Offers)",
      bgColor: "#f3e5f5",
    },
    {
      icon: home23,
      title: "Boosts Conversion",
      subtitle: "By 40% On Average",
      bgColor: "#fff3e0",
    },
    {
      icon: home24,
      title: "Works In Real-Time",
      subtitle: "To Convert Visitors",
      bgColor: "#e8f5e8",
    },
    {
      icon: home25,
      title: "Tested With 200",
      subtitle: "Million+ Visitors",
      bgColor: "#ffebee",
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
      </Box>

      {/* Hero */}
      <Box sx={{ display: "flex", minHeight: "60vh", gap: 4 }}>
        <Box
          sx={{
            width: "50%",
            background: "linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)",
            display: "flex",
            alignItems: "center",
            py: { xs: 4, md: 8 },
            px: { xs: 2, md: 4 },
            ml: "20px",
            mt: "20px",
            borderRadius: "24px",
            mr: 2,
          }}
        >
          <Box sx={{ maxWidth: "500px", ml: "auto", pr: { md: 4 } }}>
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
              Predicting Buying Intent In The Post Cookie World
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#64748b",
                fontSize: "16px",
                lineHeight: 1.6,
                mb: 4,
                maxWidth: "450px",
              }}
            >
              Uncover The Hidden Value Of Your Anonymous Visitors With Our
              Disruptive Cookie-Less AI Technology.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#1e3a8a",
                color: "white",
                textTransform: "none",
                borderRadius: "8px",
                px: 4,
                py: 1.5,
                fontSize: "16px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#1e40af",
                },
              }}
            >
              Start Free Trial
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            py: { xs: 4, md: 8 },
            px: { xs: 2, md: 4 },
            ml: 2,
          }}
        >
          <img
            src={home1}
            alt="Analytics Dashboard"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>

      {/* Features */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={4} sx={{ width: "100%" }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={2.4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    backgroundColor: "#fafafa",
                    borderRadius: 2,
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
                    height: "100%",
                  }}
                >
                  {/* Icons */}
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      backgroundColor: feature.bgColor,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      style={{
                        width: "33px",
                        height: "33px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  {/* Text */}
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        fontSize: "12px",
                        color: "#111827",
                        lineHeight: 1.2,
                        mb: 0.5,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#4B5563",
                        fontSize: "13px",
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {feature.subtitle}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <HowItWorks />
      <HowWeImprove />
      <Customer />
      <News />
      <Footer />
    </Box>
  );
};

export default Home;
