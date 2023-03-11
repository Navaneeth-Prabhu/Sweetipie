import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestauantCard = ({
data  
}) => {
  const {  id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_discription,
    dishes,
    long,
    lat}=data
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=>{
      navigation.navigate('Restaurant',{
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
      })
    }}
    className = "mr-3 shadow bg-white"
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-md " />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon className="bg-green-500" size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-600">{rating}</Text>
            <Text>. {genre}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestauantCard;
