import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function Header(){
    return (
        <View style={styles.header}>
                <Image 
                source={require('../img/logo.png')}
                style={styles.logo}
                />
            <TouchableOpacity>
                <Image 
                source={require('../img/like.png')}
                style={styles.like}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                source={require('../img/send.png')}
                style={styles.send}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 2
    },
    send: {
        width: 23,
        height: 23,
    },
    like: {
        width: 23,
        height: 23,
        marginLeft: 200
    }
})