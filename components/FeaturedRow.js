import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BusinessCard from './BusinessCard'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import businesses from '../data/demodata.json'

/** FeaturedRow component
 * This component is used to display a row of BusinessCards
 * Currently fetching demo data from the demodata.json file and passing to the BusinessCard component
 */

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#4C3549'/>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15,}} showsHorizontalScrollIndicator={false} className='pt-2'>
        {
            businesses.map((business) => (
                <BusinessCard key={business.id} id={business.id} imgUrl={business.imgUrl} title={business.title} rating={business.rating} category={business.category} address={business.address} phone={business.phone} short_description={business.short_description} long_description={business.long_description} services={business.services} reviews={business.reviews} long={business.long} lat={business.lat}/>
            ))
        }
      </ScrollView>
    </View>
  )
}

export default FeaturedRow