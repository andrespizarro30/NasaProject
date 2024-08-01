import React, { FC } from "react";
import {View, Text, StyleSheet,Button, Dimensions} from "react-native"

import { PostImage, RootStackParams } from "../../types";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>;

const PostImages: FC<PostImage> = ({title,date,url,explanation,hdurl}) =>{

    const {navigate} = useNavigation<PostImageNavigationProps>();

    const handleViewPress = () =>{
        navigate('Detail',{title,date, url, explanation, hdurl})
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.btnContainer}>
                <Button title="View" onPress={handleViewPress}></Button>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(18,39,113,255)',
        borderRadius: 20,
        marginBottom: 12,
        padding: 16
    },
    btnContainer:{
        alignItems: "flex-end"
    },
    title:{
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 12
    },
    date:{
        color: "#ffffff"
    }
});

export default PostImages;