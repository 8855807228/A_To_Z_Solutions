import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Corporate Travel',
    description: 'End-to-end solutions for MICE: Meetings, Incentives, Conferences, Exhibitions',
    icon: <BusinessIcon fontSize="large" />,
    path: '/corporate-travel'
  },
  {
    title: 'B2B Services',
    description: 'Tie-ups with national & international Destination Management Companies',
    icon: <GroupsIcon fontSize="large" />,
    path: '/b2b-services'
  },
  {
    title: 'Holiday Packages',
    description: 'Customized family holidays, honeymoon packages, group tours & solo adventures',
    icon: <FlightTakeoffIcon fontSize="large" />,
    path: '/holiday-packages'
  },
  {
    title: 'Transport Services',
    description: 'PAN India taxi & bus services with reliable, clean vehicles',
    icon: <DirectionsCarIcon fontSize="large" />,
    path: '/transport-services'
  },
  {
    title: 'Hotel Bookings',
    description: 'Access to competitive rates for hotels ranging from budget to luxury',
    icon: <HotelIcon fontSize="large" />,
    path: '/hotel-bookings'
  },
  {
    title: 'Visa Services',
    description: 'Step-by-step support for passport applications and visa processes',
    icon: <DescriptionIcon fontSize="large" />,
    path: '/visa-services'
  }
];

export const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            BB Holidays
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your Trusted Travel Partner in Aurangabad
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            Specializing in customized domestic and international travel since 2017
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/quote"
            sx={{ mt: 2 }}
          >
            Request a Quote
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          One Line Tour Price – Always All Inclusive. No Confusion. No Hidden Costs.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
                component={Link}
                to={service.path}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>
                    {service.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Our Mission
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                ✅ Customer Satisfaction First
              </Typography>
              <Typography paragraph>
                We aim to deliver exceptional, value-packed, high-quality travel experiences.
              </Typography>
              
              <Typography variant="h6" gutterBottom>
                🤝 Strategic Partnerships
              </Typography>
              <Typography paragraph>
                Collaborating with trusted local and international DMCs to enhance tour value and reach.
              </Typography>
              
              <Typography variant="h6" gutterBottom>
                💡 Innovation
              </Typography>
              <Typography paragraph>
                Introducing unique destination concepts and curated travel ideas.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                🌱 Sustainability
              </Typography>
              <Typography paragraph>
                Promoting eco-friendly tourism and supporting local communities.
              </Typography>
              
              <Typography variant="h6" gutterBottom>
                📊 Professional Excellence
              </Typography>
              <Typography paragraph>
                Practicing ethical, efficient, and transparent management.
              </Typography>
              
              <Typography variant="h6" gutterBottom>
                🌐 Digital Engagement
              </Typography>
              <Typography paragraph>
                Enhancing traveler convenience through smart tech solutions.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}; 