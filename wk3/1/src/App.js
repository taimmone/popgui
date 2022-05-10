import { Box, Container, Paper, Slider } from '@material-ui/core';
import { useState } from 'react';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 255,
    label: '255',
  },
];

const VerticalSlider = ({ value, handleChange }) => {
  return (
    <Slider
      value={value}
      orientation="vertical"
      marks={marks}
      max={255}
      min={0}
      onChange={handleChange}
      style={{ height: 255, margin: 30 }}
    />
  );
};

const App = () => {
  const [rgb, setRGB] = useState({ red: 0, green: 0, blue: 0 });

  const handleChange = (name, value) => {
    setRGB({ ...rgb, [name]: value });
  };

  return (
    <Container maxWidth="xs">
      <Box
        component={Paper}
        minHeight={300}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        style={{ backgroundColor: `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})` }}
      >
        <VerticalSlider value={rgb.red} handleChange={(_e, value) => handleChange('red', value)} />
        <VerticalSlider
          value={rgb.green}
          handleChange={(_e, value) => handleChange('green', value)}
        />
        <VerticalSlider
          value={rgb.blue}
          handleChange={(_e, value) => handleChange('blue', value)}
        />
      </Box>
    </Container>
  );
};

export default App;
