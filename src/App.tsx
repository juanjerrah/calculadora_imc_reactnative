import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './components/Button';
import  Header  from './components/Header';
import Input from './components/Input';
import ResultSpace from './components/ResultSpace';

export default function App() {

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState<number>(0);


  return (
    <SafeAreaView style={styles.container}>
      <Header text='Calculadora IMC'/>
      <Input 
        peso={peso}
        handlePeso={setPeso}
        altura={altura}
        handleAltura={setAltura}
      />
      <Button
        peso={peso}
        handlePeso={setPeso}
        altura={altura}
        handleAltura={setAltura}
        handleImc={setImc}
      />
      {imc > 0 && 
        <ResultSpace
        imcValue={imc}
        />
      }
      
      <StatusBar backgroundColor='#0000ff' style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
  },
});
