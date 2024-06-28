import {Pressable, Text, View} from 'react-native';
import { useColorsAle } from '../hooks/useColorsAle';
import { globalStyles } from '../../config/app-theme';

export const ColorsScreens = () => {
    const { color, changeColor} = useColorsAle();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable onPress={changeColor}>
        <Text style={globalStyles.buttonText}>Cambiar color</Text>
      </Pressable>
    </View>
  );
};
