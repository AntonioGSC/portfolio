import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { logo, menu, close, brazil, usa } from '../assets';

import { i18n } from '../translate/i18n';

const I18N_STORAGE_KEY = 'i18nextLng';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [language] = useState(window.localStorage.getItem(I18N_STORAGE_KEY));

    const handleLanguageChange = (event) => {
        window.localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
        return window.location.reload();
    }

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link to='/' className='flex items-center gap-2'
                    onClick={() => {
                        setToggle(false);
                        setActive('');
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                        {i18n.t('navbar.logo.prefix')}&nbsp;
                        <span className='sm:block hidden'>|&nbsp;{i18n.t('navbar.logo.suffix')}</span>
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row items-center gap-6'>
                    {i18n.t('navbar.navLinks', { returnObjects: true }).map((link) => (
                        <li key={link.id}
                            className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                    <li className='flex justify-between gap-4' onChange={handleLanguageChange} value={language}>
                        <label htmlFor='pt-BR'>
                            <input
                                type='radio'
                                name='language'
                                id='pt-BR'
                                value='pt-BR'
                                checked={language === 'pt-BR'}
                                className='peer hidden'
                            />
                            <img
                                src={brazil}
                                className='w-8 h-8 cursor-pointer peer-checked:grayscale'
                                alt='Portuguese' />
                        </label>
                        <label htmlFor='en-US'>
                            <input
                                type='radio'
                                name='language'
                                id='en-US'
                                value='en-US'
                                checked={language === 'en-US'}
                                className='peer hidden'
                            />
                            <img
                                src={usa}
                                className='w-8 h-8 cursor-pointer peer-checked:grayscale'
                                alt='English' />
                        </label>
                    </li>
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />

                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {i18n.t('navbar.navLinks', { returnObjects: true }).map((link) => (
                                <li key={link.id}
                                    className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium corsor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle)
                                        setActive(link.title)
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar