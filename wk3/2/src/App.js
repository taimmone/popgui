import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';

const DateListItem = ({ dateItem, index, handleSelect, handleDateSelector }) => {
  return (
    <ListItem dense>
      <Checkbox checked={dateItem.selected} onChange={() => handleSelect(index)} disableRipple />
      <ListItemText primary={<Typography>{dateItem.date.toLocaleDateString()}</Typography>} />
      <TextField
        type="date"
        value={dateItem.date.toISOString().split('T')[0]}
        InputLabelProps={{ shrink: true }}
        onChange={e => handleDateSelector(e, index)}
      />
    </ListItem>
  );
};

const newDate = () => {
  const date = new Date();
  const key = date.toISOString() + Date.now();
  return { date, key, selected: false };
};

const App = () => {
  const [dates, setDates] = useState([newDate()]);

  const addDate = () => {
    setDates([...dates, newDate()]);
  };

  const handleRemove = () => {
    if (dates.some(date => date.selected)) {
      setDates(dates.filter(date => !date.selected));
    } else {
      setDates([]);
    }
  };

  const handleSelect = index => {
    let newDates = [...dates];
    let selectedDate = newDates[index];
    selectedDate.selected = !selectedDate.selected;
    setDates([...newDates]);
  };

  const handleDateSelector = (event, index) => {
    let newDates = [...dates];
    newDates[index].date = new Date(event.target.value);
    setDates([...newDates]);
  };

  return (
    <Container maxWidth="xs">
      <Box component={Paper} minHeight={300} p={3} elevation={3}>
        <Grid container spacing={2}>
          <Grid container item>
            <Box component={Paper} width="100%" minHeight={250}>
              <List dense>
                {dates.map((dateItem, i) => (
                  <DateListItem
                    key={dateItem.key}
                    {...{ dateItem, handleSelect, handleDateSelector }}
                    index={i}
                  />
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={addDate} fullWidth disableRipple>
              Add
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleRemove}
              fullWidth
              disableRipple
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
