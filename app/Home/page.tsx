'use client';

import { Box, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import CardComponents from '@/components/Card_Component/Card_Components';

const Home = () => {
  return (
    <>
    <div>
      <Box
        sx={{
          padding: 4,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          justifyContent: 'space-between',
          backgroundColor: '#f5f5f5',
          color: 'black',
          width: '100%',
        }}
      >
        <img src="../thrillo-logo.png" alt="photo" width={100} height={38} />

        <TextField id="outlined-basic" placeholder="type something" variant="outlined" />


  <Typography >Login</Typography>

           <img src="../flag.jpeg" alt="" width={60} height={30} />
      </Box>


      {/* Not using it currenty , will look into it later */}
      {/* <Box   
        sx={{
          padding: 4,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          justifyContent: 'space-between',
          backgroundColor: '#e0e0e0',
          color: 'black',
          width: '100%',
        }}
      >
        <Button variant="contained" color="primary">
          Sign Up
        </Button>

        <Button variant="outlined" color="secondary">
          Login
        </Button>
      </Box> */}

 
 <CardComponents/>



      
      </div>
    </>
  );
};

export default Home;
