import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
