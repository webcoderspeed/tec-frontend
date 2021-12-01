import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GameDetailPage = () => {

  const { id } = useParams();
  const [game, setGame] = useState({});


  useEffect(() => {
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "2df36c9dddmsh67c9c5884b2b599p1e697bjsnbb9599449c3e"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGame(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id])


  return (
    <div className='p-4'>
      <h1 className='text-center'>{game?.title}</h1>
      <div className='flex flex-wrap gap-5 items-center flex-col'>
        <img src={game?.thumbnail} className='h-48 w-5/12 rounded-t-md' alt="" />
        <p className='text-justify w-9/12'>{game?.description}</p>
        <div className='flex gap-5 items-center justify-center w-9/12'>
          {
            game && game?.screenshots?.map(screenshot => {
              return (
                <div key={screenshot?.id}>
                  <img src={screenshot?.image} className='rounded-md' alt="" />
                </div>
              )
            })
          }
        </div>
        <table className='border-2 w-96 text-center'>
          <thead>
            <tr>
              <th className='border-2 w-96 text-center'>Platform</th>
              <th className='border-2 w-96 text-center'>Genre</th>
              <th className='border-2 w-96 text-center'>Release Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-2 w-96 text-center'>{game?.platform}</td>
              <td className='border-2 w-96 text-center'>{game?.genre}</td>
              <td className='border-2 w-96 text-center'>{game?.release_date}</td>
            </tr>
          </tbody>
        </table>

        <a href={game?.game_url} className='px-4 py-2 rounded-md bg-gray-900 text-white'>Download</a>
      </div>
    </div>
  )
}

export default GameDetailPage
