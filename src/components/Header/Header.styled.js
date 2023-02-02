import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Headers = styled.header`
  top: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(
    359deg,
    rgba(239, 240, 36, 0.8323529240797882) 38%,
    rgba(58, 120, 242, 0.8323529240797882) 64%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavItem = styled(NavLink)`
  color: #333;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  padding: 16px;
  user-select: none;
  &.active {
    color: fuchsia;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;