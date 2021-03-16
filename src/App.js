import React, { useState } from "react";
import MojsExample from "./MojsExample";
import Button from "./Button";
import "./styles.css";

export default function App() {
  const [slowMo, setSlowMo] = useState(false);
  return (
    <>
      <MojsExample duration={slowMo ? 6000 : 1500} />
      <footer>
        <p>Control from outside using props</p>
        <Button
          onClick={() => {
            setSlowMo(!slowMo);
          }}
        >
          {slowMo ? "Default Mo" : "Slow Mo"}
        </Button>
      </footer>
    </>
  );
}
