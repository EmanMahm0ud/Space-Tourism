import data from '../Data/crew.json'
import Staff from './Staff';

function Crew() {

    let crew = data.crew;
    document.body.style.backgroundImage = `url(${require('../images/crew_bg.jpg')})`;

    return ( 
        <main className="crew">
            <div className="content">
                <div className="title"><span className="page-num">02 </span>Meet your crew</div>
                <section>
                    <Staff name={crew[0].name} job={crew[0].job} description={crew[0].description}></Staff>
                </section>
                <div className="slider">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <div className="img-container"><img src={require("../images/crew1.png")} alt="crew" /></div>
            </div>
        </main>
    );
}

export default Crew;