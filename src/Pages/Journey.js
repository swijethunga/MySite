import React from 'react';
import "../Styles/Journey.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from 'react-icons/fa';
import SchoolIcon from "@material-ui/icons/School";
//import WorkIcon from "@material-ui/icons/Work";

const Journey = () => {

  return (

    <div className='experience'>
      <VerticalTimeline lineColor={'#ddd'} lineWidth={2} lineHeight={50}>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: '#ccffff', color: '#333300' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: '#000', color: '#fff'}}
          icon={<FaSchool />}
          date='2006-2011'
          dateClassName='date'
          lineStyle={{ borderTop: '2px solid #000' }}
          style={{ margin: '10px 0' }}
        >
          <h3>Primary Education</h3>
          <h4>Sri Bodhi Central Collage Collage  Welipannagahamulla</h4>

          </VerticalTimelineElement>

         
          <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#333300' }}
          iconStyle={{ background: '#000', color: '#fff' }}
          icon={<FaSchool />}
          date='2012-2019'
          dateClassName='date'
        >
          <h3>Secondary Education</h3>
          <h4>Dhammissara National School Naththandiya</h4> 
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: 'rgb(79, 100, 520)', color: '#333300' }}
          iconStyle={{ background: '#000', color: '#fff' }}
          icon={<SchoolIcon />}
          date='2020-2021'
          dateClassName='date'
        >
          <h3>Diploma in English</h3>
          <h4>Wayamba University of Sri Lanka</h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: 'rgb(133, 10, 300)', color: '#333300' }}
          iconStyle={{ background: '#000', color: '#fff' }}
          icon={<SchoolIcon />}
          date='2021-2025'
          dateClassName='date'
        >
          <h3>Bsc (Hons) in Information Technology & Management</h3>
          <h4>University of Moratuwa</h4>
          </VerticalTimelineElement>

          

          

          </VerticalTimeline>
        </div>
        );
}
        export default Journey;