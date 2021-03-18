import { Box } from '@material-ui/core';
import CheckboxTable from './CheckboxTable';
import Stats from './Stats';

const Controls = ({ stats, setters, listeners, handleChange }) => {
  return (
    <Box display="flex-row">
      <CheckboxTable {...{ listeners, handleChange }} />
      <Stats {...{ stats, setters }} />
    </Box>
  );
};

export default Controls;
