import { StyleSheet } from "react-native";

export const globalColors = {
    primary: '#0B2447',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#78A083',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',
    background: '#fff',
  };

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.background,
    },
    primaryButton: {
        backgroundColor: globalColors.primary,
        padding: 20,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
      textAlign: 'center',
      backgroundColor : globalColors.dark,
      padding: 15,
      fontSize: 30,
      color: 'white',
      fontWeight: '300',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 400
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: globalColors.dark,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
        
    },
    text: {
        fontSize: 70,
        marginBottom: 10,
        color: globalColors.tertiary,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    }
    
});



