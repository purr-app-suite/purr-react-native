import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

    if ( items.length === 0 ) return null

  return (
    <View className='absolute bottom-0 w-full z-50 p-4'>
        <TouchableOpacity className='bg-[#4C3549] p-4 rounded-full flex-row items-center space-x-1' onPress={() => navigation.navigate('Basket')}>
            <Text className='text-white font-extrabold text-lg bg-[#4C3549] py-1 px-2'>{items.length}</Text>
            <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Order</Text>
            <Text className='text-lg text-white font-extrabold'>${parseFloat(basketTotal).toFixed(2)}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon