import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import { UserIcon } from 'react-native-heroicons/solid'
import Header from '../components/Header'

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView className="bg-[#4C3549] pt-5">
        <Header/>
        {/* Body */}
        <ScrollView className='bg-[#F3D9DC]' contentContainerStyle={{paddingBottom: 100,}}>
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen