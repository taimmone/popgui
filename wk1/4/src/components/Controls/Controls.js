import { Box } from '@material-ui/core';
import CheckboxTable from './CheckboxTable';
import Stats from './Stats';

const Controls = ({ stats, setStats, listeners, handleChange }) => {
  return (
    <Box display="flex-row">
      <CheckboxTable {...{ listeners, handleChange }} />
      <Stats {...{ stats, setStats }} />
    </Box>
  );
};

export default Controls;
