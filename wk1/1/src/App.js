import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from '@material-ui/core';
import 'fontsource-roboto';
import { useState } from 'react';

const OutlinedSmallTextField = ({ name, label, value, disabled = false, handleChange }) => (
  <TextField
    {...{ name, label, value, disabled }}
    fullWidth
    variant="outlined"
    size="small"
    margin="dense"
    onChange={handleChange}
  />
);

const App = () => {
  const [disabledMiddleName, toggleMiddleName] = useState(true);
  const [names, setNames] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
  });

  const autoFill = () => {
    setNames({
      firstName: 'Toni',
      middleName: 'A.',
      lastName: 'Immonen',
    });
  };

  const handleChange = event => {
    setNames({ ...names, [event.target.name]: event.target.value });
  };

  return (
    <Container maxWidth="sm">
      <Box component={Paper} p={5} pb={3}>
        <Grid container direction="column" alignItems="flex-end" spacing={3}>
          <Grid item container direction="row" spacing={1} justify="flex-end">
            <Grid item sm={6} xs={12}>
              <OutlinedSmallTextField
                name="firstName"
                label="First name"
                value={names.firstName}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <OutlinedSmallTextField
                name="middleName"
                label="Middle name"
                disabled={disabledMiddleName}
                value={names.middleName}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                value="middleName"
                label="Middle name"
                control={<Checkbox onChange={() => toggleMiddleName(!disabledMiddleName)} />}
              />
            </Grid>
            <Grid item xs={12}>
              <OutlinedSmallTextField
                name="lastName"
                label="Last name"
                value={names.lastName}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Button variant="contained" color="primary" onClick={autoFill}>
              Autofill
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
