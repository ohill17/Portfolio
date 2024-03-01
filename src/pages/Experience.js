import React from 'react'

import {
   VerticalTimeline,
  VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css"
  import SchoolIcon from "@mui/icons-material/School"
  import WorkIcon from '@mui/icons-material/Work';
  import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'> 
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
         className='vertical-timeline-element--education'
         date="2022"
         iconStyle={{background: "#3e497a", color: "#fff"}}
         icon={<SchoolIcon />}
         >
      <h3 className='vertical-timeline-element-title'> Lane Community College, 4000 E 30th Ave, Eugene Oregon
       </h3>
       <p> Attending for Degree in Computer Programming</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
         className='vertical-timeline-element--education'
         date="2022"
         iconStyle={{background: "#3e497a", color: "#fff"}}
         icon={<SchoolIcon />}
         >
      <h3 className='vertical-timeline-element-title'> Lane Community College, 4000 E 30th Ave, Eugene Oregon
       </h3>
       <p> Began learning basic HTML/CSS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
         className='vertical-timeline-element--education'
         date="2022"
         iconStyle={{background: "#3e497a", color: "#fff"}}
         icon={<SchoolIcon />}
         >
      <h3 className='vertical-timeline-element-title'> Lane Community College, 4000 E 30th Ave, Eugene Oregon
       </h3>
       <p> Learned Javascript and C# to Intermediate Levels</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
         className='vertical-timeline-element--education'
         date="2023"
         iconStyle={{background: "#3e497a", color: "#fff"}}
         icon={<SchoolIcon />}
         >
      <h3 className='vertical-timeline-element-title'> Lane Community College, 4000 E 30th Ave, Eugene Oregon
       </h3>
       <p> Learned Advanced C#, MySql, ASP.NET MVC, React</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
         className='vertical-timeline-element--education'
         date="2023"
         iconStyle={{background: "#3e497a", color: "#fff"}}
         icon={<SchoolIcon />}
         >

      <h3 className='vertical-timeline-element-title'> Lane Community College, 4000 E 30th Ave, Eugene Oregon
       </h3>
       <p> Earned my Career Pathways Certificate in Front End Web Development</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
         className='vertical-timeline-element--education'
         date="Present"
         iconStyle={{background: "#D7E172", color: "#fff"}}
         icon={<WorkIcon />}
         >
      <h3 className='vertical-timeline-element-title'> Lane Community College, 4000 E 30th Ave, Eugene Oregon
       </h3>
       <p>Developing website for Grasshopper Construction.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
      </div>
  )
}

export default Experience