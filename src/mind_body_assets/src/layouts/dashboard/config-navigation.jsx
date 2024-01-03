import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`../../assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'My Data',
    path: '/mydata',
    icon: icon('ic_lock'),
  },
  {
    title: 'Connect',
    path: '/login',
    icon: icon('ic_user'),
  },
  {
    title: 'Learn more',
    path: '/learnmore',
    icon: icon('ic_user'),
  }
];

export default navConfig;
