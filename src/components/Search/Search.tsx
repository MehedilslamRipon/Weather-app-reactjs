import React, { useState } from 'react';
import { CgSearch } from 'react-icons/cg';

import { getWeather } from '../../redux/reducer/weather-reducer';
import { useAppDispatch } from '../../types/type';

import './Search.scss';
const Search = () => {
   const dispatch = useAppDispatch();
   const [value, setValue] = useState('');
   const onHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   //  handle the search for a city in the weather app
   const onSearchCity = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // prevent the default form submission behavior
      if (!value) return;
      dispatch(getWeather(value));
   };

   return (
      <div className="search">
         <form className="search-form" onSubmit={onSearchCity}>
            <input
               required
               type="text"
               placeholder="Enter City"
               value={value}
               onChange={onHandlerChange}
            />
            <button>
               <CgSearch /> Search
            </button>
         </form>
      </div>
   );
};

export default Search;
