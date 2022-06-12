import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

type HeaderProps = {
    text: string;
}

export default function Header({text} : HeaderProps) {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        top: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#0000ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    headerText:{
        fontSize: 30,
        fontFamily:'',
        color: '#fff',
    }
})