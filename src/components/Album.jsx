
import '../styles/Album.css'

import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClock, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const Album = () => {
    const location = useLocation();
    const album = location.state && location.state.album
    const [hoveredRow, setHoveredRow] = useState(null);

    const [iconStates, setIconStates] = useState(Array(album?.songs?.length).fill(faPlus));

    const handleAddSong = (index) => {
        setIconStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = newStates[index] === faPlus ? faCheck : faPlus;
            return newStates;
        });
        const songTitle = album?.songs[index]?.title
        if (iconStates[index] === faPlus) {
            toast.success(`"${songTitle}" has been added to your liked songs`, { autoClose: 2000 });
        } else {
            toast.error(`"${songTitle}" has been removed from your liked songs`, { autoClose: 2000 });
        }

    };

    return (
        <article className="album-container">
            <div className="album-logo">
                <h1>Resonance</h1>
            </div>
            <section className="album-info">
                <div className="album-info1">
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
                </div>
                <div className="album-info2">
                    <ToastContainer />
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col"></th>
                                <th scope="col"><FontAwesomeIcon icon={faClock} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {album?.songs?.map((a, index) => (
                                <tr key={index} onMouseEnter={() => setHoveredRow(index)}
                                    onMouseLeave={() => setHoveredRow(null)}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{a.title}</td>
                                    <td><FontAwesomeIcon icon={iconStates[index]} className={`plus-icon ${hoveredRow === index ? 'visible' : 'hidden'}`}
                                        onClick={() => handleAddSong(index)} /></td>
                                    <td>{a.duration}</td>
                                </tr>




                            ))}
                        </tbody>

                    </table>

                </div>
                <div className="album-info3" style={{ backgroundImage: `url(${album?.artist_image})` }}>
                    <p className="about">
                        <p>
                            <b >About</b></p>
                        {album?.about}
                    </p>

                </div>

            </section>
        </article>

    )
}

export default Album