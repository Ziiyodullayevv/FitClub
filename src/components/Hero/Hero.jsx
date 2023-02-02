import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Colories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';

const Hero = () => {

  const transition = {type: 'spring', duration: 2};
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id='home'>

        {/* hero blur effects part: */}
        <div className="blur hero-blur"></div>

        {/* --- Left Hero parts --- */}
        <div className="left-h">
            <Header />

            {/* the best ad part + motion: */}
            <div className="the-best-ad">
                <motion.div
                    initial={{left: mobile ? '165px' : '238px' }}
                    whileInView={{left: '6px'}}
                    transition={{...transition, type: 'tween'}}
                >
                </motion.div>
                <span>the best fitness club in the town</span>
            </div>
            
            {/* hero heading part: */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>  
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>
                        In here we will help you to shape and build your ideal body 
                        and live up your life to fullest 
                    </span>
                </div>
            </div>

            {/* figures part: */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter start={100} end={140} delay={4} preFix='+'/>
                    </span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span>
                        <NumberCounter start={940} end={980} delay={4} preFix='+'/>
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                        <NumberCounter start={10} end={50} delay={4} preFix='+'/>
                    </span>
                    <span>fitness programs</span>
                </div>  
            </div>

            {/* hero buttons part */}
            <div className="hero-buttons">
                <button className="btn">Get started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>

        {/* --- Right Hero parts --- */}
        <div className="right-h">
            
            {/* right hero btn: */}
            <button className='btn'>
                Join Now
            </button>

            {/* right hero heart part: */}
            <motion.div 
                className="heart-rate"
                initial={{right: '-1rem'}}
                whileInView={{right: '4rem'}}
                transition={transition}
            >
                <img src={Heart} alt="heart jpg" />
                <span>Heart Rate</span> 
                <span>116 bpm</span>
            </motion.div>

            {/* right hero images part: */}
            <img src={hero_image} alt="img" className='hero-image' />
            <motion.img 
                src={hero_image_back} 
                alt="img" 
                className='hero-image-back' 
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}
            />

            {/* right hero colories part: */}
            <motion.div 
                className="colories"
                initial={{right:'37rem'}}
                whileInView={{right: '28rem'}}
                transition={transition}
            >
                <img src={Colories} alt="img" />
                <div>
                    <span>Colories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
