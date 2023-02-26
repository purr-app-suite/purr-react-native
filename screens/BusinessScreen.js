import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useEffect, useLayoutEffect } from 'react'
import ServicesRow from '../components/ServicesRow'
import { useDispatch } from 'react-redux'
import { setBusiness } from '../features/businessSlice'
import BasketIcon from '../components/BasketIcon'

/**
 * Need to fix 'Nearby' text feild to be dynamic
 * yet to be connected to cloud
 */

const BusinessScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {params: {id, imgUrl, title, rating, category, address, phone, short_description, long_description, services, reviews, long, lat}} = useRoute()

    useEffect(() => {
        dispatch(setBusiness({id, imgUrl, title, rating, category, address, phone, short_description, long_description, services, reviews, long, lat}))
    }, [dispatch])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <>
        <BasketIcon/>
        <ScrollView>
            <View className='relative'>
                <Image source={{uri: imgUrl}} className='h-36 w-full bg-gray-300 p-4'/>
                <TouchableOpacity className='absolute top-14 left-5 p-2 bg-[#4C3549] rounded-full' onPress={navigation.goBack}>
                    <ArrowLeftIcon size={20} color='#F9D9DC'/>
                </TouchableOpacity>
            </View>
            <View className='bg-[#F3D9DC]'>
                <View className='px-4 pt-4'>
                    <Text className='font-bold text-lg text-[#4C3549]'>{title}</Text>
                    <View className='flex-row space-x-2 my-1'>
                        <View className='flex-row items-center space-x-1'> 
                            <MapPinIcon color='#C78283' opacity={0.4} size={22}/>
                            <Text className='text-ellipsis text-xs text-gray-800 pr-1'>Nearby . {address}</Text>
                        </View>

                    </View>
                    <Text className='text-xs text-gray-700 mt-2 mb-2'>{long_description}</Text>
                </View>
                <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
                    <View className='flex-row items-center space-x-1'>
                            <StarIcon color='#C78283' size={22}/>
                            <Text className='text-xs text-[#4C3549]'>
                                <Text className='text-[#4C3549] text-sm'>{rating}</Text>
                            </Text>
                        </View>
                    <Text className='text-sm text-[#4C3549]'>Reviews</Text>
                </TouchableOpacity>
            </View>
            <View className='pb-36'>
                <Text className='font-bold text-lg text-[#4C3549] px-4 pt-4'>Services</Text>
                {//servicesRows
                    services.map((service) => (
                        <ServicesRow key={service.id} id={service.id} title={service.title} image={service.imgUrl} price={service.price} description={service.description}/>
                    ))
                }
            </View>
        </ScrollView>
    </>
  )
}

export default BusinessScreen