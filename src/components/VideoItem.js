import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)}>
            <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            {video.snippet.title}
        </div>
    );
};

export default VideoItem;