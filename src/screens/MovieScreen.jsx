import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgSlider from '../components/movie/ImgSlider';
import NewDisney from '../components/movie/NewDisney';
import Viewers from '../components/movie/Viewers';

const MovieScreen = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('harry potter');


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=5f8dceef377e56a3ea9a630b1845ac18&language=en-US&query=${search}&page=1&include_adult=false`).then(res => res.json()).then(data => {
      setMovies(data.results);
    });


  }, [search]);

  return (
    <Container>
      <SearchBar>
        <Input placeholder="Search Movie" onChange={(e) => setSearch(e.target.value)} />
      </SearchBar>
      <ImgSlider movies={movies} />
      <Viewers movies={movies} />
      <NewDisney movies={movies} keyword={search} />
    </Container>
  )
}

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #1c1c1c;
  color: #fff;
  padding: 20px;
  border-radius: 10px;

  input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    padding: 0 20px;
    font-size: 20px;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    color: #1c1c1c;
    font-size: 20px;
  }
  `


const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default MovieScreen
