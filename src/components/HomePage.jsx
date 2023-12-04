import Carousel from 'react-bootstrap/Carousel';
import { data } from '../assets/file';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/HomePage.css'

const HomePage = () => {

    const albums = data;
    const navigate = useNavigate()

    useEffect(() => {
        console.log(data)
    })

    function handleClick(album) {
        navigate('/album', { state: { album } })
    }


    return (
        <div className="container">
            <div>
            <div className="name">
                <h1>Resonance</h1>

                </div>
                <div className="tagLine">
                    <h5>Music<br/>for <br/> Everyone.</h5>
                    </div>

                </div>
            <div className="carousel">

                <Carousel>
                    {albums?.map(album => (
                        <Carousel.Item key={album.id} interval={3000}>
                            <img src={album.image} alt="album" className="d-block w-100" onClick={() => handleClick(album)} />
                        </Carousel.Item>
                    )
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default HomePage