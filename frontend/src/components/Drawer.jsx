import '../styles/drawer.scss';

export default function Drawer({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="drawer">
        {children}
      </aside>
    </>
  );
}
