/* import { StatusBar } from 'expo-status-bar'; */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://192.168.0.105:4000')
            .then(res => setMessage(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{message || 'Loading...'}</Text>
        </View>
    );
}


/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
} */

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
