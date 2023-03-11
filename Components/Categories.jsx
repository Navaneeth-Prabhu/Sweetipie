import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCards from './CategoryCards'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{paddingHorizontal:15,paddingTop:10}}
    horizontal showsHorizontalScrollIndicator={false}
    >
      <CategoryCards imgUrl="https://Links.papareact.com/wru" title="testing 1"/>
      <CategoryCards imgUrl="https://Links.papareact.com/wru" title="testing 2"/>
      <CategoryCards imgUrl="https://Links.papareact.com/wru" title="testing 3"/>
      <CategoryCards imgUrl="https://Links.papareact.com/wru" title="testing 3"/>
      <CategoryCards imgUrl="https://Links.papareact.com/wru" title="testing 3"/>
      <CategoryCards imgUrl="https://Links.papareact.com/wru" title="testing 3"/>
      <CategoryCards imgUrl="https://Links.papareact.com/wru" title="testing 3"/>
      <CategoryCards imgUrl="https://Links.papareact.com/wru" title="testing 3"/>
      
    </ScrollView>
  )
}

export default Categories