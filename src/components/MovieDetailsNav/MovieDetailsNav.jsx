import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from './MovieDetailsNav.styled';

const MovieDetailsNav = ({ from }) => {
  return (
    <List>
      <li>
        <Link to={`cast`} state={{ from }}>
          Cast
        </Link>
      </li>
      <li>
        <Link to={`reviews`} state={{ from }}>
          Reviews
        </Link>
      </li>
    </List>
  );
};

MovieDetailsNav.propTypes = {
  from: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieDetailsNav;