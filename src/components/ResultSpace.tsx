import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useDynamicStyle } from 'react-native-dynamic-styles'

type ResultSpaceProps = {
    imcValue: number;
}

export default function ResultSpace({imcValue}: ResultSpaceProps) {

    const style = useDynamicStyle(()=>({
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 10,
        borderRadius: 10,
        backgroundColor: imcValue < 17 || imcValue >= 30
                            ? 'red' 
                            : imcValue >= 17 && imcValue < 18.5 || imcValue >= 25 && imcValue < 30
                                ? 'yellow'
                                : imcValue >= 18.5 && imcValue < 25
                                    ? 'green' : 'grey'                                 
    }),[imcValue])

  return (
    <View style={style}>
        <Text style={styles.resulttxt}>
            Resultado:
        </Text>
        <Text style={styles.textResult}>
            Seu IMC é: <Text style={{fontWeight: 'bold'}}>{imcValue}</Text>
        </Text>
        { (imcValue < 17)
            ? <Text style={styles.textResult}>Você está MUITO ABAIXO do Peso</Text>
            : (imcValue >= 17 && imcValue < 18.5)
                ? <Text style={styles.textResult}>Você está ABAIXO do Peso</Text>
                : (imcValue >= 18.5 && imcValue < 25)
                    ?<Text style={styles.textResult}>Você está no peso NORMAL</Text>
                    : (imcValue >= 25 && imcValue < 30)
                        ? <Text style={styles.textResult}>Você está com SOBREPESO</Text>
                        : (imcValue >= 30 && imcValue < 35)
                            ? <Text style={styles.textResult}>Você está em OBESIDADE GRAU I</Text>
                            : (imcValue >= 35 && imcValue < 40)
                                ? <Text style={styles.textResult}>Você está Em OBESIDADE GRAU II</Text>
                                : (imcValue >= 40) && <Text style={styles.textResult}>Você está em OBESIDADE GRAU III</Text>
        }
    </View>
  )
  
}
const styles = StyleSheet.create({
    resulttxt:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    textResult:{
        fontSize: 20,
    }
})




