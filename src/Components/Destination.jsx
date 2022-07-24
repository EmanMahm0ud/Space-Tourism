import data from '../Data/destination.json'
import Planet from './Planet';

function Destination() {

    let planets = data.planets;
    document.body.style.backgroundImage = `url(${require('../images/destination_bg.jpg')})`;

    return ( 
        <main className="destination">
            <div className="content">
                <div className="title"><span className="page-num">01 </span>Pick your destination</div>   
                <img src={require(`../images/moon.png`)} alt="moon" />
                <section>
                    <ul>
                        <li>MOON</li>
                        <li>MARS</li>
                        <li>EUROPA</li>
                        <li>TITAN</li>
                    </ul>

                    <Planet className='planet' name={planets[0].name} description={planets[0].description} distance={planets[0].distance} travel_time={planets[0].travel_time}></Planet>
                    
                </section>
            </div>
        </main>
    );
}

export default Destination;