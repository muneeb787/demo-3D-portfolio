import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width, color }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      context: {
        color: color // Set the color dynamically
      }
    },
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
