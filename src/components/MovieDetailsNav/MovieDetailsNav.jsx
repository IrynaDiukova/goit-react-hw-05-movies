import PropTypes from 'prop-types';

import { List, Li, NavLink } from './MovieDetailsNav.styled';


const MovieDetailsNav = ({ from }) => {
  return (
    <List>
      <Li>
        <NavLink to={`cast`} state={{ from }}>
          Cast
        </NavLink>
      </Li>
      <Li>
        <NavLink to={`reviews`} state={{ from }}>
          Reviews
        </NavLink>
      </Li>
    </List>
  );
};

MovieDetailsNav.propTypes = {
  from: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieDetailsNav;