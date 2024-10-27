import React from 'react'
import styled from 'styled-components'
import Button from './Button';

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

    const handleVideo = (e) => {
        setVideo(e.target.files[0])
        setLabel('Your Video: ' + e.target.files[0].name)
    }

    return (
        <UploadStyled>
            <h2>Upload Video</h2>
            <form onSubmit={handleUpload} action="api/upload" method='POST' encType='multipart/form-data'>
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
                <div className="input-control upload-con">
                    <label htmlFor="video">Video Upload</label>
                    <div className="inner-input">
                        <label 
                            className='inner-label' 
                            htmlFor="video"
                            style={{color: video ? '#00b894' : 'rgb(74 74 74)'}}
                            >
                                {label}
                        </label>
                        <input 
                            type="file" 
                            name="video" 
                            id="video"
                            accept="video/*"
                            //hidden
                            hidden
                            onChange={handleVideo}
                        />
                    </div>
                    <div className="upload-btn">
                        <Button     
                            name="Upload"
                            icon={<i className="fas fa-upload"></i>}
                            bg={"#00b894"}
                            type="submit"
                            disabled={loading}
                        />
                    </div>
                </div>
            </form>
        </UploadStyled>
    )
}

const UploadStyled = styled.div`
    position: fixed;
    z-index: 5;
`;

export default Upload
