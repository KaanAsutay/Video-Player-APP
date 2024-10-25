import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context/global'

function VideoPlayer() {

    const {id} = useParams()
    const {videos} = useGlobalContext()

    //refs

  return (
    <div>VideoPlayer</div>
  )
}

export default VideoPlayer
