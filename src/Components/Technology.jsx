import { useState } from 'react';
import data from '../Data/technology.json'
import Tech from './Tech';

function Technology(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const techs = data.technologies;
    props.setBackground("technology");

    const activeList = (key) => {
        // to move the slider to the corresponding content
        const slides = document.querySelector(".tech-slides");
        slides.style.transform = `translateY(${key * -33.333}%)`;
        setActiveIndex(key);

        // to change the image source to the corresponding one
        const image = document.querySelector('.technology img');
        setTimeout(() => { image.style.opacity = '0'; })
        setTimeout(() => { image.src = require(`../images/${techs[key].image_path}`); }, 200)
        setTimeout(() => { image.style.opacity = '1'; }, 400)
    }

    return (
        <main className="technology">
            <div className="content">
                <div className="title"><span className="page-num">03 </span>SPACE LAUNCH 101</div>
                <div className="slider">
                    <div onClick={() => activeList(0)} className={activeIndex === 0 ? "active-tech circle" : "circle"}>1</div>
                    <div onClick={() => activeList(1)} className={activeIndex === 1 ? "active-tech circle" : "circle"}>2</div>
                    <div onClick={() => activeList(2)} className={activeIndex === 2 ? "active-tech circle" : "circle"}>3</div>
                </div>
                <section>
                    <p className="sub-title">THE TERMINOLOGY…</p>

                    <div className="tech-slider">
                        <div className='tech-slides'>
                            {techs.map((tech, i) =>
                                <Tech key={i} name={tech.name} description={tech.description}></Tech>
                            )}
                        </div>
                    </div>
                </section>
                <img src={require("../images/technology1.jpg")} alt="technology" />
            </div>
        </main>
    );
}

export default Technology;