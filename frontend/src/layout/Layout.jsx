import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from '../components/Drawer';
import DrawerMenu from '../components/DrawerMenu';

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [drawerState, setDrawerState] = useState({
    open: false,
    type: null,
    payload: null,
  });

 const openDrawer = (type, payload = null) => {
    setDrawerState({
      open: true,
      type,
      payload,
    });
  };


const closeDrawer = () => {
    setDrawerState({
      open: false,
      type: null,
      payload: null,
    });
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          padding: '16px',
          zIndex: 60,
        }}
      >
        <button
        onClick={() => openDrawer('menu')}
        style={{
          fontSize: '24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
          ⋯
        </button>
      </header>

      <Drawer isOpen={drawerState.open} onClose={closeDrawer}>
  {drawerState.type === 'menu' && <DrawerMenu />}
  {drawerState.type === 'article' && (
    <DrawerArticle article={drawerState.payload} />
  )}
  {drawerState.type === 'project' && (
    <DrawerProject project={drawerState.payload} />
  )}
</Drawer>

      <main style={{ paddingTop: '80px' }}>
        <Outlet />
      </main>
    </>
  );
}
