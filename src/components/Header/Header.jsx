import { Box } from 'components/Box';
import { NavItem, Headers } from './Header.styled';


const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
  return (
    <Headers as="header" boxShadow="0 0 8px rgba(0,0,0,0.3)">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Headers>
  );
};

export default Header;