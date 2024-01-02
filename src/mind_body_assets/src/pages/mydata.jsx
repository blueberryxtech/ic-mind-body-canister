import { Helmet } from 'react-helmet-async';

import { MyDataView } from '../sections/mydata/view';

// ----------------------------------------------------------------------

export default function MyDataPage() {
  return (
    <>
      <Helmet>
        <title>My Data</title>
      </Helmet>

      <MyDataView />
    </>
  );
}
