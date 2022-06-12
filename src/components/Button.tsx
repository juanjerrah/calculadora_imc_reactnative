import React, { useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

type ButtonProps = {
    peso: string;
    handlePeso: (x: string)=> void;
    altura: string;
    handleAltura: (x: string)=> void;
    handleImc: (x:number) => void;
}

export default function Button({ peso, handlePeso, altura, handleAltura, handleImc }: ButtonProps) {


    const calculateImc = () => {
        if(peso <= '0' || altura <= '0'){
            alert("Digite os campos obrigatórios ou insira valores nos formatos corretos\n(PESO:Kg ALTURA:cm)")
        }else{
            let alt = parseInt(altura)/100
            let imcCalc = ((parseFloat(peso)) / (Math.pow(alt,2))).toFixed(1);
            handleImc(parseFloat(imcCalc));
            handlePeso('')
            handleAltura('')
        }
    }
  return (
    <View>
        <TouchableOpacity onPress={calculateImc} style={styles.button}>
            <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    button:{
        width: '45%',
        height: 50,
        backgroundColor: '#0000ff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,

    },
    buttonText:{
        color: '#fff',
        fontSize: 20
    }
})
