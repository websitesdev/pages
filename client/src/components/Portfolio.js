import React from "react";
import Slider from "react-slick";
import "./Portfolio.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/4.jpg"
import slide2 from "../images/5.jpg"
import slide3 from "../images/23.jpg"
import styles from "./Portfolio.module.scss";


const Portfolio = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
     
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.titleCarousel}>Modele website</h3>
            <Slider {...settings}>
                <div className={styles.card}>
                
                    <div className={styles.cardBody}>
                    <img src={slide1} alt="" />
                        
                    </div>
                </div>
                <div className={styles.card}>
                   
                    <div className={styles.cardBody}>
                    <img src={slide2} alt="" />
                       
                    </div>
                </div>
                <div className={styles.card}>
                  
                    <div className={styles.cardBody}>
                    <img src={slide3} alt="" />
                        
                    </div>
                </div>
              
               

            </Slider>
        </div>
    )
}

export default Portfolio
