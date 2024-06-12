import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Button, Image } from '@chakra-ui/react';
import Welcome from './components/Welcome';
import ConferenceRoom from './components/ConferenceRoom';
import Bedroom from './components/Bedroom';

function App() {
  return (
    <Router>
      <Box p={5}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/conference-room" element={<ConferenceRoom />} />
          <Route path="/bedroom/:id" element={<Bedroom />} />
        </Routes>
      </Box>
    </Router>
  );
}
export default App
