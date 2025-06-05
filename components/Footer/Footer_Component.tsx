import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        py: 4,
        px: 2,
        fontFamily: 'Arial, sans-serif',
        borderTop: '1px solid #ddd',
        mt: 'auto',
        fontSize: '1 rem',
        textAlign: 'center',
        fontWeight: 800,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center">
          {/* Logo */}
          <Image
           src="/thrillo-logo.png"

            alt="Thrillophilia Logo"
            width={160}
            height={40}
            style={{ margin: '16px' }}
          />


            

          {/* Disclaimer */}
          <Typography variant="caption" color="text.secondary" maxWidth="md"
          sx={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        py: 4,
        px: 2,
        fontFamily: 'Arial, sans-serif',
        borderTop: '1px solid #ddd',
        mt: 'auto',
        fontSize: '2 rem',
        textAlign: 'center',
        fontWeight: 400,
        lineHeight: 1.5,
      }}
          
          >
            The content and images used on this site are copyright protected 
             
            and copyrights vest with the respective owners. The usage of the content and images on this website is intended to promote
            <br />
            
             the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.
          </Typography>
        </Stack>
    

    <Typography variant="body2" color="text.secondary" >
            © 2025 Thrillophilia.com All rights reserved.
          </Typography>


      </Container>
    </Box>
  );
};

export default Footer;
