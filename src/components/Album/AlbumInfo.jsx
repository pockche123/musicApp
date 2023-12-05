import React from 'react'

const AlbumInfo = ({ album }) => {



    return (
        <>
            <div className="album-image">
                <img src={album?.image} alt="album" />
            </div>
            <div className="album-info1-info">
                <label htmlFor="albumTitle">Album</label>
                <p id="albumTitle">{album?.album_name}</p>
                <div className="list">
                    <label>{album?.artist}</label>,&nbsp;
                    <label>{album?.release_year}</label>,&nbsp;
                    <label>{album?.songs.length} songs</label>
                </div>
            </div>
        </>
    )
}

export default AlbumInfo