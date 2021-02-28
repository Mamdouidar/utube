import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    
    const [ selectedVideo, setSelectedVideo ] = useState(null);
    const [ videos, search] = useVideos('rick roll');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);     

    return (
        <div>
            <SearchBar onFormSubmit={search} />
            <VideoDetail video={selectedVideo} />
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
        </div>
    );
};

export default App;
