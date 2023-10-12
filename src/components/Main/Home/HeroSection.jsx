import React from 'react';
import { motion } from 'framer-motion';

import { phone_1, phone_2 } from '../../../assets';

const HeroSection = () => {
  return (
    <section className='hero-section' id='hero'>
      <div className='container'>
        <motion.div
          initial={{
            left: '-100px',
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            left: 0,
            right: 0,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeInOut',
            delay: 0.2,
          }}
          className='row align-items-center absolute'
        >
          <div className='col-12 hero-text-image'>
            <div className='row'>
              <div className='col-lg-8 text-center text-lg-start'>
                <h1 data-aos='fade-right'>Welcome to My Library</h1>
                <p className='mb-5' data-aos='fade-right' data-aos-delay='100'>
                  Entire world is on your pocket now!
                </p>
                <p
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-offset='-500'
                >
                  <a href='#' className='btn btn-outline-white'>
                    Get started
                  </a>
                </p>
              </div>
              <div className='col-lg-4 iphone-wrap'>
                <img
                  src={phone_1}
                  alt=''
                  className='phone-1'
                  data-aos='fade-right'
                />
                <img
                  src={phone_2}
                  alt=''
                  className='phone-2'
                  data-aos='fade-right'
                  data-aos-delay='200'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
