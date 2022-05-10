import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import 'fontsource-roboto/900.css';
import { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('primary');

  const handleChange = event => {
    setColor(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box component={Paper} p={2}>
        <Typography
          component="h1"
          variant="h3"
          color={color}
          style={{ fontWeight: '900', textShadow: '0px 0px 5px' }}
        >
          Colours
        </Typography>
        <Box mt={1} ml={1}>
          <FormControl component="fieldset">
            <RadioGroup name="color" defaultValue="primary">
              <FormControlLabel
                label="First"
                value="primary"
                control={<Radio color="primary" />}
                onChange={handleChange}
              />
              <FormControlLabel
                label="Second"
                value="secondary"
                control={<Radio color="secondary" />}
                onChange={handleChange}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
