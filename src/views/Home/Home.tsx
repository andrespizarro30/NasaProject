import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import {format, sub} from "date-fns";

import Header from "./../../components/Header";
import TodaysImage from './../../components/TodaysImage';
import LastFiveDaysImages from "./../../components/LastFiveDaysImages";
import fecthApi from './../../utils/fetch';
import { PostImage } from "../../types";
import { fi } from "date-fns/locale";

const Home = ()=>{

    const [todaysImage, setTodaysImage] = useState<PostImage>({});
    const [fiveDaysAgoImages, setFiveDaysAgoImages] = useState<PostImage[]>([]);

    useEffect(()=>{

        const loadTodaysImage = async ()=>{

            try{
                const todaysImage = await fecthApi();
                setTodaysImage(todaysImage);
            }catch(error){
                console.error("error..." + error);
                setTodaysImage({});
            }

        };

        const loadLastFiveDayImages = async () =>{
            try{
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date, {days: 30}),'yyyy-MM-dd') 

                const lastFiveDaysImagesResponse = await fecthApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`);

                setFiveDaysAgoImages(lastFiveDaysImagesResponse);                               
                
            }catch(error){
                console.error(error);
                setFiveDaysAgoImages([]);
            }
        };

        loadTodaysImage().catch(null);
        loadLastFiveDayImages().catch(null);
    },[]);

    //console.log(todaysImage);
    // console.log("///////////////////")
    // console.log(fiveDaysAgoImages);
    // console.log("///////////////////")

    return (
        <View>
            <View style={styles.container}>
                <Header></Header>
                <TodaysImage {...todaysImage}></TodaysImage>
                {
                    fiveDaysAgoImages.length>0 ?
                    <LastFiveDaysImages postImages={fiveDaysAgoImages}></LastFiveDaysImages> :
                    <Text>Loading...</Text>
                }                
            </View>
        </View>
        
    );

};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)'
    }
});

export default Home;
