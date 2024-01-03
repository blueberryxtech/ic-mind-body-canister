import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Label from '../../components/label';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  uniqueId,
  dataType,
  date,
  dataSize,
  isVerified,
  handleClick
}) {

  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
     <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
         <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">{uniqueId}</TableCell>

        <TableCell>{dataType}</TableCell>

        <TableCell>{date.toString()}</TableCell>

        <TableCell>{dataSize}</TableCell>

        <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell>

      </TableRow>
      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

UserTableRow.propTypes = {
  selected: PropTypes.any,
  uniqueId: PropTypes.any,
  dataType: PropTypes.any,
  date: PropTypes.any,
  dataSize: PropTypes.any,
  isVerified: PropTypes.any,
  handleClick: PropTypes.func
};
