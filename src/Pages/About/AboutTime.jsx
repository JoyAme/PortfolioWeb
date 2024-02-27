
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimeLine } from '../../assest/Data';

const AboutTime = () => {
  return (
    <div>
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

                    </VerticalTimelineElement>
                )
            })
        }
      </VerticalTimeline>
    </div>
  )
}

export default AboutTime
