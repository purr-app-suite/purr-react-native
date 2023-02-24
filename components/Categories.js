import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

/** Categories component
 * This component displays a list of categories
 * Currently using static Demo Data
 */

const Categories = () => {
    const categories = [
        {id:"0", image:'https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80', name:'Nails'}, 
        {id:"1", image:'https://images.unsplash.com/photo-1588075438444-11018654f08d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80', name:'Hair'}, 
        {id:"2", image:'https://images.unsplash.com/photo-1628619546634-e356cb411b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80', name:'Makeup'}, 
        {id:"3", image:'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80', name:'Massage'}, 
        ]
  return (
    <ScrollView 
    contentContainerStyle={{paddingHorizontal:15, paddingTop: 10,}} 
    horizontal 
    showsHorizontalScrollIndicator={false}>

      {//Category Card fething data from sanity.io
        categories.map((category) => (
          <CategoryCard key={category.id} imgUrl={category.image} title={category.name}/>
        ))
      }
      
    </ScrollView>
  )
}

export default Categories