import PropTypes from 'prop-types';

import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';

// ----------------------------------------------------------------------

export default function UserTableRow({
  selected,
  uniqueId,
  dataType,
  date,
  dataSize,
  isVerified
}) {

  return (
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">{uniqueId}</TableCell>

        <TableCell>{dataType}</TableCell>

        <TableCell>{date.toString()}</TableCell>

        <TableCell>{dataSize}</TableCell>

        <TableCell align="center">{isVerified ? 'Yes' : 'No'}</TableCell>

      </TableRow>
  );
}

UserTableRow.propTypes = {
  uniqueId: PropTypes.any,
  isVerified: PropTypes.any,
  dataType: PropTypes.any,
  date: PropTypes.any,
  dataSize: PropTypes.any,
  selected: PropTypes.any
};
