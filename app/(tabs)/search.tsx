import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/Services/api';
import useFetch from "@/Services/useFetch";
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => fetchMovies(searchQuery), false)

    return (
        <View className='flex-1 bg-primary'>
            <Image source={images.bg} className='absolute w-full z-0' />
            <FlatList
                data={movies?.results}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 16,
                    marginVertical: 16,
                    width: '95%',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
                className="mt-2 pb-32"
                ListHeaderComponent={
                    <>
                        <View className='w-[90%] mx-auto flex-col gap-10 justify-center mt-20 items-center'>
                            <Image source={icons.logo} className='w-12 h-10' />
                            <SearchBar onPress={() => { }} placeholder="Search for a movie" value={searchQuery} onChangeText={(text: string) => setSearchQuery(text)} />
                            {
                                moviesLoading && (
                                    <ActivityIndicator size={'large'} color='#0000ff' />
                                )
                            }
                            {moviesError && (
                                <Text>Error Loading movies</Text>
                            )}
                            {!moviesError && !moviesLoading && searchQuery.trim() && movies?.results.length > 0 && (
                                <Text className='text-xl text-white font-bold self-start'>Search Results For {''}
                                    <Text className='text-accent'>{searchQuery}</Text>
                                </Text>
                            )}

                        </View>
                    </>
                }
            />


        </View>
    )
}

export default Search