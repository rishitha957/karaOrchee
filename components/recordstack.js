import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecordScreen from './recordscreen';
import AudioRecordScreen from './audiorecordscreen';

const Stack = createNativeStackNavigator();

function RecordStack() {
  return (
    <Stack.Navigator initialRouteName='Library' screenOptions={{headerLargeTitleShadowVisible:false}}>
      <Stack.Screen name="Library" component={RecordScreen} />
      <Stack.Screen name="Record" component={AudioRecordScreen} />
    </Stack.Navigator>
  );
}

export default RecordStack;
