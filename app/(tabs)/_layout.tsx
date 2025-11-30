import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon = ({ name, icon, focused }) => {
    if (focused) {
        return (
            <ImageBackground source={images.highlight} className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'>

                <Image source={icon} tintColor='#151312' className='size-5' />
                <Text className='text-secondary text-base font-semibold ml-2'>{name}</Text>

            </ImageBackground>
        )
    }

    return (
        <View className='justify-center items-center mt-4 rounded-full size-full'>
            <Image source={icon} tintColor={"#A8B5Db"} className='size-5' />
        </View>
    )

}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "#0F0D23",
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: "absolute",
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "#0F0D23",
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon name={'Home'} icon={icons.home} focused={focused} />
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    headerShown: false, title: 'Profile', tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon name={'Profile'} icon={icons.person} focused={focused} />
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    headerShown: false, title: 'Saved', tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon name={'Saved'} icon={icons.save} focused={focused} />
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    headerShown: false, title: 'Search', tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon name={'Search'} icon={icons.search} focused={focused} />
                        </>
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout