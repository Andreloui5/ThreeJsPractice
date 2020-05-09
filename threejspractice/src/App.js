import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Animation from "./Animation";
import "./styles.scss";

export default function App() {
  // Animation Value
  const [hovered, setHovered] = useState(false);

  // sets opacity for checkout box when hovered
  const props = useSpring({
    opacity: hovered ? 0.98 : 0.72,
  });

  return (
    <>
      {/* Main Animation Component */}
      <Animation />
    </>
  );
}
