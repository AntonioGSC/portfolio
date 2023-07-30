import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { i18n } from '../translate/i18n';

const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {i18n.t('tech.technologies', { returnObjects: true }).map((technology) => (
                <div div className='w-28 h-28' key={technology.name} >
                    <BallCanvas icons={technology.icons} />
                </div>
            ))
            }
        </div >
    )
}

export default SectionWrapper(Tech, "");