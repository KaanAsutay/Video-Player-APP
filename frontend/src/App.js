import styled from "styled-components";
import Videos from "./Components/Videos";
import { useGlobalContext } from "./Context/global";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPlayer from "./Components/VideoPlayer";

function App() {
  const g = useGlobalContext()
  console.log(g)

  return (
    <BrowserRouter>
      <AppStyled className="App">
        <h1>Video Uploader</h1>
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="/videos/:id" element={<VideoPlayer />} />
        </Routes>
        <Videos />
      </AppStyled>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  padding: 3rem 18rem;
  
  h1{
    color: #fff;
    background: linear-gradient(to right, #00b894 40%,#705DF2 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default App;