const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/roof-vector-illustration-installation-logo-design-template-natpoc628fe342.webp"
    />
  </a>
);
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;