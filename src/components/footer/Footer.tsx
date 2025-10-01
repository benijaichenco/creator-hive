import { useMemo } from "react";
import Text from "../text/Text";

const Footer = () => {
  const currYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer>
      <Text size="sm" fontWeight="light" color="var(--white)" align="center">
        All rights reserved to Creator Hive {currYear}©
      </Text>
    </footer>
  );
};

export default Footer;
