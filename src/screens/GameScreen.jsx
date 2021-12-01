import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GameScreen = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "2df36c9dddmsh67c9c5884b2b599p1e697bjsnbb9599449c3e"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.table(data[5]);
        setGames(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [])

  return (
    <div className='p-4'>
      <h1 className='text-4xl font-semibold font-mono text-center my-4 w-full'>Games</h1>
      <div className='flex flex-wrap gap-5 items-center justify-center'>
        {
          games ? games.map(game => (
            <div className='h-96 w-80 border shadow-md rounded-md relative' key={game?.id}>
              <Link to={`/games/${game?.id}`}>
                <img src={game?.thumbnail} className='h-48 w-full rounded-t-md' alt="" />
                <div className='p-4'>
                  <h2 className='text-xl font-semibold font-mono'>{game?.title}</h2>
                  <p className='text-sm font-mono'>{game?.short_description}</p>
                </div>
              </Link>
              <div className='h-8 flex flex-wrap justify-center items-center gap-5'>
                <div className='bg-blue-500 text-white rounded-md w-20 text-center'>
                  {game?.genre}
                </div>
              </div>
              <div className='absolute bottom-0 left-0'>
                <Link to={`/games/${game?.id}`}
                  className='text-white px-4 py-1 bg-black'>
                  Read More
                </Link>
              </div>
              <div className='absolute bottom-0 right-0'>
                <span className='text-white px-4 py-1 bg-black'>
                  {game?.platform}
                </span>
              </div>
            </div>
          )) : (
            <div className='h-96 w-80 border shadow-md rounded-md relative'>
              <div className='p-4'>
                <h2 className='text-xl font-semibold font-mono'>Loading...</h2>
              </div>
            </div>
          )
        }
      </div>
    </div >
  )
}

export default GameScreen
