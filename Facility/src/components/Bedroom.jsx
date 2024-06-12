import React, { useState } from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import AddRemoveButtons from './AddRemoveButtons';
import bedroom01 from '../assets/images/bedroom01.jpg';
import bedroom02 from '../assets/images/bedroom02.jpg';
import bedroom03 from '../assets/images/bedroom03.jpg';

const Bedroom = () => {
  const { id } = useParams();
  const [people, setPeople] = useState([]);

  // Determine the image source based on the bedroom id
  const getImageSrc = (id) => {
    switch (id) {
      case '1':
        return bedroom01;
      case '2':
        return bedroom02;
      case '3':
        return bedroom03;
      default:
        return bedroom01; // default image if id doesn't match
    }
  };

  return (
    <Box textAlign="center">
      <Text>Bedroom {id}</Text>
      <Image src={getImageSrc(id)} alt={`Bedroom ${id}`} />
      <AddRemoveButtons people={people} setPeople={setPeople} />
      {id < 3 ? (
        <Link to={`/bedroom/${parseInt(id) + 1}`}>
          <Button mt={5}>Next</Button>
        </Link>
      ) : (
        <Link to="/">
          <Button mt={5}>Finish</Button>
        </Link>
      )}
    </Box>
  );
};

export default Bedroom;
