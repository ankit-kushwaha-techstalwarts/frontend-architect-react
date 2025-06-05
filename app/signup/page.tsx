'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextField, Typography, Container, Box, Paper } from '@mui/material';

const Signup = () => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form data here
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 10, p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Signup
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            label="First Name"
            fullWidth
            margin="normal"
            type="text"
            required
          />
          <TextField
            name="lastName"
            label="Last Name"
            fullWidth
            margin="normal"
            type="text"
            required
          />
          <TextField
            name="email"
            label="Email"
            fullWidth
            margin="normal"
            type="email"
            required
          />
          <TextField
            name="password"
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Signup
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;