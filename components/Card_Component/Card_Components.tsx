'use client';
import React from 'react';
import PlaceComponent from '../Place_Component/Place_Component';

type Place = {
  name: string;
  location: string;
  price: string;
  imageUrl: string;
};

const places: Place[] = [
  {
    name: 'Taj Mahal',
    location: 'Agra, India',
    price: 'INR 20000',
    imageUrl: 'https://images.unsplash.com/photo-1545562083-c583d014b4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRhaiUyMG1haGFsfGVufDB8fDB8fHww',
  },
  {
    name: 'India Gate',
    location: 'Delhi, India',
    price: 'INR 15000',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kaWElMjBnYXRlfGVufDB8fDB8fHww',
  },


   {
    name: 'Kerela Beach',
    location: ' India',
    price: 'INR 15000',
    imageUrl: 'https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D',
  },

   {
    name: 'Jaipur Fort',
    location: 'India',
    price: 'INR 15000',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697729422411-a2553ae5bd0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmFqYXN0aGFufGVufDB8fDB8fHww',
  },

   {
    name: 'Goa',
    location: ' India',
    price: 'INR 15000',
    imageUrl: 'https://images.unsplash.com/photo-1671769195173-e8c838867985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGFnZSUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D',
  },

 {
    name: 'Banaras',
    location: ' India',
    price: 'INR 15000',
    imageUrl: 'https://images.unsplash.com/photo-1639729098994-60116f7a7c51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYXJhc3xlbnwwfHwwfHx8MA%3D%3D',
  }, {
    name: 'Rann of Kutch',
    location: ' India',
    price: 'INR 15000',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730073417-c32f239b5675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzZXJ0JTIwc3VucmlzZSUyMHBob3Rv',
  },

];

export default function PlacesPage() {
  return (
    <div style={{ 
      // display: 'flex',
  flexWrap: 'wrap',
      display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    marginTop: '20px',
  gap: '20px',
  padding: '10px',
  width: '100%',
  objectFit: 'contain',
  boxSizing: 'border-box' }}>
      {places?.map((place, index) => (
        <PlaceComponent key={index} place={place} />
      ))}
    </div>
  );
}
