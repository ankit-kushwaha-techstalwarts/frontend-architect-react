'use client';
import React from 'react';
import PlaceComponent from '../Place_Component/Place_Component';

const places: Place[] = [
  {
    name: 'Taj Mahal',
    location: 'Agra, India',
    price: 'INR20000',
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
    name: 'India Gate',
    location: 'Delhi, India',
    price: 'INR 15000',
    imageUrl: 'https://images.unsplash.com/photo-1667760334198-d3958029a08b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMGZvcmVzdCUyMGltYWdlfGVufDB8fDB8fHww',
  },

 {
    name: 'India Gate',
    location: 'Delhi, India',
    price: 'INR 15000',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kaWElMjBnYXRlfGVufDB8fDB8fHww',
  }, {
    name: 'India Gate',
    location: 'Delhi, India',
    price: 'INR 15000',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SW5kaWElMjBnYXRlfGVufDB8fDB8fHww',
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
