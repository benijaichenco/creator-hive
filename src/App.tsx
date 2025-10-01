import { useCallback, useEffect, useState } from "react";
import { Cursor } from "motion-plus/react";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Logo from "./components/logo/Logo";
import Header from "./components/header/Header";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkIfMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [checkIfMobile]);

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Cursor
          className="cursor"
          spring={{
            stiffness: 1000,
            damping: 40,
            mass: 0.3,
          }}
        />
      )}
      <main>
        <Logo />
        <Header />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
