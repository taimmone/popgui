import { Box, Container, CssBaseline, Paper } from '@material-ui/core';
import 'fontsource-roboto';
import { useState } from 'react';
import Controls from './components/Controls/Controls';

const App = () => {
  const [movedUnits, setMovedDistance] = useState(5);
  const [mouseSpeed, setMouseSpeed] = useState(28);
  const [listeners, setListeners] = useState({
    mouseDistance: false,
    mouseSpeed: false,
    scrollDistance: false,
    scrollSpeed: false,
  });

  const handleChange = event => {
    setListeners({ ...listeners, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" component="main" disableGutters={true}>
        <Box component={Paper} display="flex" p="1rem">
          <Controls
            stats={{ movedUnits, mouseSpeed }}
            setters={{ setMovedDistance, setMouseSpeed }}
            {...{ listeners, handleChange }}
          />
          <Box
            component={Paper}
            variant="outlined"
            ml="2rem"
            width={1}
            height="auto"
            bgcolor="grey.300"
          />
        </Box>
      </Container>
    </>
  );
};

export default App;
