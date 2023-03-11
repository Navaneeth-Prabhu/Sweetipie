import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation = useNavigation()
  return (
    // <SafeAreaView>

    <ImageBackground className = 'flex-1' source={{uri:"https://assets.epicurious.com/photos/5af313a832c9206db5f1a110/16:9/w_2560%2Cc_limit/no-recipe-required-pound-cake-30082016.jpg"}}>
        <View className='absolute h-full w-full z-20 justify-end p-4 space-y-4'>
            <View className='space-y-4'> 
                <Text className='text-white font-bold text-5xl'>Let you Favorite food find you</Text>
                <Text className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti laboriosam exercitationem incidunt minima modi </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')} className='bg-white rounded-lg p-4 flex-row justify-between mb-4'>

                <Text>Explore Now</Text>
                <ArrowRightIcon color={'black'}/>
            </TouchableOpacity>
            </View>

        </View>
    </ImageBackground>
    // </SafeAreaView>
  )
}

export default WelcomeScreen