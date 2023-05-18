import React from 'react';
import '../../App.css';
import About from './About';
import Mission from './Mission';
import Header from './Header';
import NewsAndAnnouncement from './NewsAndAnnouncement/NewsAndAnnouncement';
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Mission />
      <NewsAndAnnouncement />
    </div>
  );
}
