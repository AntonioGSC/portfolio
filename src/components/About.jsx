import React from 'react';

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

import { i18n } from '../translate/i18n';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()} className='mb-4'>
                <p className={styles.sectionSubText}>{i18n.t('about.subtext')}</p>
                <h2 className={styles.sectionHeadText}>{i18n.t('about.title')}</h2>
            </motion.div>
            {i18n.t('about.overviewInformation', { returnObjects: true }).map((info, index) => (
                <motion.p
                    key={`overview-information-${index}`}
                    variants={fadeIn('', '', 0.1, 1)}
                    className='text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    {info}
                </motion.p>
            ))}
            <div className='mt-20 flex flex-wrap gap-10'>
                {i18n.t('about.services', { returnObjects: true }).map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, 'about');