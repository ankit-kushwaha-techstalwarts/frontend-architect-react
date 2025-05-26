'use client';
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface Place {
  name: string;
  location: string;
  price: number;
  imageUrl: string;
}

export default function PlaceComponent({ place }: { place: Place }) {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={place.imageUrl}
        alt={place.name}
      />
      <CardContent>
        <Typography variant="h6">{place.name}</Typography>
        <Typography color="text.secondary">{place.location}</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          ₹ {place.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
