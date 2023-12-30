import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {

  const logo = (
    <Box
      component="img"
      src="/assets/logo.svg"
      sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Box sx={{ pb: 3 }}>
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
    </Box>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
