import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import 'fontsource-roboto';
import { useState } from 'react';

const TCellCheckbox = ({ name, listener, handleChange }) => (
  <TableCell align="center">
    <Checkbox checked={listener} onChange={handleChange} name={name} />
  </TableCell>
);

const CheckboxTable = ({
  state: { mouseDistance, mouseSpeed, scrollDistance, scrollSpeed },
  handleChange,
}) => {
  return (
    <TableContainer style={{ width: 'max-content' }}>
      <Table padding="checkbox" size="small">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">
              <Typography>Mouse</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography noWrap>Scroll Wheel</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography>Distance</Typography>
            </TableCell>
            <TCellCheckbox name="mouseDistance" {...{ mouseDistance, handleChange }} />
            <TCellCheckbox name="scrollDistance" {...{ scrollDistance, handleChange }} />
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>Speed</Typography>
            </TableCell>
            <TCellCheckbox name="mouseSpeed" {...{ mouseSpeed, handleChange }} />
            <TCellCheckbox name="scrollSpeed" {...{ scrollSpeed, handleChange }} />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Stats = ({ movedUnits, mouseSpeed, state, handleChange, setters }) => {
  return (
    <Box display="flex-row">
      <CheckboxTable {...{ state, handleChange }} />
      <Typography variant="body2">
        Mouse has moved {movedUnits} units with average speed of {mouseSpeed} units/s.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setters.forEach(f => f(0))}>
        Reset distances
      </Button>
    </Box>
  );
};

const App = () => {
  const [movedUnits, setMovedDistance] = useState(5);
  const [mouseSpeed, setMouseSpeed] = useState(28);
  const [listener, setListener] = useState({
    mouseDistance: false,
    mouseSpeed: false,
    scrollDistance: false,
    scrollSpeed: false,
  });

  const handleChange = event => {
    setListener({ ...listener, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" component="main" disableGutters={true}>
        <Box component={Paper} display="flex" p="1rem">
          <Stats
            {...{ movedUnits, mouseSpeed, state: listener }}
            {...{ handleChange }}
            setters={[setMovedDistance, setMouseSpeed]}
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
