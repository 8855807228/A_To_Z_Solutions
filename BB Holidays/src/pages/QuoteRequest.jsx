import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required('Full name is required'),
  location: yup
    .string()
    .required('Location is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  tourDescription: yup
    .string()
    .required('Tour description is required')
    .min(10, 'Please provide more details about your tour preferences'),
  mobileNumber: yup
    .string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit mobile number'),
  duration: yup
    .number()
    .required('Duration is required')
    .min(1, 'Duration must be at least 1 day'),
  persons: yup
    .number()
    .required('Number of persons is required')
    .min(1, 'At least 1 person is required'),
});

export const QuoteRequest = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      location: '',
      email: '',
      tourDescription: '',
      mobileNumber: '',
      duration: '',
      persons: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Here we'll handle form submission
      console.log('Form submitted:', values);
      // TODO: Integrate with backend API
    },
  });

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Request a Quote
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Let us help you design the perfect itinerary—tailored to your preferences and budget.
        </Typography>

        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="fullName"
                name="fullName"
                label="Full Name"
                placeholder="Enter your full name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="location"
                name="location"
                label="Location"
                placeholder="E.g., India, USA, Australia"
                value={formik.values.location}
                onChange={formik.handleChange}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                placeholder="We'll use this to send your custom itinerary"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="tourDescription"
                name="tourDescription"
                label="Tour Description"
                placeholder="Tell us where you want to go, the kind of experience you're looking for, or any preferences"
                multiline
                rows={4}
                value={formik.values.tourDescription}
                onChange={formik.handleChange}
                error={formik.touched.tourDescription && Boolean(formik.errors.tourDescription)}
                helperText={formik.touched.tourDescription && formik.errors.tourDescription}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="mobileNumber"
                name="mobileNumber"
                label="Mobile Number"
                placeholder="So we can reach you quickly for follow-up"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                id="duration"
                name="duration"
                label="Duration (Days)"
                type="number"
                placeholder="How long do you plan to travel?"
                value={formik.values.duration}
                onChange={formik.handleChange}
                error={formik.touched.duration && Boolean(formik.errors.duration)}
                helperText={formik.touched.duration && formik.errors.duration}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                id="persons"
                name="persons"
                label="Number of Persons"
                type="number"
                placeholder="Solo, couple, family, or group?"
                value={formik.values.persons}
                onChange={formik.handleChange}
                error={formik.touched.persons && Boolean(formik.errors.persons)}
                helperText={formik.touched.persons && formik.errors.persons}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Submit Quote Request
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}; 