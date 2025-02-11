/*
<ContentContainer
  title=""
  data={[]}
  />
*/

import { useEffect, useState } from "react"
import FormattedDate from "../../components/FormattedDate/index"
import Picture from "../../components/Picture/index"
import TitleLink from "../../components/TitleLink";
import Material from "../../components/Material";
import Description from "../../components/Description";
import Tech from "../../components/Tech";

const ContentContainer = ({
   onInitial,
    title: sectionTitle ="",
    data=[],
})=>{
    const [isMouseEnter, setIsMouseEnter] = useState({});
    const SECTION_ID = `${sectionTitle}-section`

      useEffect(()=>{
        onInitial(SECTION_ID);
    },[])
    return (
      <div id={SECTION_ID} className="scroll-m-14">
        <div className="text-primaryAccent font-semibold px-2">{sectionTitle}</div>
        {
          data.map(({ date="", title="", link="", materials=[], description=[], skills=[], picture="" }, index) => (
            <div
              key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
              className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryBase" : ""}`}
              onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
              onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
            >
              <div>
                <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
                <Picture picture={picture} title={title} />
              </div>
  
              <div className="grid gap-4">
                <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />
              {
               materials.length > 0 ?
                
                <div className="flex gap-4 text-xl items-center">
                  {
                    materials.map((e, i) => (
                      <Material key={`${e.type}-material-${i}`} icon={e.type} link={e.link} />
                    ))
                  }
                </div>
                : null
              }
  
                {
                  description.map((e, i) => (
                    <Description key={`${e}-description-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} description={e} />
                  ))
                }
  
                {
                  skills.map((e, i) => (
                    <Tech key={`${e}-skills-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    );
}

export default ContentContainer;