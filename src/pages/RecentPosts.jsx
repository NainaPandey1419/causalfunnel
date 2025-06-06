import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';

import recentpost1 from '../assets/recentpost1.png';
import recentpost2 from '../assets/recentpost2.png';
import home21 from '../assets/home21.png';
import home22 from '../assets/home22.png';
import home23 from '../assets/home23.png';
import home24 from '../assets/home24.png';
import home25 from '../assets/home25.png';

const RecentPosts = () => {
  const recentPosts = [
    { img: recentpost1, text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.', date: '12 March,2022' },
    { img: recentpost2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.', date: '12 March,2022' },
    { img: recentpost1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.', date: '12 March,2022' },
    { img: recentpost2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.', date: '12 March,2022' },
    { img: recentpost1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy.', date: '12 March,2022' },
  ];

  const categories = [
    { img: home21, label: 'Lorem ipsum dolor sit amet' },
    { img: home22, label: 'Lorem ipsum dolor sit amet' },
    { img: home23, label: 'Lorem ipsum dolor sit amet' },
    { img: home24, label: 'Lorem ipsum dolor sit amet' },
    { img: home25, label: 'Lorem ipsum dolor sit amet' },
  ];

  const getBgColor = (index) => {
    const colors = ['#FDE68A', '#DBEAFE', '#FCE7F3', '#E9D5FF', '#FEF3C7', '#DBF4FF'];
    return colors[index % colors.length];
  };

  return (
    <Box
      sx={{
        p: 3,
        ml: { xs: 0, md: '-8%' },
        maxWidth: { xs: '100%', sm: '100%', md: 350 },
      }}
    >
      {/* Recent Posts */}
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Recent Posts
      </Typography>
      <List disablePadding>
        {recentPosts.map((post, index) => (
          <ListItem key={index} alignItems="flex-start" disableGutters>
            <ListItemAvatar>
              <Avatar variant="rounded" src={post.img} sx={{ width: 90, height: 70 }} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontSize: 13 }}>
                  {post.text}
                </Typography>
              }
              secondary={
                <Typography variant="caption" sx={{ fontSize: 12, color: '#888' }}>
                  {post.date}
                </Typography>
              }
              sx={{ ml: 2 }}
            />
          </ListItem>
        ))}
      </List>

      {/* Categories */}
      <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold' }}>
        Categories
      </Typography>
      <List disablePadding>
        {categories.map((cat, index) => (
          <ListItem key={index} disableGutters>
            <ListItemAvatar>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  backgroundColor: getBgColor(index),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Avatar
                  src={cat.img}
                  variant="square"
                  sx={{ width: 28, height: 28, bgcolor: 'transparent' }}
                />
              </Box>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontSize: 14 }}>
                  {cat.label}
                </Typography>
              }
              sx={{ ml: 1 }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RecentPosts;
