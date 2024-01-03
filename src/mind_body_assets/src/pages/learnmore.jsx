import { Helmet } from 'react-helmet-async';

import { LearnMoreView } from '../sections/learnmore/view';

// ----------------------------------------------------------------------

export default function LearnMorePage() {
  return (
    <>
      <Helmet>
        <title>Learn More</title>
      </Helmet>

      <LearnMoreView />
    </>
  );
}
