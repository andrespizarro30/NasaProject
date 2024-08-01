import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { PostImage, RootStackParams } from "../../types";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Header from "../../components/Header";

const Detail = () =>{

    const {params : {title, url, date, explanation, hdurl}} = useRoute<NativeStackScreenProps<RootStackParams,'Detail'>['route']>();

    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <Image source={{uri: url}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.explanationCont}>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)',  
    },
    content:{
        flex: 1,
        backgroundColor: "#2c449d",
        paddingHorizontal: 16,
        borderRadius: 30,
        marginVertical: 16,
        padding: 16,
    },
    title:{
        color: "#ffffff",
        fontSize: 20,
        marginVertical: 12,
        fontWeight: "bold"
    },
    date:{
        color: "#fff",
        fontSize: 16
    },
    image:{
        width: "100%",
        height: "40%",
        borderWidth: 2,
        borderColor: "#ffffff",
        borderRadius: 30
    },
    explanationCont:{
        marginVertical: 16
    },
    explanation:{
        color: "#ffffff",
        fontSize: 16
    }

});

export default Detail;