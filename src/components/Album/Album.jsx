
import './Album.css'

import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClock, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import TableCard from './TableCard';
import AlbumInfo from './AlbumInfo';



const Album = () => {
    const location = useLocation();
    const album = location.state && location.state.album
    const [hoveredRow, setHoveredRow] = useState(null);
    const navigate = useNavigate()
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
            <ToastContainer />
            <div className="album-logo" onClick={() => navigate("/") }>
                <h1>Resonance</h1>
            </div>
            <section className="album-info">
                <div className="album-info1">
                    <AlbumInfo album={album}/>
                </div>

                <div className="album-info2">
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
                            <TableCard key={index} a={a} index={index}  setHoveredRow={setHoveredRow} hoveredRow={hoveredRow} handleAddSong={handleAddSong} iconStates={iconStates}/>        
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