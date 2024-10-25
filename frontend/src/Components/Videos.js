import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../Context/global';

function Videos() {

    const {videos} = useGlobalContext()

  return (
    <VideosStyled>
      <div className='videos-container'>
        {videos.map((video) => {
            return <div key={video._id} className='video'>
                <video src={video.videoUrl}></video>
                <h4>{video.title}</h4>
                <p>{video.description}</p>
            </div>
        })}
      </div>
    </VideosStyled>
  )
}

const VideosStyled = styled.div`

`;

export default Videos
