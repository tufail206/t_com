const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <header>Admin Dashboard</header>
      <nav>Sidebar Menu</nav>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
