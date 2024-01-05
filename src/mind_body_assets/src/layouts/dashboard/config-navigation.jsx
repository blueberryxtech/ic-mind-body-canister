import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`../../assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Overview',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Web3 Login',
    path: '/login',
    icon: icon('ic_user'),
  },
  {
    title: 'My Data',
    path: '/mydata',
    icon: icon('ic_lock'),
  },
  {
    title: 'Exchange',
    path: '/exchange',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Learn more',
    path: '/learnmore',
    icon: icon('ic_user'),
  }
];

export default navConfig;
