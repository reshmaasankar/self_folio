'use client'

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Headersection from './Headersection';
import { experiences } from '../lib/data';

function Experience() {
    return (
        <section className='text-center max-w-[55rem] mt-10 scroll-mt-28 mb-26'  id="experience">
            <Headersection>Experience</Headersection>
            <VerticalTimeline>
                {experiences.map((exp, i) => (
                    <React.Fragment key={i}>
                        <VerticalTimelineElement
                            
                            contentStyle={{ background: '#f3f4f6', color: 'black', textAlign: 'left'}}
                            contentArrowStyle={{ borderRight: '0.7rem solid  #f3f4f6' }}
                            date={exp.year}
                            iconStyle={{ background: '#f3f4f6'}}
                        >
                            <h3 className="vertical-timeline-element-title">{exp.compnay}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{exp.title}</h4>
                            <p>
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