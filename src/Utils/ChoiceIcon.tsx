import { FC } from 'react';
import {
   BsCloudSunFill,
   BsFillCloudsFill,
   BsFillCloudRainFill,
   BsCloudRain,
} from 'react-icons/bs';
import { FaCloudRain } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { AiFillApi } from 'react-icons/ai';
import { WiDaySunny } from 'react-icons/wi';
import { GiFog } from "react-icons/gi";
import { RiHazeLine } from "react-icons/ri";
import { IoCloudSharp } from "react-icons/io5";

interface IPropsType {
   value: string;
}
const ChoiceIcon: FC<IPropsType> = ({ value }) => {
   switch (value) {
      case 'clouds':
         return <BsCloudRain />;
      case 'clear sky':
         return <WiDaySunny />;
      case 'light rain':
         return <FaCloudRain />;
      case 'drizzle':
         return <BsFillCloudRainFill />;
      case 'broken clouds':
         return <BsCloudSunFill />;
      case 'few clouds':
         return <BsCloudSunFill />;
      case 'sunny':
         return <FiSun />;
      case 'overcast clouds':
         return <BsFillCloudsFill />;
      case 'scattered clouds':
         return <IoCloudSharp />;
      case 'cloudy with clearings':
         return <BsCloudSunFill />;
      case 'fog':
         return <GiFog />;
      case 'haze':
         return <RiHazeLine />;
      default:
         return <AiFillApi />;
   }
};

export default ChoiceIcon;
