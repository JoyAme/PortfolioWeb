
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLine } from '../../assest/Data';
import { Container } from '../../GlobalStyle';
import { AboutWrap } from './Aboutstyle';

const AboutTime = () => {
  return (
    <div>
        <AboutWrap>
        {/* <Container> */}
      <h1>Experience</h1>
      <VerticalTimeline>
      
        {
            TimeLine.map((time)=>{
                return(
                    // <div className='vertical-timeline-element-subtitle-content'>
                    <VerticalTimelineElement
                    
                    key={time.key}
                    // date={time.title}
                    info={time.Write}
                    icon={time.img}
                    contentStyle={{ background: '#F0F0F5', color: '#fff', height:'190px',borderRadius:'20px',boxShadow: "2px 3px 0 3px #FCA61F" }}
                    iconStyle={{ background: '#FCA61F', color: '#fff' }}
                    >
                        
                     <h2 className='vertical-timeline-element-title'>{time.title}</h2> 
                    <h2 className='vertical-timeline-element-subtitle'>{time.subTitle}</h2>
                        <p id='description'>{time.description}</p>
                        
                    </VerticalTimelineElement>
                   
                )
            })
        }
       
      </VerticalTimeline>
      {/* </Container> */}
      </AboutWrap>
    </div>
  )
}

export default AboutTime
