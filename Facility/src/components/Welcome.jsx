import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <Box textAlign="center">
    <Heading>Welcome to WEB3BRIDGE Facility</Heading>
    <Link to="/conference-room">
      <Button mt={5}>Next</Button>
    </Link>
  </Box>
);

export default Welcome;
