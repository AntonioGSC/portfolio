import React from 'react';
import { Link } from 'react-router-dom';

import { SectionWrapper } from "../hoc";

import { i18n } from '../translate/i18n';

import { arrow } from '../assets';

const Footer = () => {
    return (
        <div className='relative w-full h-[72px]'>
            <div className='w-full h-full flex items-center justify-center'>
                Footer
            </div>
            <div
                className='absolute top-0 right-0 flex flex-col items-center cursor-pointer'
                onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                <img src={arrow} alt={i18n.t('footer.backToTop')} className='w-12 h-12' />
                <p>{i18n.t('footer.backToTop')}</p>
            </div>
        </div>
    )
}

export default SectionWrapper(Footer, '');