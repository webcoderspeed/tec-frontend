import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [key, setKey] = useState("");
  let url = `https://youtube.com/embed/`;

  const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5f8dceef377e56a3ea9a630b1845ac18`).then(res => res.json()).then(data => {
      setKey(data?.results[0]?.key);
    });

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5f8dceef377e56a3ea9a630b1845ac18`).then(res => res.json()).then(data => {
      setDetailData(data);
    });
  }, [id,]);


  const subtitle = `${detailData?.release_date?.split("-")[0]} - ${moment(detailData?.duration).format("HH:mm")}`;

  return (
    <Container>
      <Background>
        <img alt={detailData.original_title} src={MOVIE_DB_IMAGE_ENDPOINT + detailData?.poster_path} />
      </Background>
      <ContentMeta>
        <Controls style={{
          marginTop: "200px",
          backgroundColor: "linear-gradient(to right, #000, #edf7f3)"
        }}>
          {
            key !== undefined ? (
              <>
                <Player href={url + key}>
                  <img src="/images/play-icon-black.png" alt="" />
                  Play
                </Player>
                <Trailer href={url + key} className='bg-black bg-opacity-50 text-white px-4 py-2 rounded-md flex justify-center items-center'>
                  <img src="/images/play-icon-white.png" alt="" />
                  Trailer
                </Trailer>
              </>
            ) : (
              <h1 className='bg-white px-4 py-1 rounded-md'>
                We don't have trailer for this movie
              </h1>
            )
          }
        </Controls>
        <SubTitle>{subtitle}</SubTitle>
        <Description>{detailData?.overview}</Description>
      </ContentMeta>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 75px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 18%;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.a`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  background: white;
  border: 1px solid rgb(0, 0, 0);
  font-size:1.3em;
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled.a`
  border: 1px solid rgb(249, 249, 249);
  font-size:1.3em;
  padding: 0px 24px;
  height: 56px;
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;