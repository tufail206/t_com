const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <header>User Dashboard</header>
      <nav>Sidebar Menu</nav>
      <main>{children}</main>
    </div>
  );
};

export default UserLayout;
