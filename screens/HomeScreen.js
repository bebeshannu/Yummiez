import { View, Text, SafeAreaView, Image, ViewComponent, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, MagnifyingGlassCircleIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';


const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown : false,
        });
    }, []);
  return (
    <SafeAreaView className=" bg-white  pt-7">
      
        {/* Header */}
        <View className=' flex-row pb-3 items-center mx-3 space-x-2'>
            <Image
            source={{
                uri: 'https://links.papareact.com/wru',
            }}
            className ="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className ='flex-1 '>
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location
                <ChevronDownIcon size={20} color="#00CCBB"/>    
                {/* <Text className="font-bold text-white text-xs">Deeeeeeeeeeeeeeeeee</Text> */}
                
                </Text>

            </View >
            <UserIcon size={33} color="#00CCBB" />
        </View>
        {/* Search */}
        <View className=" flex-row items-center space-x-2 pb-3 mx-3">
          <View className="flex-1 flex-row space-x-2 rounded-full bg-gray-200 p-1 ">
            <MagnifyingGlassCircleIcon  color='gray' size={25} />
            <TextInput  placeholder='Restaurants and cuisines'
            keyboardType='default'
            
            />
             {/* <Text className="font-bold text-gray-200 text-xs">Deeeeeeeeeeeeeeeeeee</Text>  */}
            
          </View>
          <AdjustmentsVerticalIcon color='#00CCBB' />
        </View>
        {/* Body */}
        <ScrollView className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        >
          {/* Categories */}
          <Categories/>

          {/* Featured rows */}
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default HomeScreen