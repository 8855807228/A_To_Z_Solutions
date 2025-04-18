import React, { useState } from 'react';
import { AppBar, Toolbar, Container, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const navigationLinks = [
  { title: 'Corporate Travel', path: '/corporate-travel' },
  { title: 'B2B Services', path: '/b2b-services' },
  { title: 'Holiday Packages', path: '/holiday-packages' },
  { title: 'Transport Services', path: '/transport-services' },
  { title: 'Hotel Bookings', path: '/hotel-bookings' },
  { title: 'Visa Services', path: '/visa-services' },
];

export const MainLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            BB Holidays
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            {navigationLinks.map((link) => (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                color="inherit"
              >
                {link.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <List>
          {navigationLinks.map((link) => (
            <ListItem 
              key={link.path} 
              component={Link} 
              to={link.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={link.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="body1" align="center">
            BB Holidays - Your Trusted Travel Partner Since 2017
          </Typography>
          <Typography variant="body2" align="center">
            Contact: +91 83810 69577 | Email: bbhushan@a2z-solutions.in
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}; 