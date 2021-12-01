import styled from "styled-components";
import { movies } from "../../data/movie";

const Viewers = () => {

  const handleMute = (e, video) => {
    const createVideo = document.createElement("video");
    const createSource = document.createElement("source");
    createVideo.setAttribute("autoPlay", "true");
    createVideo.setAttribute("loop", "true");
    createSource.setAttribute("src", video);
    createSource.setAttribute("type", "video/mp4");
    createVideo.appendChild(createSource);

    e.target.parentElement.appendChild(createVideo);
    e.target.remove();
  }

  const handleUnMute = (e, video) => {
    const createVideo = document.createElement("video");
    const createSource = document.createElement("source");
    createVideo.setAttribute("autoPlay", "true");
    createVideo.setAttribute("loop", "true");
    createVideo.setAttribute("muted", "true");
    createSource.setAttribute("src", video);
    createSource.setAttribute("type", "video/mp4");
    createVideo.appendChild(createSource);

    e.target.parentElement.appendChild(createVideo);
    e.target.remove();
  }

  return (
    <Container>
      {
        movies && movies.map(movie => {
          return (
            <Wrap key={movie.id}>
              <img src={movie.poster} alt={movie.title} />
              <video autoPlay loop muted onMouseEnter={(e) => handleMute(e, movie.video)} onMouseLeave={(e) => handleUnMute(e, movie.video)}>
                <source src={movie.video} type="video/mp4" />
              </video>
            </Wrap>
          )
        })
      }
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    z-index: 2;
    

    video {
      opacity: 1;
      z-index: 1;
    }
  }
`;

export default Viewers;