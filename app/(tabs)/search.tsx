import { SearchContext } from "@/components/Context";
import { MoviesCard } from "@/components/MoviesCard.tsx";
import { ScreenWrapper } from "@/components/ScreenWrapper";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

import { fetchPopularMovies } from "@/services/api";
import useFetch from "@/services/useFetch";

import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

const Search = () => {
  const [search, setSearch] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(
    () =>
      fetchPopularMovies({
        query: search,
      }),
    false
  );

  useEffect(() => {
    const fetchMovies = async () => {
      if (search.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    };

    fetchMovies();
  }, [search]);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <ScreenWrapper moviesLoading={moviesLoading} moviesError={moviesError}>
        <FlatList
          data={movies}
          renderItem={({ item }) => <MoviesCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "center",
            gap: 5,
            paddingRight: 5,
            marginBottom: 10,
          }}
          className="mt-2 pb-32"
          scrollEnabled={false}
        />
      </ScreenWrapper>
    </SearchContext.Provider>
  );
};

export default Search;
