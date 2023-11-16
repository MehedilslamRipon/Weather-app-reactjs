import React, { FC } from 'react';
import {
   BsFillCloudSleetFill,
   BsCloudSunFill,
   BsFillCloudsFill,
   BsFillCloudRainFill,
   BsCloudRain,
} from 'react-icons/bs';
import { FaCloudRain } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { AiFillApi } from 'react-icons/ai';
import { WiNightSnowWind, WiDaySunny } from 'react-icons/wi';

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
      case 'cloudy with clearings':
         return <BsCloudSunFill />;
      case 'snow':
         return <BsFillCloudSleetFill />;
      case 'light snow':
         return <WiNightSnowWind />;
      default:
         return <AiFillApi />;
   }
};

export default ChoiceIcon;
