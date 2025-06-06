import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";

import howweimprove from "../assets/howweimprove.png";
import home31 from "../assets/home31.png";
import home32 from "../assets/home32.png";
import home33 from "../assets/home33.png";
import home34 from "../assets/home34.png";

const GradientCard = styled(Paper)(({ theme, gradient }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3),
  borderRadius: 20,
  background: gradient,
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  maxWidth: 400,
  margin: "0 auto",
}));

const SquareImage = styled("img")({
  width: 40,
  height: 40,
  objectFit: "contain",
});

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: 70,
  height: 70,
  backgroundColor: "#fff",
  borderRadius: 14,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
}));

const HowWeImprove = () => {

  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 12 },
        backgroundColor: "#fff",
      }}
    >
      <Grid
        container
        spacing={5}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Grid item xs={12} md={6} sx={{ width: "50%" }}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="#0A2540"
            gutterBottom
          >
            How We Improve Your Conversion
          </Typography>
          <Typography variant="body1" color="#4E5D78" paragraph>
            CausalFunnel technology actively drives your visitors along the
            conversion funnel with persona and intent prediction nudges. Our
            technology works even if the visitor comes back after their cookies
            have been wiped (Apple clears cookies in 1 to 7 days) and
            continuously boosts your conversions.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#f0f8ff",
              color: "#00265F",
              border: "1px solid #d1e3f8",
              boxShadow: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Start Free Trial
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={howweimprove}
            alt="Conversion Funnel"
            sx={{
              width: "100%",
              maxWidth: 500,
              border: "3px solid #2D9CDB",
              borderRadius: 6,
              boxShadow: 3,
              mt: { xs: 4, md: 0 },
              mx: "auto",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
{/* Bottom */}
      <Grid
        container
        spacing={4}
        sx={{ mt: 10, width: "70%", mx: "auto" }}
        justifyContent="center"
      >
        {[
          {
            img: home31,
            value: "200%",
            label: "Increase in conversion",
            gradient: "linear-gradient(90deg, #EAF6FD, #DAF1FC)",
          },
          {
            img: home32,
            value: "8X",
            label: "Increase in orders",
            gradient: "linear-gradient(90deg, #FFF7DA, #FEF3C7)",
          },
          {
            img: home33,
            value: "302%",
            label: "Increase in conversion",
            gradient: "linear-gradient(90deg, #FDE6EE, #FFE3EA)",
          },
          {
            img: home34,
            value: "3.8X",
            label: "Increase in orders",
            gradient: "linear-gradient(90deg, #F1E8FF, #F9F0FF)",
          },
        ].map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <GradientCard gradient={item.gradient} sx={{ width: "100%" }}>
              <ImageWrapper>
                <SquareImage src={item.img} alt={item.label} />
              </ImageWrapper>
              <Box textAlign="left" ml={2}>
                <Typography variant="h6" fontWeight={600} color="#0A2540">
                  {item.value}
                </Typography>
                <Typography variant="body2" color="#4E5D78">
                  {item.label}
                </Typography>
              </Box>
            </GradientCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowWeImprove;
