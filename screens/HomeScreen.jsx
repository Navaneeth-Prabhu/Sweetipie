import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../Components/Categories";
import FeaturedRow from "../Components/FeaturedRow";
import defineCliConfig from '@sanity/client'
import CartButton from "../Components/CartButton";



// import {
//   UserIcon,
//   ChevronDownIcon,
//   SearchIcon,
//   AdjustmentsVerticalIcon,
// } from "react-native-heroicons";

export default function HomeScreen() {
  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  // useEffect(()=>{
  //   defineCliConfig.fetch()
  // })
  return (
    <>
      <CartButton/>
    <SafeAreaView className="bg-white">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://Links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-500 p-4 rounded-full"
          ></Image>
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-ts">
              Delivery Now
            </Text>
            <Text className="font-bold text-xl">
              Current Locaiton
              {/* <ChevronDownIcon size={20} color="#00CCBB"/> */}
            </Text>
          </View>
        </View>
        {/* search  */}
        <View className='px-4 pb-2 mx-4 flex-col space-x-2'>
          <View className="flex space-x-2 bg-red-100 p-3">
            <TextInput placeholder="search" keyboardType="default"></TextInput>
          </View>
        </View>

        {/* body  */}

        <ScrollView>
            {/* categories  */}
            <Categories/>

            {/* Featured rows */}
            <FeaturedRow id="1"  title="Featured" discription="Paid placements from out partners" featuredCategory="featured"></FeaturedRow>
            {/* Featured rows */}
            <FeaturedRow id="2" title="Featured" discription="Paid placements from out partners" featuredCategory="featured"></FeaturedRow>
            {/* Featured rows */}
            <FeaturedRow id="3" title="Featured" discription="Paid placements from out partners" featuredCategory="featured"></FeaturedRow>
            {/* Featured rows */}
            <FeaturedRow id="4" title="Featured" discription="Paid placements from out partners" featuredCategory="featured"></FeaturedRow>

        </ScrollView>
     
    </SafeAreaView>
    </>
  );
}
