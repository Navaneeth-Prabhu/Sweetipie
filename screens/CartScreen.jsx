import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCartItems } from "../Redux/cartSlice";
import { ArrowLeftIcon, ArrowRightIcon, MinusIcon, PlusIcon } from "react-native-heroicons/outline";

const CartScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectCartItems);
  const [groupedItemsInCart, setgroupedItemsInCart] = useState([]);
//   const cartTotal = useSelector(cartTotal)
  const dispatch = useDispatch()

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setgroupedItemsInCart(groupedItems);
  }, [items]);

  return (
    <>
  

    <SafeAreaView className="flex-1 bg-gray-100 ">
      <View className="bg-red-200">
        <View className="bg-green-200 flex-row p-5 space-x-4">
          <TouchableOpacity onPress={navigation.goBack}>
            <ArrowLeftIcon color={"black"} />
          </TouchableOpacity>
          <Text className="text-center">asdf</Text>
        </View>
      </View>
      <ScrollView>
        <View className="bg-white p-2 mt-5 rounded-xl divide-y divide-gray-300">
          {Object.entries(groupedItemsInCart).map(([key, items]) => (
            <View
              key={key}
              className=" p-4 flex-row items-center space-x-5 py-2 px-5"
            >
              {/* <Text>{items.length}</Text> */}
              <Image
                source={{ uri: items[0]?.imgUrl }}
                className="w-12 h-12 rounded-xl"
              />
              <Text className="flex-1">{items[0]?.title}</Text>
             
                <View className="flex  flex-row space-x-3 w-28 h-10 items-center ">
                  <View className=" p rounded-lg border">
                    <TouchableOpacity onPress={()=>dispatch(removeFromCart({id:items[0]?.id}))}>
                      <MinusIcon color={"black"} size={30} />
                    </TouchableOpacity>
                  </View>
                  <Text className=" font-medium">{items.length}</Text>
                  <View className="  rounded-lg">
                    <TouchableOpacity onPress={()=>dispatch(addToCart({id:items[0]?.id,imgUrl:items[0]?.imgUrl,title:items[0]?.title}))}>
                    <PlusIcon color={"black"} size={30} />
                    </TouchableOpacity>
                </View>
                </View>
              
                <Text className="flex-1">{items[0]?.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View className='p-5 bg-white  space-y-4'>
        <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>520</Text>
        </View>
        <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>10</Text>
        </View>
        <View className='flex-row justify-between'>
            <Text>Order Total</Text>
            <Text className='font-extrabold'>520</Text>
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate("PreparingOrderScreen")} className='bg-black rounded-lg p-4'>
            <Text className="text-center text-white font-extrabold">Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
 
    </>
  );
};

export default CartScreen;
