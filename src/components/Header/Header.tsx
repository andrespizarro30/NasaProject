import React from "react";
import { View,Text, Image, StyleSheet } from "react-native";


const Header = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image style={styles.image} source={require('../../assets/nasa_logo.png')} />
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent: "space-between",
        marginTop: 10
    },
    leftContainer:{
        alignItems: "flex-start"
    },
    rightContainer:{
        alignItems: "flex-end"
    },
    title:{
        fontSize: 20,
        color: '#ffffff'
    },
    image:{
        width: 60,
        height: 60
    }
    
});

export default Header;