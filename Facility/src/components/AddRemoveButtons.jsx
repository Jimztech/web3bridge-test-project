import React, { useState } from 'react';
import { Box, Button, Input, Select, Stack } from '@chakra-ui/react';

const AddRemoveButtons = ({ people, setPeople }) => {
  const [formData, setFormData] = useState({ name: '', role: '', skill: '', gender: '' });

  const handleAddPerson = () => {
    setPeople([...people, formData]);
    setFormData({ name: '', role: '', skill: '', gender: '' });
  };

  const handleRemovePerson = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  return (
    <Box>
      <Stack spacing={3} mt={5}>
        {people.map((person, index) => (
          <Box key={index} p={3} borderWidth="1px" borderRadius="lg">
            {person.name} - {person.role} - {person.skill} - {person.gender}
            <Button ml={3} onClick={() => handleRemovePerson(index)}>Remove</Button>
          </Box>
        ))}
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Select
          placeholder="Role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="facilitator">Facilitator</option>
          <option value="developer">Developer</option>
        </Select>
        <Select
          placeholder="Skill"
          value={formData.skill}
          onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
        >
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="html">HTML</option>
        </Select>
        <Select
          placeholder="Gender"
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <Button onClick={handleAddPerson}>Add</Button>
      </Stack>
    </Box>
  );
};

export default AddRemoveButtons;
