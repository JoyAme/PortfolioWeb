
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLine } from '../../assest/Data';
import { Container } from '../../GlobalStyle';

const AboutTime = () => {
  return (
    <div>
        {/* <Container> */}
      <h1>TimeLine</h1>
      <VerticalTimeline>
        {
            TimeLine.map((time)=>{
                return(
                    <VerticalTimelineElement
                    key={time.key}
                    date={time.title}
                    info={time.Write}
                    icon={time.img}
                    // iconStyle={time.img}
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
    </div>
  )
}

export default AboutTime
