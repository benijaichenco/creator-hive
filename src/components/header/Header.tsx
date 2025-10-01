import Text from "../text/Text";

import "./header.css";

const Header = () => {
  return (
    <header>
      <Text size="xl" fontWeight="bold" align="center" color="var(--white)">
        Pollinate your brand on TikTok
      </Text>
      <div className="subheader-container">
        <Text size="lg" fontWeight="light" align="center" color="var(--white)">
          Your unfair advantage starts here.
        </Text>
      </div>
    </header>
  );
};

export default Header;
