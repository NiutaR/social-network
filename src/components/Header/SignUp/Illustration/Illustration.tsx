import React from 'react';
import myGossipers from '../../../../assets/img/gossipers.svg';
import { animated, useSpring } from 'react-spring';


const Illustration: React.FC = () => {
  const props = useSpring({
    width: "500px",
    height: "500px",
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.img
      src={myGossipers}
      alt="Illustration"
      style={props}
    />
  );
};

export default Illustration;
