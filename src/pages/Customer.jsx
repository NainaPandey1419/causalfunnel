import React from "react";
import { Box, Typography, Paper, useTheme } from "@mui/material";
import { styled } from "@mui/system";

import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.png";

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 20,
  backgroundColor: "#fff",
  boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
  maxWidth: 400,
  position: "absolute",
  [theme.breakpoints.down("md")]: {
    position: "static",
    maxWidth: "100%",
    width: "100%",
  },
}));

const SquareImage = styled("img")({
  width: 48,
  height: 48,
  borderRadius: 8,
  objectFit: "cover",
  marginRight: 12,
});

const Customer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 12 },
        minHeight: { md: "100vh" },
        position: "relative",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 500,
          height: 400,
          background: "linear-gradient(135deg, #E0F7FF, #F2FBFF)",
          transform: "translate(-50%, -50%)",
          borderRadius: 7,
          zIndex: 0,
        }}
      />

      <Typography
        variant="h5"
        fontWeight={700}
        color="#0A2540"
        sx={{ mb: 6, zIndex: 2 ,  position: "relative",
          top: "10%",
          left: "28%",}}
      >
        Customer<br />Stories
      </Typography>

      <Box
        sx={{
          position: "relative",
          height: { md: 500 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 5, md: 0 },
          zIndex: 2,
        }}
      >
        {/* Card 1 */}
        <TestimonialCard
          sx={{
            bottom: { md: "60%" },
            left: { md: "55%" },
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Awesome Services
          </Typography>
          <Typography variant="body2" color="#4E5D78" gutterBottom>
            CausalFunnel helps us analyze millions of visitors and provides insights into our user behavior across
            sessions and journeys. Their DeepID product is a game-changer to enhance the user experience for repeat
            visitors/users and even stitching sessions when cookies are wiped-out. Their team genuinely cares about
            optimizing user experience and conversions for organizations and goes above and beyond to make sure this
            happens.
          </Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <SquareImage src={customer1} alt="Umair Tazeem" />
            <Box>
              <Typography variant="body1" fontWeight={600}>
                Umair Tazeem
              </Typography>
              <Typography variant="caption" color="#4E5D78">
                CEO & Co-founder
              </Typography>
            </Box>
          </Box>
        </TestimonialCard>

        {/* Card 2 */}
        <TestimonialCard
          sx={{
            top: { md: "15%" },
            left: { md: "15%" },
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            We have a great tool!
          </Typography>
          <Typography variant="body2" color="#4E5D78" gutterBottom>
           We serve two types of persona and didn’t know how many of our visitors classify in each of them. CF’s AI used the visitor behavior and gave us details about how many of each persona type were we getting.
          </Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <SquareImage src={customer2} alt="Rajat Agarwal" />
            <Box>
              <Typography variant="body1" fontWeight={600}>
                Rajat Agarwal
              </Typography>
              <Typography variant="caption" color="#4E5D78">
                VP, Engineering
              </Typography>
            </Box>
          </Box>
        </TestimonialCard>

        {/* Card 3 */}
        <TestimonialCard
          sx={{
            top: { md: "45%" },
            left: { md: "50%" },
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            We have a great tool!
          </Typography>
          <Typography variant="body2" color="#4E5D78" gutterBottom>
            We serve two types of persona and didn’t know how many of our visitors classify in each of them. CF’s AI
            used the visitor behavior and gave us details about how many of each persona type we were getting.
          </Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <SquareImage src={customer3} alt="Dr. Erson Religioso" />
            <Box>
              <Typography variant="body1" fontWeight={600}>
                Dr. Erson Religioso
              </Typography>
              <Typography variant="caption" color="#4E5D78">
                Founder
              </Typography>
            </Box>
          </Box>
        </TestimonialCard>
      </Box>
      
    </Box>
  );
};

export default Customer;
