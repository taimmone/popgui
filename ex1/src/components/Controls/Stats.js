import { Box, Button, Typography } from '@material-ui/core';

const Stats = ({ stats: { movedUnits, mouseSpeed }, setters }) => {
  return (
    <Box display="flex-row">
      <Typography variant="body2">
        Mouse has moved {movedUnits} units with average speed of {mouseSpeed} units/s.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setters.forEach(f => f(0))}>
        Reset distances
      </Button>
    </Box>
  );
};

export default Stats;
