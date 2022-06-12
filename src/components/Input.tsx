import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'

type InputProps = {
    peso: string;
    handlePeso: (x:string) => void;
    altura: string;
    handleAltura: (x:string) => void;
}

export default function Input({ altura,peso,handleAltura,handlePeso } : InputProps) {
    
    return (
    <View>
        <TextInput
            style={styles.inputs}
            placeholder='Digite sua Altura(Cm)'
            placeholderTextColor={'#000'}
            keyboardType='numeric'
            value={altura}
            onChangeText={x => handleAltura(x)}
        />
        <TextInput
            style={styles.inputs}
            placeholder='Digite seu Peso(kg)'
            placeholderTextColor={'#000'}
            keyboardType='numeric'
            value={peso}
            onChangeText={x => handlePeso(x)}
        />
        
    </View>
  )
}
const styles = StyleSheet.create({
    inputs:{
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#ccc',
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 15,
        marginBottom: 10,
    }
})
