import {Pressable, Text, View} from 'react-native';
import { globalStyles } from '../../config/app-theme';
import { useTemperature } from '../hooks/useTemperature';


export const TemperatureScreen = () => {
  const {Temperature, increase, decrease, color} = useTemperature();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Temperature App</Text>
      <Text onPress={color} style={globalStyles.text}>{Temperature}</Text>
      <Pressable
        style={globalStyles.row}>
        <Text onPress={decrease} style={globalStyles.buttonText}>-</Text>
        <Text onPress={increase} style={globalStyles.buttonText}>+</Text>
      </Pressable>
    </View>
    
  );
};
