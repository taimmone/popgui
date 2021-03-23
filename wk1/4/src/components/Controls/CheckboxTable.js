import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

const TCellCheckbox = ({ name, listener, handleChange }) => (
  <TableCell align="center">
    <Checkbox checked={listener} onChange={handleChange} name={name} />
  </TableCell>
);

const CheckboxTable = ({
  listeners: { mouseDistance, mouseSpeed, scrollDistance, scrollSpeed },
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

export default CheckboxTable;
