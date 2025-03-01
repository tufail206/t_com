const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <header>Authenticated User Navbar</header>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
