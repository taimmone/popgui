import { Box, Button, Typography } from '@material-ui/core';

const Stats = ({ stats: { mouse, scrollWheel }, setStats }) => {
  return (
    <Box display="flex-row">
      <Typography variant="body2">
        Mouse has moved {mouse.distance} units with average speed of {mouse.speed} units/s.
      </Typography>
      <Typography variant="body2">
        Scroll wheel has moved {scrollWheel.distance} units with average speed of{' '}
        {scrollWheel.speed} units/s.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          setStats({
            mouse: { distance: 0, speed: 0 },
            scrollWheel: { distance: 0, speed: 0 },
          })
        }
      >
        Reset stats
      </Button>
    </Box>
  );
};

export default Stats;
