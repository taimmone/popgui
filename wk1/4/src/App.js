import { Box, Container, CssBaseline, Paper } from '@material-ui/core';
import 'fontsource-roboto';
import { useState } from 'react';
import Controls from './components/Controls/Controls';

const App = () => {
  const [stats, setStats] = useState({
    mouse: { distance: 0, speed: 0 },
    scrollWheel: { distance: 0, speed: 0 },
  });
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
          <Controls {...{ stats, setStats, listeners, handleChange }} />
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
