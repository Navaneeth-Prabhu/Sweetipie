import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  StarIcon,
  ArrowSmallLeftIcon,
  MapPinIcon,
  PlusIcon,
  MinusIcon,
} from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from "../Redux/cartSlice";
import CartButton from "../Components/CartButton";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_discription,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();
  const [pressed, setpressed] = useState(false);
  const dispatch = useDispatch();

  const items = useSelector((state) => selectCartItemsWithId(state, id));

  const addItems = () => {
    dispatch(addToCart({ id, title, imgUrl }));
  };

  const removeItem = () => {
    if (!items.length > 0) return;
    dispatch(removeFromCart({ id }));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    // <SafeAreaView className="">
    <>
  
    <CartButton/>

  

    <ScrollView>
      <View>
        <Image source={{ uri: imgUrl }} className="h-80 w-full " />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-10 left-5 bg-white blur-xl rounded-full p-2"
        >
          <ArrowSmallLeftIcon color={"black"} />
        </TouchableOpacity>
      </View>
      <View className="bg-white -mt-10 rounded-t-2xl">
        {/* <View className='bg-white  rounded-t-2xl'> */}
        <View className="px-4 pt-4 ">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-3 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color={"green"} opacity={0.5} size={22} />
              <Text>{rating}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon color={"gray"} opacity={0.5} size={22} />
              <Text>{address}</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => setpressed(!pressed)}>
            <Text>add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* {
        pressed && (
            <View>
                <Text>halo</Text>
            </View>
        )
      } */}
      <View>
        <View className="flex flex-row  items-center justify-end -mt-4  mr-3">
          {items.length ? (
            <View className="flex flex-row space-x-3 w-28 h-10 items-center ">
              <View className="bg-red-500 p-1 rounded-lg">
              <TouchableOpacity onPress={removeItem}>
                  <MinusIcon color={"black"} size={30} />
                </TouchableOpacity>
              </View>
              <Text className="text-lg font-medium">{items.length}</Text>
              <View className="bg-red-500 p-1 rounded-lg">
                
                <TouchableOpacity onPress={addItems}>
                  <PlusIcon color={"black"} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
              <TouchableOpacity className="" onPress={addItems}>
            <View className="w-28 h-10 bg-white border border-rose-600 flex justify-center items-center rounded-lg">
                <Text className="font-medium text-lg text-center">Add</Text>
            </View>
              </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>

    </>
    // </SafeAreaView>
  );
};

export default RestaurantScreen;
