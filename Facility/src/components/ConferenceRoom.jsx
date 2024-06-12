import React, { useState } from 'react';
import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AddRemoveButtons from './AddRemoveButtons';
import conference from "../assets/images/conference.jpg";

const ConferenceRoom = () => {
  const [people, setPeople] = useState([]);

  return (
    <Box textAlign="center">
      <h2>Conference Room</h2>
      <Image src={conference} alt="Conference Room" />
      <AddRemoveButtons people={people} setPeople={setPeople} />
      <Link to="/bedroom/1">
        <Button mt={5}>Next</Button>
      </Link>
    </Box>
  );
};

export default ConferenceRoom;
