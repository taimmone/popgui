import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';

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
      <ToolbarMenu items={['save', 'exit']} name="file" {...props} />
      <ToolbarMenu items={['undo', 'redo', 'update text']} name="edit" {...props} />
      <ToolbarMenu items={['tips', 'tricks', 'about']} name="help" {...props} />
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

const AboutDialog = ({ handleClose, open }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>About</DialogTitle>
      <DialogContent>
        <DialogContentText component="p">
          (C)2021 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose} color="default" autoFocus disableRipple>
            Close
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [fillerText, setFillerText] = useState(null);
  const [openAbout, setOpenAbout] = useState(false);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = _event => {
    setAnchorEl(null);
  };

  const updateText = _event => {
    setFillerText(
      'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.'
    );
  };

  const openAboutDialog = _event => {
    setOpenAbout(true);
  };

  const closeAboutDialog = _event => {
    setOpenAbout(false);
  };

  const handleMenuItem = (_event, itemName) => {
    handleMenuClose();
    (() => {
      switch (itemName) {
        case 'about':
          return openAboutDialog();
        case 'update text':
          return updateText();
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
            <MenuButton name="file" {...{ handleMenu: handleMenuOpen }} />
            <MenuButton name="edit" {...{ handleMenu: handleMenuOpen }} />
            <MenuButton name="help" {...{ handleMenu: handleMenuOpen }} />
            <Menus {...{ handleClose: handleMenuClose, anchorEl, handleMenuItem }} />
            <AboutDialog handleClose={closeAboutDialog} open={openAbout} />
          </Toolbar>
        </AppBar>
        <Box p={3} textAlign="justify">
          <Typography component="h1" variant="h4" align="center" style={{ fontWeight: '900' }}>
            {fillerText ? 'Zombie Ipsum' : 'Lorem Ipsum'}
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1">
              {!fillerText ? `Try Edit -> Update text` : ''}
            </Typography>
            <Typography component="p">{fillerText ?? lipsum}</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
