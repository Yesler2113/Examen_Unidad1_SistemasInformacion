import {Text, View} from 'react-native';
import { TemperatureScreen } from './presentation/screens/TemperatureScreen';
import { globalStyles } from './config/app-theme';
import { ColorsScreens } from './presentation/screens/ColorsScreens';


export const App = () => {
  return (
    <View style={globalStyles.container}>
       <ColorsScreens/> 
      {/* <TemperatureScreen/> */}
    </View>
  );
};

export default App;
