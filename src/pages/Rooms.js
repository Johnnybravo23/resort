import React from 'react';

// imports
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Rooms() {
  return (
      <Hero hero="roomsHero">
          <Banner title="our rooms">
              <Link to='/' className="btn-primary">
                return Home
              </Link>
          </Banner>
      </Hero>
  );
}
