import Text from "../text/Text";

import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Text size="xl" fontWeight="bold" align="center" color="var(--white)">
          Pollinate your
        </Text>
        <Text size="xl" fontWeight="bold" align="center" color="var(--white)">
          brand on TikTok
        </Text>
      </div>
      <div className="subheader-container">
        <Text size="lg" fontWeight="light" align="center" color="var(--white)">
          Your unfair advantage starts here.
        </Text>
      </div>
    </header>
  );
};

export default Header;
