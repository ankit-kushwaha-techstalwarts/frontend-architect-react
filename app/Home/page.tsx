'use client';

import { Box, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import CardComponents from '@/components/Card_Component/Card_Components';
import Footer from '@/components/Footer/Footer_Component';
import { useRouter } from 'next/navigation';


const Home = () => {
  const router = useRouter();
  return (
    <>
   <div>
        <Box
          sx={{
            px: 6,
            py: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#f0f4f8',
            width: '100%',
            height: '10vh',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            mb: 4,
          }}
        >
          {/* Logo */}
          <img src="../thrillo-logo.png" alt="logo" width={100} height={38} />

          {/* Search Field */}
          <TextField
            id="outlined-basic"
            placeholder="Search destinations..."
            variant="outlined"
            sx={{
              width: 300,
              backgroundColor: '#fff',
              borderRadius: '11px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              '& input::placeholder': {
                fontWeight: 'bold',
                color: '#999',
              },
            }}
            InputProps={{
              sx: {
                borderRadius: '10px',
              },
            }}
          />

          {/* Right Side Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <img
              src="../flag.jpeg"
              alt="flag"
              width={60}
              height={30}
              style={{ borderRadius: '6px', objectFit: 'cover' }}
            />
            <Typography
              sx={{
                fontWeight: 'bold',
                color: '#333',
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                  color: '#1976d2',
                },
              }}

              onClick={() => router.push('/login')}
            >
              Login
            </Typography>


            <Typography
            sx={{
                fontWeight: 'bold',
                color: '#333',
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                  color: '#1976d2',
                },
              }}

              onClick={() => router.push('/signup')}
            >Signup</Typography>
          </Box>
        </Box>

        <CardComponents />

        
       <Footer/>


      </div>
    </>
  );
};

export default Home;
