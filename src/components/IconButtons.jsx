import React from 'react'

export const IconLink = ({ children, link }) => {
    return (
        <a href={link} rel='noreferrer' target='_blank' className='bg-[#0A1029] p-3 rounded-full w-14 h-14'>
            {children}
        </a>
    )
}

export const IconDownload = ({ children, link }) => {

    const downloadFile = (e) => {
        window.open(link, "_blank");
    }

    return (
        <div onClick={downloadFile} className='cursor-pointer bg-[#0A1029] p-3 rounded-full w-14 h-14'>
            {children}
        </div>
    )
}
