import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  Paper,
  TextField,
  useTheme,
} from '@material-ui/core';
import { useState } from 'react';

const App = () => {
  const theme = useTheme();
  const [binary, setBinary] = useState([false, false, false, false, false, false, false, false]);
  const [converted, setConverted] = useState('');

  const handleChange = event => {
    let changed = binary.map((v, i) => {
      return event.target.name === i.toString() ? event.target.checked : v;
    });
    setBinary(changed);
  };

  const convertBinary = () => {
    setConverted(parseInt(binary.map(v => (v ? '1' : 0)).join(''), 2));
  };

  return (
    <Container maxWidth="xs">
      <Box component={Paper} pt={1} p={3}>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid container item>
            {binary.map((v, i) => {
              return (
                <Checkbox
                  key={i}
                  checked={v}
                  name={i.toString()}
                  color="default"
                  onChange={handleChange}
                />
              );
            })}
          </Grid>
          <Grid item>
            <TextField
              value={binary.map(v => (v ? '1' : 0)).join('')}
              variant="outlined"
              size="small"
              disabled
              inputProps={{ style: { textAlign: 'center', color: theme.palette.text.primary } }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={convertBinary}>
              Convert
            </Button>
          </Grid>
          <Grid item>
            <TextField
              value={converted}
              variant="outlined"
              size="small"
              disabled
              inputProps={{ style: { textAlign: 'center', color: theme.palette.text.primary } }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
