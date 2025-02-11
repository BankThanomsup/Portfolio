import { data } from '../../contents/about'
import { useEffect } from 'react';
const About = ({onInitial,title=""}) => {

  const SECTION_ID = `${title}-section`

        useEffect(()=>{
          onInitial(SECTION_ID);
      },[])
  return (
    <div className="space-y-4 px-2 scroll-m-14" id={SECTION_ID}>
    <div className="text-primaryAccent font-semibold">{data.title}</div>
    <div>{data.description1}</div>
    <div>{data.description2}</div>
    <div>{data.description3}</div>
    
    </div>
  )
}
export default About;