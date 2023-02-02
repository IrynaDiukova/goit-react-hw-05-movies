import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  padding: 10px 30px;
`;

export const Li = styled.li`
  color: #000;
  font-size: 20px;
  list-style: none;
  padding: 8px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: cornflowerblue;
  text-transform: uppercase;
  font-weight: 500;
  &.active {
    color: red;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #7a3b2e;
  }
`;