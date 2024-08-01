import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PostImage as PostImageTypes } from "../../types";
import PostImage from "../PostImages/PostImage";

const LastFiveDaysImages : FC<{postImages?: PostImageTypes[]}> = ({postImages,}) =>{ 
   
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Last Five Day Images</Text>
            <ScrollView style={styles.content}>
                {
                    postImages?.map((postImage)=>{
                        return <PostImage {...postImage} key={`unique-key-${postImage.title}`}></PostImage>
                    })
                }                
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({

    container:{
        marginVertical: 8
    },
    title:{
        color: "#ffffff",
        fontSize: 16,
        marginBottom: 18
    },
    content:{
        paddingHorizontal: 24,
        paddingVertical: 20,
    }
});


export default LastFiveDaysImages;


