import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { selectBusiness } from '../features/businessSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'

const BasketScreen = () => {
    const navigation = useNavigation()
    const business = useSelector(selectBusiness)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
        }, {})
        setGroupedItemsInBasket(groupedItems)
    }, [items])

    console.log(groupedItemsInBasket)

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#C78283] bg-white shadow-xs'>
            <View>
                <Text className='text-lg font-bold text-center'>My Invoice</Text>
                <Text className='text-center text-gray-400'>{business.title}</Text>
            </View>

            <TouchableOpacity onPress={navigation.goBack} className='rounded-full bg-gray absolute top-3 right-5'>
                <XCircleIcon color='#C78283' height={50} width={50} />
            </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
            <Image source ={{uri: 'https://links.papareact.com/wru',}} className='h-7 w-7 bg-gray-300 p-4 rounded-full'/>
            <Text className='flex-1'>Deliver in 50-75 min</Text>
            <TouchableOpacity>
                <Text className='text-[#C78283]'>Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                    <Text className='text-[#C78283]'>{items.length} x</Text>
                    <Image source={{uri: items[0]?.image}} className='h-12 w-12 rounded-full' />
                    <Text className='flex-1'>{items[0]?.title}</Text>
                    <Text className='text-gray-600'>${items[0]?.price}</Text>
                    <TouchableOpacity>
                        <Text className='text-[#C78283] text-xs' onPress={() => dispatch(removeFromBasket({id: key}))}>Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>

        <View className='p-5 bg-white mt-5 space-y-4'>
            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Subtotal</Text>
                <Text className='text-gray-400'>${parseFloat(basketTotal).toFixed(2)}</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Delivery Fee</Text>
                <Text className='text-gray-400'>${5.99}</Text>
            </View>
            <View className='flex-row justify-between'>
                <Text className='text-black font-extrabold'>Order Total</Text>
                <Text className='text-black font-extrabold'>${parseFloat(basketTotal + 5.99).toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('PreparingOrder')} className='bg-[#C78283] p-4 rounded-full flex-row items-center space-x-1'>
                <Text className='flex-1 text-white font-extrabold text-lg text-center' >Place Order</Text>
            </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen