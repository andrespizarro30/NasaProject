import React, { FC } from "react";
import { View,Text,StyleSheet, Image, Button, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PostImage, RootStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>;

const TodaysImage: FC<PostImage> = ({title, date, url, explanation, hdurl}) =>{

    const {navigate} = useNavigation<PostImageNavigationProps>();

    const handleViewPress = () =>{
        navigate('Detail',{title,date, url, explanation, hdurl})
    };

    return(
        <View style={styles.container}>
            {
                url != null ?
                <Image source={{uri: url}} style={styles.image}></Image> :
                <Text>loading...</Text>
            }
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.containerBtn}>
                <Button title="View" onPress={handleViewPress}></Button>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#2c449d",
        paddingHorizontal: 16,
        borderRadius: 30,
        marginVertical: 16,
        padding: 16,
    },
    image:{
        width: Dimensions.get("screen").width * 0.8,
        height: 190,
        borderWidth: 2,
        borderColor: "#ffffff",
        borderRadius: 30
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
    containerBtn:{
        alignItems: "flex-end"
    }
});


export default TodaysImage;
