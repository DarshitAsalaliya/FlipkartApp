import React, { useState, useEffect } from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, ScrollView, Constants, FlatList, Image, RefreshControl, ToastAndroid, VirtualizedList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import axios from 'axios';
import { SliderBox } from "react-native-image-slider-box";

const formData = new FormData();
formData.append('APISECRET', '6d5W6Hab-3fg3-414a-a192-be5Vwam11bf6');

const formDataForMaleProduct = new FormData();
formDataForMaleProduct.append('APISECRET', '6d5W6Hab-3fg3-414a-a192-be5Vwam11bf6');
formDataForMaleProduct.append('GenderId', '0');

const ShopScreen = ({ navigation }) => {

    // Category

    const [category, setCategory] = useState([]);

    // Male Products

    const [maleProduct, setMaleProduct] = useState([]);

    // Female Products

    const [femaleProduct, setFemaleProduct] = useState([]);

    const [sliderImages, setSliderImages] = useState(["https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/TT_Nord_PC_1500x600._CB645073663_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/Feb/SSW/Super_saver_brands/1500PC._CB658944950_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg",]);


    // Category Highlights Flatlist

    const categoryHighLightsData = [
        {
            id: 1,
            image: 'https://images-na.ssl-images-amazon.com/images/I/61qFiU2o-YS._SL1000_.jpg',
        },
        {
            id: 2,
            image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC-Accessories/New-Launches/boAt/Ingress/Date/Revision/Set-1/Set-2/Set-3/Immportal_200_670X645.jpg',
        },
        {
            id: 3,
            image: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Noise/Assist/Banners/Update/Noise_670x645_1.jpg',
        },
    ];

    // Category List

    const CategoryHighLightsItem = ({ title }) => (
        <View style={{ padding: 5 }}>
            <Image
                style={{ width: 120, height: 120, borderRadius: 10 }}
                source={{
                    uri: title,
                }}
            />
        </View>
    );

    const categoryHighLightsRenderItem = ({ item }) => (
        <CategoryHighLightsItem title={item.image} />
    );

    // Male Product List 

    const MaleProductHighLightsItem = ({ title }) => (
        <View style={{ padding: 5 }}>
            <Image
                style={{ width: 200, height: 200, borderRadius: 5 }}
                source={{
                    uri: title,
                }}
            />
        </View>
    );

    const maleProductHighLightsRenderItem = ({ item }) => (
        <MaleProductHighLightsItem title={item.ImageLink} />
    );

    // Show Toast Message

    const showToast = () => {
        ToastAndroid.show("Refresh Data... !", ToastAndroid.SHORT);
    };

    // Pull Refresh

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        showToast();
        wait(500).then(() => { setRefreshing(false) });
    }, []);

    // Call API Data

    useEffect(() => {
        sendRequest();
        sendMaleProductRequest();
    });

    const sendRequest = async () => {
        try {
            const resp = await axios({
                method: 'POST',
                url: 'https://statusforever.gharkamart.in/EClasses/apiAllGiftCategoryList.php',
                data: formData,
            });
            setCategory(resp.data.info);
        } catch (err) {
            // console.warn(err);
        }
    }

    const sendMaleProductRequest = async () => {
        try {
            const resp = await axios({
                method: 'POST',
                url: 'https://statusforever.gharkamart.in/EClasses/apiGenderWiseProductList.php',
                data: formDataForMaleProduct,
            });
            setMaleProduct(resp.data.info);

        } catch (err) {
            // console.warn(err);
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "flex-start" }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        >

            <View style={{ backgroundColor: '#2874F0' }}>
                <Searchbar
                    placeholder="Search for Products, Brands and More"
                    style={{ marginBottom: 8, margin: 10, height: 40 }}
                    inputStyle={{ fontSize: 15 }}
                />
            </View>


            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                    category.map((item, index) =>
                        <View key={item.CategoryId} style={{ padding: 5, alignItems: "center" }}>
                            <Avatar.Image size={50} source={{ uri: item.ImageLink }} />
                            <Text style={{ fontSize: 8 }}>{item.CategoryName}</Text>
                        </View>
                    )
                }
            </ScrollView>



            <SliderBox images={sliderImages}
                onCurrentImagePressed={index => alert(index + " Index Pressed..")}
                inactiveDotColor="#90A4AE"
                circleLoop
            />

            <FlatList
                horizontal
                data={categoryHighLightsData}
                renderItem={categoryHighLightsRenderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ flex: 1, justifyContent: "space-between", flexWrap: "nowrap" }}
            />

            <FlatList
                horizontal
                data={maleProduct}
                renderItem={maleProductHighLightsRenderItem}
                keyExtractor={item => item.ProductId}
                contentContainerStyle={{ justifyContent: "space-between", flexWrap: "nowrap" }}

            />


        </ScrollView>
    );
};

export default ShopScreen;