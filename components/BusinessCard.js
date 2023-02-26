import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/solid'

/** Business Card Component
 * this component is used to display a business card
 * currently fetching information from the feauredrow component
 */

const BusinessCard = ({id, imgUrl, title, rating, category, address, phone, short_description, long_description, services, reviews, long, lat}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity className='bg-white w-64 mr-3 shadow rounded-lg' onPress={() => {navigation.navigate('Business', {id, imgUrl, title, rating, category, address, phone, short_description, long_description, services, reviews, long, lat} )}} >
        <Image source={{uri: imgUrl}} className='h-36 w-64 rounded-lg'/>
        <View className='px-3 pb-4 space-y-1'>
            <Text className='font-bold text-lg text-[#4C3549]'>{title}</Text>
            <View className='flex-row items-center space-x-1'>
                <StarIcon color='#C78283' size={15}/>
                <Text className='text-xs text-[#4C3549]'>
                    <Text className='text-[#4C3549]'>{rating}</Text>
                    . {category}
                </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
                <MapPinIcon color='#C78283' opacity={0.4} size={22}/>
                <Text className='text-ellipsis text-xs text-gray-600 pr-1'>Nearby . {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default BusinessCard

const styles = StyleSheet.create({})