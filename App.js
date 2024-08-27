import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed'; // Import the Feed component
import Sidebar from './components/Sidebar';
import Explore from './components/Explore';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import Messages from './components/Messages';
import HashtagSearch from './components/HashtagSearch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // Sample posts data (replace with your actual data)
  const posts = [
    {
      username: 'alice_wonder',
      content: 'Just learned about React Hooks! #ReactJS',
      timestamp: '2024-07-03 14:00'
    },
    {
      username: 'bob_builder',
      content: 'Building a new project with JavaScript. Stay tuned! #WebDevelopment',
      timestamp: '2024-07-03 13:30'
    },
    {
      username: 'charlie_chaplin',
      content: 'Loving the latest updates from OpenAI! #TechNews',
      timestamp: '2024-07-03 13:00'
    }
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              {/* Route for hashtag search */}
              <Route
                path="/hashtag/:hashtag"
                element={<HashtagSearch posts={posts} />} // Pass posts data as prop
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
