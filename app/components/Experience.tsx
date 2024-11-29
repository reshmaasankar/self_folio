'use client'

import React, { useContext } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Headersection from './Headersection';
import { experiences } from '../lib/data';
import { ThemeContext } from '../context/theme-context';

function Experience() {
    const {theme, handleTheme}:any = useContext(ThemeContext);

    return (
        <section className='text-center max-w-[55rem] mt-10 scroll-mt-28 mb-26'  id="experience">
            <Headersection>Experience</Headersection>
            <VerticalTimeline>
                {experiences.map((exp, i) => (
                    <React.Fragment key={i}>
                        <VerticalTimelineElement
                            
                            contentStyle={{ background:  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)", textAlign: 'left'}}
                            contentArrowStyle={{ borderRight:
                                theme === "light"
                                  ? "0.4rem solid #9ca3af"
                                  : "0.4rem solid rgba(255, 255, 255, 0.5)", }}
                            date={exp.year}
                            iconStyle={{ background: '#f3f4f6'}}
                        >
                            <h3 className="vertical-timeline-element-title text-blue-800 font-bold">{exp.compnay}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-blue-800 font-bold">{exp.title}</h4>
                            <p className="font-medium italic">
                                {exp.description}
                            </p>
                        </VerticalTimelineElement>

                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}

export default Experience