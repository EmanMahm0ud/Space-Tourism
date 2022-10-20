import { useState } from 'react';
import data from '../Data/destination.json'
import Planet from './Planet';

function Destination(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const planets = data.planets;
    props.setBackground("destination");

    const activeList = (key) => {
        // to move the slider to the corresponding content
        const slides = document.querySelector(".planet-slides");
        slides.style.transform = `translateX(${key * -25}%)`;
        setActiveIndex(key);

        // to change the image source to the corresponding one
        const image = document.querySelector('.destination img');
        setTimeout(() => { image.style.opacity = '0'; })
        setTimeout(() => { image.src = require(`../images/${planets[key].image_path}`); }, 200)
        setTimeout(() => { image.style.opacity = '1'; }, 400)
    }

    return (
        <main className="destination">
            <div className="content">
                <div className="title"><span className="page-num">01 </span>Pick your destination</div>
                <img src={require(`../images/moon.webp`)} alt="moon" />
                <section>
                    <ul>
                        <li onClick={() => activeList(0)} className={activeIndex === 0 ? "active-destination" : ""}>MOON</li>
                        <li onClick={() => activeList(1)} className={activeIndex === 1 ? "active-destination" : ""}>MARS</li>
                        <li onClick={() => activeList(2)} className={activeIndex === 2 ? "active-destination" : ""}>EUROPA</li>
                        <li onClick={() => activeList(3)} className={activeIndex === 3 ? "active-destination" : ""}>TITAN</li>
                    </ul>


                    <div className="planet-slider">
                        <div className='planet-slides'>
                            {planets.map((planet, i) =>
                                <Planet key={i} name={planet.name} description={planet.description} distance={planet.distance} travel_time={planet.travel_time}></Planet>
                            )}
                        </div>
                    </div>

                </section>
            </div>
        </main>
    );
}

export default Destination;