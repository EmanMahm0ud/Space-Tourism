import data from '../Data/technology.json'
import Tech from './Tech';

function Technology() {

    let tech = data.technologies;
    document.body.style.backgroundImage = `url(${require('../images/technology_bg.jpg')})`;

    return ( 
        <main className="technology">
            <div className="content">
                <div className="title"><span className="page-num">03 </span>SPACE LAUNCH 101</div>
                <div className="slider">
                    <div className="circle">1</div>
                    <div className="circle">2</div>
                    <div className="circle">3</div>
                </div>
                <section>
                    <p className="sub-title">THE TERMINOLOGY…</p>
                    <Tech name={tech[0].name} description={tech[0].description}></Tech>
                </section>
                <img src={require("../images/technology1.jpg")} alt="technology" />
            </div>
        </main>
    );
}

export default Technology;