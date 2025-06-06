import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Chip, Grid } from '@mui/material';
import blogimage1 from "../assets/blogimage1.png";
import blogimage2 from "../assets/blogimage2.png";
import pfp from "../assets/pfp.png";

const cardData = [
  { image: blogimage1, bg: "#e0f7fa", chip1: "#e1f5fe", chip2: "#b2ebf2" },
  { image: blogimage2, bg: "#f3e5f5", chip1: "#f8bbd0", chip2: "#f48fb1" },
  { image: blogimage1, bg: "#fce4ec", chip1: "#e1f5fe", chip2: "#b2ebf2" },
  { image: blogimage2, bg: "#fff9c4", chip1: "#f8bbd0", chip2: "#f48fb1" },
];

const BlogCards = () => {
  return (
    <Grid container spacing={2}>
      {cardData.map((card, idx) => (
        <Grid item xs={12} sm={6} md={6} key={idx}>
          <Card
            sx={{
              backgroundColor: card.bg,
              borderRadius: '20px',
              overflow: "hidden",
              boxShadow: 1,
              px: 1.5,
              py: 1,
              ml: '15%',
              width: { xs: '100%', sm: '90%', md: '90%', lg: '23vw' },
              height: { xs: 'auto', sm: 'auto', md: '65vh' },
            }}
          >
            <img
              src={card.image}
              alt="Blog"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                marginTop: "8px",
              }}
            />
            <CardContent sx={{ p: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, fontSize: "18px" }}>
                Title
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Avatar src={pfp} sx={{ width: 35, height: 35, mr: 0.8 }} />
                <Typography variant="caption" sx={{ color: "#333", fontSize: "13px" }}>
                  by <strong>Lorem Ipsum</strong> | 12 March, 2022
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 0.5, mb: 0.5 }}>
                <Chip
                  label="Lorem"
                  size="small"
                  sx={{ backgroundColor: card.chip1, fontSize: "9px", height: "18px" }}
                />
                <Chip
                  label="Lorem"
                  size="small"
                  sx={{ backgroundColor: card.chip2, fontSize: "9px", height: "18px" }}
                />
              </Box>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "11px",
                  color: "#444",
                  lineHeight: 1.4,
                  mb: 0.5,
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              </Typography>

              <Typography variant="caption" sx={{ color: "#666", fontWeight: 500, fontSize: "11px" }}>
                <strong style={{ fontWeight: 700 }}>5676</strong> Comments
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCards;
