'use client';
import React from 'react';
import PlaceComponent from '../Place_Component/Place_Component';
import { Place } from '../types/Place'; // ✅ Added import

const places: Place[] = [
  {
    name: 'Taj Mahal',
    location: 'Agra, India',
    price: 'fdfd',
    imageUrl: 'https://source.unsplash.com/400x300/?taj-mahal',
  },
  {
    name: 'India Gate',
    location: 'Delhi, India',
    price: '50fdfd0',
    imageUrl: 'https://source.unsplash.com/400x300/?india-gate',
  },
];

export default function PlacesPage() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {places.map((place, index) => (
        <PlaceComponent key={index} place={place} />
      ))}
    </div>
  );
}
