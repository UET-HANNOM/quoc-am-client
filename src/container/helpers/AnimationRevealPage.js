import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const LazyAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      initial={{ x: !inView && "-100%" }}
      animate={{
        x: inView && 0,
        transitionEnd: {
          x: inView && 0,
        },
      }}
      transition={{ type: "spring", damping: 100 }}
      className="cs-my-animation"
      ref={ref}
    >
      {children}
    </motion.section>
  );
};
function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];
  const childrenWithAnimation = children.map((child, i) => {
    return <LazyAnimation key={i}>{child}</LazyAnimation>;
  });
  return <>{childrenWithAnimation}</>;
}
const MyAnimation = (props) => <AnimationReveal {...props} />;
export default MyAnimation;
