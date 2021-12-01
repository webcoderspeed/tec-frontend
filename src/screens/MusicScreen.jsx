import React, { useEffect, useState } from 'react'

const MusicScreen = () => {

  const [musics, setMusics] = useState([])

  useEffect(() => {
    fetch('/api/music')
      .then(res => res.json())
      .then(data => {
        setMusics(data?.music)
      })
  }, []);

  return (
    <div className='flex flex-wrap gap-5 p-4'>
      {
        musics && musics?.map((music) => {
          return (
            <div className=''>
              <h1>{music?.title}</h1>
              <div className='w-96 rounded-md overflow-hidden'>
                <div>
                  <img src="https://more-music-videos.icu/images/g-eazy-good-life_tb9nuzzy/177.jpg" alt="" />
                </div>
                <audio controls className='w-full h-8 border-none outline-none bg-red-500' >
                  <source src={`${music?.file}`} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default MusicScreen
