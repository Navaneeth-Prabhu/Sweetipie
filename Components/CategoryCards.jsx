import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCards = ({imgUrl,title}) => {
  return (
    <TouchableOpacity className="relative mr-2 ">
        <Image source={{uri:imgUrl}} className="h-20 w-20 rounded bg-pink-500" />

       
      <Text className="text-blue-400 absolute bottom-1 left-1">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCards