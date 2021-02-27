import React, { useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

const KEY = "AIzaSyAXXoZ3hGpu67qnSP7_2r56svfPMCq75qs";

const App = () => {
    const [ videos, setVideos ] = useState([]);

    const onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 50,
                key: KEY
            }
        });
        setVideos(response.data.items);
    };
    

    return (
        <div>
            <SearchBar onFormSubmit={onTermSubmit} />
            <VideoList videos={videos} />
        </div>
    );
};

export default App;
