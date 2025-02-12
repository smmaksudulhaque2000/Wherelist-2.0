import Tools from "../assets/lotties/animation4.json";
import { useLottie } from "lottie-react";

const options = {
  animationData: Tools,
  autoplay: true,
};

const Lottie4 = () => {
  const { View } = useLottie(options);

  return <div className="w-96">{View}</div>;
};

export default Lottie4;
