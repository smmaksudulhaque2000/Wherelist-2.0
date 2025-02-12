import Tools from "../assets/lotties/animation3.json";
import { useLottie } from "lottie-react";

const options = {
  animationData: Tools,
  autoplay: true,
};

const Lottie3 = () => {
    const { View } = useLottie(options);

    return (
        <div className="w-96 p-5">
      {View}
    </div>
    );
};

export default Lottie3;