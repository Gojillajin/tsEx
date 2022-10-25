import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  
  const [count, setCount] = useState(0);

  let onCount = function onCount() : void {
    setCount(count + 1);
  }



  return (
    <View style={styles.container}>
      <Text style={styles.red}>{ count}</Text>
      <View style={styles.red}>
        <Button title="다시 생성" onPress={onCount} />
      </View>
      <View style={styles.red} >
        <Button title='카운트 값 초기화' onPress={() => {setCount(0)}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red : {
    padding : 5,
  },

});
