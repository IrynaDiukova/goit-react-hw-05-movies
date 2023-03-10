import { Box } from 'components/Box';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import moviesAPI from 'services/api-servises';
import Poster from 'components/Poster/Poster';
import GenresList from 'components/GenresList/GenresList';
import MovieDetailsNav from '../../components/MovieDetailsNav/MovieDetailsNav';
import { Div, Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const footerRef = useRef();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const executeScroll = () => footerRef.current.scrollIntoView();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movieDetails = await moviesAPI.getMovieDetails(Number(movieId));
        if (!movieDetails) {
          console.log('Oooh oh, there are no results.');
          return;
        }
        setMovie({ ...movieDetails });
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovie();
  }, [movieId]);

  const handleBackClick = () => navigate(backLinkHref);

  if (!movie) {
    return null;
  }

  const { original_title, overview, vote_average, genres, poster_path } = movie;

  return (
    <>
      <Button onClick={handleBackClick}>&larr; Go back</Button>

      <Box display="flex" mt={3} alignItems="flex-start">
        <Poster src={poster_path} width={250} alt={original_title} />

        <Box p={4}>
          <h2>{original_title}</h2>

          <Box as="p" mt={3}>
            User Score: {vote_average}
          </Box>

          <Box as="p" mt={3}>
            <b>Overview</b>
          </Box>
          <p>{overview}</p>

          <Box as="p" mt={3}>
            <b>Genres</b>
          </Box>

          {genres.length > 0 && <GenresList genres={genres} />}
        </Box>
      </Box>

      <Box
        as="footer"
        ref={footerRef}
        mt={3}
        borderTop="2px solid"
        borderBottom="2px solid"
      >
        <Div>
          <Box as="p" font-size="30" font-weight="500">Additional information</Box>
          <MovieDetailsNav from={backLinkHref} />
        </Div>
      </Box>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={{ executeScroll }} />
      </Suspense>
    </>
  );
};

export default MovieDetails;