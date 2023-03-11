import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-purple-600 flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-lg p-6 z-50 shadow-lg">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">35-45 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color={"purple"} indeterminate={true} />
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 9.6836368,
          longitude: 76.33653770000001,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0 "
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: 9.6836368, longitude: 76.33653770000001 }}
          title="Sweetipie"
          identifier="origin"
          pinColor="red"
        ></Marker>
      </MapView>
    </View>
  );
};

export default DeliveryScreen;
