'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button, TextField, Typography, Container, Box, Paper } from '@mui/material';

const Login = () => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }
   
    

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 10, p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
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
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
