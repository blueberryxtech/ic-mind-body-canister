import { Helmet } from 'react-helmet-async';

import { AppExchangeView } from '../sections/exchange/view';

// ----------------------------------------------------------------------

export default function AppExchangePage() {
  return (
    <>
      <Helmet>
        <title>Exchange</title>
      </Helmet>

      <AppExchangeView />
    </>
  );
}
