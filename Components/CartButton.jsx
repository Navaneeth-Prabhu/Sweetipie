import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectCartItems } from "../Redux/cartSlice";

const CartButton = () => {
  const items = useSelector(selectCartItems);
  const navigation = useNavigation();
  // const basketTotal = useSelector(selectBasketTotal)
  return (
    <>
      {items.length ? (
        <View className="absolute bottom-8 w-full z-50 ">
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            className="mx-5 bg-black p-2 rounded-lg flex flex-row items-center space-x-2"
          >
            <Text className="text-white bg-slate-900 py-2 px-4 text-lg">
              {items.length}
            </Text>
            <Text className="text-white text-center text-lg font-bold flex-1">
              View Cart
            </Text>
            <Text className="text-white bg-slate-900 py-2 px-4 text-lg">
              {items.length}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

export default CartButton;
