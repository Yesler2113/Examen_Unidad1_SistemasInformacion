import { useState } from 'react';
import {Text, View} from 'react-native';

export const useColorsAle = () => {
    // const hexagecimal = '0123456789ABCDEF';
    var color = '#';

    const changeColor = () => {
        color = '#';
        for (let i = 0; i < 6; i++) {
            color += hexagecimal[Math.floor(Math.random() * 16)];
        }
    };

    // const colors = ['#FF0000', '#00FF00', '#0000FF', '#0000']
    // const [color, setColor] = useState('white');
    // const changeColor = () => {
    //     setColor(colors[Math.floor(Math.random() * colors.length)])
    // };
    return{
        changeColor,
        color
    }

};
