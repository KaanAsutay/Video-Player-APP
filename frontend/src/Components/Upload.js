import React from 'react'
import styled from 'styled-components'

function Upload() {
    const [video, setVideo] = React.useState(null);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [label, setLabel] = React.useState('Upload your video...');
    const [loading, setLoading] = React.useState(false); 

    const handleTextChange = name => e => {
        if(name === 'title') {
            setTitle(e.target.value)
        } else{
            setDescription(e.target.value)
        }
    }

  return (
    <UploadStyled>
      <h2>Upload Video</h2>
      <form 
      action='api/upload' 
      method='POST' 
      encType='multipart/form-data'
      >
        <div className="input-control">
            <label htmlFor="title">Title</label>
            <input 
                type="text"
                name="title" 
                id="title" 
                placeholder='Enter Title' 
                value={title} 
                onChange={handleTextChange('title')}
            />
        </div>
        <div className="input-control">
            <label htmlFor="description">Description</label>
            <textarea 
                name="description" 
                placeholder='Enter description here...' 
                id="description" cols="30" rows="6"
                value={description}
                onChange={handleTextChange('description')}
                >
            </textarea>
        </div>
        </form>
    </UploadStyled>
  )
}

const UploadStyled = styled.div`

`;

export default Upload
