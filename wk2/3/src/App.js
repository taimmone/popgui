import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  heading: {
    fontWeight: '900',
    textShadow: `0 1px 2px ${theme.palette.primary.light}`,
    textAlign: 'center',
    marginBottom: '-1rem',
  },
  subtitle: {
    fontWeight: '700',
    textAlign: 'center',
    color: theme.palette.secondary.main,
    marginBottom: '-2rem',
  },
  bodyText: {
    textAlign: 'justify',
    marginTop: '3rem',
    overflowWrap: 'break-word',
    hyphens: 'auto',
  },
}));

const ToolbarMenu = ({ anchorEl, name, items, handleClose, handleMenuItem }) => {
  const capitalize = (_ss, itemName) => `${itemName.charAt(0).toUpperCase()}${itemName.slice(1)}`;
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl?.name === name)}
      keepMounted
      onClose={handleClose}
    >
      {items.map(itemName => {
        return (
          <MenuItem key={itemName} name={itemName} onClick={e => handleMenuItem(e, itemName)}>
            {capitalize`${itemName}`}
          </MenuItem>
        );
      })}
    </Menu>
  );
};
const Menus = props => {
  return (
    <>
      <ToolbarMenu items={['do nothing']} name="file" {...props} />
      <ToolbarMenu items={['update text']} name="edit" {...props} />
    </>
  );
};

const MenuButton = ({ name, handleMenu }) => {
  return (
    <Button name={name} fullWidth disableRipple onClick={handleMenu}>
      {name}
    </Button>
  );
};

const TextDialog = ({ handleClose, handleSubmit, open }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update</DialogTitle>
      <DialogContent>
        <DialogActions>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <TextField
                label="Type your message"
                name="message"
                variant="outlined"
                size="small"
                margin="normal"
                required
              />
              <Button type="submit" color="primary" variant="contained" autoFocus disableRipple>
                Update
              </Button>
            </FormControl>
          </form>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

const App = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [text, setText] = useState(null);
  const [textDialogOpen, setTextDialog] = useState(false);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = _event => {
    setAnchorEl(null);
  };

  const updateText = event => {
    event.preventDefault();
    setText(event.target.message.value);
    closeTextDialog();
  };

  const openTextDialog = _event => {
    setTextDialog(true);
  };

  const closeTextDialog = _event => {
    setTextDialog(false);
  };

  const handleMenuItem = (_event, itemName) => {
    handleMenuClose();
    (() => {
      switch (itemName) {
        case 'update text':
          return openTextDialog();
        default:
          return null;
      }
    })();
  };

  const lipsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a metus purus. Donec auctor porta elit et condimentum. Aenean quis nulla et est tincidunt egestas. Curabitur finibus dolor vitae lacinia vulputate. Pellentesque accumsan convallis faucibus. Quisque rhoncus nibh at diam posuere, a molestie nulla ullamcorper. Nullam nunc tortor, sodales a orci sed, condimentum fringilla augue. Proin venenatis neque nisl, ultricies aliquam augue maximus a. Nam et ligula nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';

  return (
    <Container maxWidth="xs">
      <Box component={Paper} minHeight={200}>
        <AppBar position="relative" color="default" elevation={1}>
          <Toolbar variant="dense" component={Box} justifyContent="space-evenly">
            <MenuButton name="file" />
            <MenuButton name="edit" {...{ handleMenu: handleMenuOpen }} />
            <Menus {...{ handleClose: handleMenuClose, anchorEl, handleMenuItem }} />
            <TextDialog
              handleClose={closeTextDialog}
              handleSubmit={updateText}
              open={textDialogOpen}
            />
          </Toolbar>
        </AppBar>
        <Box p={3} textAlign="justify">
          <Typography component="h1" variant="h4" className={classes.heading}>
            Lorem ipsum
          </Typography>
          <Box mt={2}>
            {!text ? (
              <Typography variant="subtitle2" className={classes.subtitle}>
                {`Edit ❯ Update text`}
              </Typography>
            ) : null}

            <Typography component="p" className={classes.bodyText}>
              {text ?? lipsum}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
