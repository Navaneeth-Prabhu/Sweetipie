import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestauantCard from "./RestauantCard";

const dish = [
  {
    id: 1,
    imgUrl: "https://links.papareact.com/gn7",
    title: "Sushi",
    rating: 4.5,
    genre: "Japanese",
    address: "123 Main st",
    short_discription: "thiasdfj oasijdf iudf",
  },
  {
    id: 2,
    imgUrl:
      "https://img.taste.com.au/EGlmd_lA/taste/2017/02/hawaiian-salmon-poke-bowl-120997-1.jpg",
    title: "Sushi",
    rating: 4.5,
    genre: "Japanese",
    address: "123 Main st",
    short_discription: "thiasdfj oasijdf iudf",
  },
  {
    id: 3,
    imgUrl: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "Sushi",
    rating: 4.5,
    genre: "Japanese",
    address: "123 Main st",
    short_discription: "thiasdfj oasijdf iudf",
  },
  {
    id: 4,
    imgUrl:
      "https://i.pinimg.com/736x/95/4c/7b/954c7b5cd19e9782aa9baaad2cc28d3f.jpg",
    title: "Sushi",
    rating: 4.5,
    genre: "Japanese",
    address: "123 Main st",
    short_discription: "thiasdfj oasijdf iudf",
  },
  {
    id: 5,
    imgUrl:
      "https://i.pinimg.com/736x/95/4c/7b/954c7b5cd19e9782aa9baaad2cc28d3f.jpg",
    title: "Sushi",
    rating: 4.5,
    genre: "Japanese",
    address: "123 Main st",
    short_discription: "thiasdfj oasijdf iudf",
  },
  {
    id: 6,
    imgUrl:
      "https://i.pinimg.com/736x/95/4c/7b/954c7b5cd19e9782aa9baaad2cc28d3f.jpg",
    title: "Sushi",
    rating: 4.5,
    genre: "Japanese",
    address: "123 Main st",
    short_discription: "thiasdfj oasijdf iudf",
  },
  {
    id: 7,
    imgUrl:
      "https://i.pinimg.com/736x/95/4c/7b/954c7b5cd19e9782aa9baaad2cc28d3f.jpg",
    title: "Sushi",
    rating: 4.5,
    genre: "Japanese",
    address: "123 Main st",
    short_discription: "thiasdfj oasijdf iudf",
  },
  {
    id: 8,
    imgUrl:
      "https://i.pinimg.com/736x/95/4c/7b/954c7b5cd19e9782aa9baaad2cc28d3f.jpg",
    title: "Sushi",
    rating: 4.5,
    genre: "Japanese",
    address: "123 Main st",
    short_discription: "thiasdfj oasijdf iudf",
  },
  {
    id: 9,
    imgUrl:
      "https://i.pinimg.com/736x/95/4c/7b/954c7b5cd19e9782aa9baaad2cc28d3f.jpg",
    title: "Sushi",
    rating: 4.5,
    genre: "Japanese",
    address: "123 Main st",
    short_discription: "thiasdfj oasijdf iudf",
  },
];
renderItemComponent = () => {
  return (
    <RestauantCard
      id={123}
      imgUrl="https://links.papareact.com/gn7"
      title="Sushi"
      rating={4.5}
      genre="Japanese"
      address="123 Main st"
      short_discription="thiasdfj oasijdf iudf"
      dishes={[]}
      long={20}
      lat={0}
      className="shadow-red-500"
    ></RestauantCard>
  );
};

const FeaturedRow = ({ title, discription, featuredCategory }) => {
  return (
    <View className="bg-slate-100">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"blue"} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{discription}</Text>
      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        showsHorizontalScrollIndicator={false}
        data={dish}
        renderItem={(obj) => <RestauantCard data={obj.item} />}
      >
        <RestauantCard></RestauantCard>
        {/* <RestauantCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main st"
        short_discription="thiasdfj oasijdf iudf"
        dishes={[]}
        long={20}
        lat={0}
        ></RestauantCard>
        <RestauantCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main st"
        short_discription="thiasdfj oasijdf iudf"
        dishes={[]}
        long={20}
        lat={0}
        ></RestauantCard> */}
      </FlatList>
    </View>
  );
};

export default FeaturedRow;
