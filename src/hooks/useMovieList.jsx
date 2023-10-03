import React, { useContext, useEffect, useState } from 'react'
import { loadingContext } from '../contexts/LoadingContext/LoadingContext'
import { movieService } from '../services/movie';

export default function useMovieList() {
 const [loadingState,setLoadingState]=useContext(loadingContext)
 const [movieList, setMovieList] = useState([]);
  
  const fetchMovieList = async () => {
   setLoadingState({isLoading:true})
    const result = await movieService.fetchMovieListApi();
    setMovieList(result.data.content);
    setLoadingState({isLoading:false})
  };
  useEffect(() => {
   fetchMovieList();
 }, []);
  return movieList
}
