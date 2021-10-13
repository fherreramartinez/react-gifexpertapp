import React from 'react';
import ReactDOM from 'react-dom';
import { GifExpertApp } from './GifExpertApp';
import './index.css';


const categories = ['One Punch'];

ReactDOM.render(
    
    <GifExpertApp defaultCategories = { categories } /> ,
  document.getElementById('root')
);


