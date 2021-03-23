import { Box, Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

const App = () => {
  const [clickedButton, setClickedButton] = useState('');
  const [mouse, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(0);

  const handleMouseClick = event => {
    setClickedButton(() => {
      switch (event.button) {
        case 0:
          return 'left mouse';
        case 1:
          return 'middle mouse';
        case 2:
          return 'right mouse';
        default:
          return 'unknown';
      }
    });
  };

  const handleMouseMove = event => {
    const box = event.currentTarget.getBoundingClientRect();
    setMouseCoordinates({
      x: Math.floor(event.clientX - box.left),
      y: Math.floor(event.clientY - box.top),
    });
  };

  const handleScroll = event => {
    setScrolled(event.deltaY);
  };

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h4" align="center">
        Try mouse events on the box below
      </Typography>
      <Box
        component={Paper}
        elevation={3}
        mt={3}
        p={5}
        onMouseDown={handleMouseClick}
        onMouseMove={handleMouseMove}
        onWheel={handleScroll}
      >
        <Grid container direction="column" spacing={2}>
          <Grid
            item
            component={TextField}
            value={
              clickedButton
                ? `Mouse was clicked: ${clickedButton} button`
                : `Press any mouse button`
            }
            variant="outlined"
          />
          <Grid
            item
            component={TextField}
            value={`Mouse was moved to x: ${mouse.x} y: ${mouse.y} `}
            variant="outlined"
          />
          <Grid
            item
            component={TextField}
            value={`Mouse wheel scrolled by: ${scrolled > 0 ? `+${scrolled}` : scrolled}`}
            variant="outlined"
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
