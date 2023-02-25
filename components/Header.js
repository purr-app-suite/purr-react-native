import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline'
import { UserIcon } from 'react-native-heroicons/solid'

/** Header Component
 * This Component is used to display the header
 * Currently has a search bar and a user icon and location but its all static and does nothing
 */

//new info

const Header = () => {
  return (
    <View>
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
            <View className='flex-1'>
                <Text className='font-bold text-[#D7BEA8] text-xs'>Looking near..</Text>
                <Text className='font-bold text-[#F3D9DC] text-xl'>Current Location
                    <ChevronDownIcon size={20} color="#C78283" />
                </Text>
            </View>
            <UserIcon size={35} color="#C78283"/>
        </View>
        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-full'>
                <MagnifyingGlassIcon color='gray' size={20}/>
                <TextInput placeholder='Restaurants & Cuisines' keyboardType='default'/>
            </View>
            <AdjustmentsVerticalIcon color='#B49286'/>
        </View>
    </View>

  )
}

export default Header