import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context/global'
import styled from 'styled-components'
import VideoJS from './VideoJS'
import videojs from 'video.js'

function VideoPlayer() {

    const {id} = useParams()
    const {videos} = useGlobalContext()

     //refs
     const videoConRef = useRef(null); 
     const playerRef = React.useRef(null);
 
 
     const handlePlayerReady = (player) => {
         playerRef.current = player;
 
    // You can handle player events here, for example:
         player.on('waiting', () => {
         videojs.log('player is waiting');
         });
 
         player.on('dispose', () => {
         videojs.log('player will dispose');
         });
     };

  return (
    <VideoPlayerStyled>
        <div className='video-container' ref={videoConRef}>
            <VideoJS options={videoOptions} onReady={handlePlayerReady} />
        </div>
    </VideoPlayerStyled>
  )
}

const VideoPlayerStyled = styled.div`

`;

export default VideoPlayer
