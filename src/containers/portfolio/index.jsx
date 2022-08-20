import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdFactCheck } from "react-icons/md";
import ImageOne from "../../images/image1.jpg";
import Agecalculator from "../../images/AgeCalc.png";
import ECommerce from "../../images/e-comm.png";
import './styles.scss';


const portfolioData = [
    {
        id: 2,
        name: "Ecommerce",
        Image: ECommerce,
        link: "https://drive.google.com/file/d/1zeOCGl3ZIUoCSMdlmKDv5bXyYOHgGNzq/view?usp=sharing"
    },
    {
        id: 3,
        name: "AgeCalc",
        Image: Agecalculator,
        link: ''
    },
    {
        id: 2,
        name: "Design",
        Image: ImageOne,
        link: ''
    }
]

const filterData = [
    {
        filterId: 1, //all
        label: 'All'
    },
    {
        filterId: 2, //Deve
        label: 'Development'
    },
    {
        filterId: 3, //design
        label: 'Design'
    }
]



const Portfolio = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    //Funtion For Filter By Id
    function handleFilter(currentId) {
        setFilteredValue(currentId)
    };

    function handleHover(index) {
        setHoveredValue(index)
    }

    console.log('=======================');
    console.log(hoveredValue);
    console.log('=======================');

    const filteredItems = filteredvalue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredvalue)

    console.log(filteredItems);

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<MdFactCheck size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map(item => (
                            <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>{item.label}</li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item, index) => (
                            <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >

                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <a>
                                        <img alt="dummy data" src={item.Image} />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                              
                                                <button href={item.link}>Visit</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio;