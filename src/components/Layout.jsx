import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  Header  from './Header/Header';
import { Box } from './Box';

const Layout = () => {
  return (
    <Box>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;