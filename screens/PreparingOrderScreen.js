import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useSelector } from 'react-redux'
import { selectBusiness } from '../features/businessSlice'
import { useNavigation } from '@react-navigation/core'

const PreparingOrderScreen = () => {
    const navigation = useNavigation()
    const business = useSelector(selectBusiness)

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000) //timer currently set up for 3 seconds but needs to be set to dynamically change based on weather the business accepts the order
    })
  return (
    <SafeAreaView className='bg-[#BBDEF7] flex-1 justify-center items-center'>
      <Animatable.Image source={require('../assets/nailGif.gif')} animation="slideInUp" iterationCount={1} className='h-96 w-96' />
      <Animatable.Text animation='slideInUp' iterationCount={1} className='text-lg my-10 text-white font-bold text-center'>Waiting for {business.title} to accept your order!</Animatable.Text>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen