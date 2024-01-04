import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from '../utils/format-number';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, footnote, subtitle, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      justifyContent="center"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}

      <Stack spacing={0.5}>
        <Typography variant="h4" sx={{ color: 'black'}}>{fShortenNumber(total)}</Typography>
        <Typography variant="footnote" sx={{ color: 'black' }}>{footnote}</Typography>
        <Typography variant="h4" sx={{ color: 'black' }}> {title}</Typography>
        <Typography variant="subtitle" sx={{ color: 'text.disabled' }}>{subtitle}</Typography>
      </Stack>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  total: PropTypes.number,
};
