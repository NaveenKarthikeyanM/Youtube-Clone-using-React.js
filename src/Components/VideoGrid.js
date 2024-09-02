import React from 'react';
import VideoCard from './VideoCard';
import './VideoGrid.css';
import one from './Assets/Thumbnail1.jpg';
import two from './Assets/Thumbnail2.jpg';
import three from './Assets/Thumbnail3.jpg';
import four from './Assets/Thumbnail4.jpg';
import five from './Assets/Thumbnail5.jpg';
import six from './Assets/Thumbnail6.jpg';
import seven from './Assets/Thumbnail7.jpg';
import eight from './Assets/Thumbnail8.jpg';

function VideoGrid() {
  return (
    <div className="videoGrid">
      <VideoCard
        title="I Will Get It | Motivational Speech"
        channel="Motiversity"
        views="2M views"
        timestamp="2 hours ago"
        image={one}
      />
      <VideoCard
        title="STAY HUNGRY - The Most Powerful Motivational Speech"
        channel="Motiversity"
        views="12M views"
        timestamp="10 months ago"
        image={seven}
      />
      <VideoCard
        title="A WFH Day in the Life of AMAZON Software Engineer"
        channel="Love Babbar"
        views="226K views"
        timestamp="12 hours ago"
        image={two}
      />
      <VideoCard
        title="My Travel Vlog with my friend "
        channel="Travel With Me"
        views="100M views"
        timestamp="10 days ago"
        image={eight}
      />
      <VideoCard
        title="Sunrise Hot-air Balloon Flight"
        channel="Adventure Seeker"
        views="1000M views"
        timestamp="10 days ago"
        image={three}
      />
      <VideoCard
        title="My day at Goa Beach"
        channel="Goa Diaries"
        views="2500M views"
        timestamp="1 Years ago"
        image={four}
      />
         <VideoCard
        title="PEACE"
        channel="Soul Connection"
        views="250M views"
        timestamp="5 Years ago"
        image={five}
      />
      <VideoCard
        title="PERFECT RESUME IN 10MINS"
        channel="Love Babbar"
        views="226K views"
        timestamp="12 hours ago"
        image={six}
      />
    </div>
  );
}

export default VideoGrid;