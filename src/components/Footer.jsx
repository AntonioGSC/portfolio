import React from 'react';

import { SectionWrapper } from "../hoc";

import { i18n } from '../translate/i18n';

import { arrow, email, github, linkedin, resume } from '../assets';
import { IconLink, IconDownload } from './IconButtons';

const Footer = () => {
    return (
        <div className='md:px-16 px-6 md:py-16 py-5 max-w-7xl mx-auto relative z-0'>
            <div className='relative w-full h-[180px] md:h-[72px]'>
                <div className='w-full h-full flex items-start md:items-center justify-center gap-6'>
                    <IconDownload link={i18n.t('personalData.cv')}>
                        <img src={resume} alt="email envelop" />
                    </IconDownload>
                    <IconLink link={i18n.t('personalData.linkedin')}>
                        <img src={linkedin} alt="linkedin logo" />
                    </IconLink>
                    <IconLink link={i18n.t('personalData.github')}>
                        <img src={github} alt="github logo" />
                    </IconLink>
                    <IconLink link={`mailto:${i18n.t('personalData.email')}`}>
                        <img src={email} alt="email envelop" />
                    </IconLink>
                </div>
                <div
                    className='absolute bottom-0 md:top-0 right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 flex flex-col items-center cursor-pointer'
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}>
                    <img src={arrow} alt={i18n.t('footer.backToTop')} className='w-12 h-12' />
                    <p>{i18n.t('footer.backToTop')}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;