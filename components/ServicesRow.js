import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

const ServicesRow = ({id, title, image, price, description}) => {
    const [isPressed, setIsPressed] = useState(false)

  return (
    <>
        <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
            <View className='flex-row'>
                <View className='flex-1 pr-2'>
                    <Text className='text-lg mb-1'>{title}</Text>
                    <Text className='text-gray-400'>{description}</Text>
                    <Text>${price}</Text>
                </View>
                <View>
                    <Image source={{uri: image}} style={{borderWidth: 1, borderColor:"#F3F3F4"}} className='h-20 w-20 bg-gray-300 p-4'/>
                </View>
            </View>
        </TouchableOpacity>
    </>
  )
}

export default ServicesRow