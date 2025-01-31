import ContentContainer from "../../components/ContentContainer"
import About from "../About"
import {data as experienceData} from "../../contents/experience"
import {data as projectData} from "../../contents/project"
import {data as articleData} from "../../contents/article"
import Footer from "../Footer"



const RightSection = () => {
  return (
    <div className="grid gap-y-40 px-5 ">
    <About />
    <ContentContainer title="Experience" data={experienceData} />
    <ContentContainer title="Project" data={projectData} />
    <ContentContainer title="Article" data={articleData} />



   <Footer />
  </div>
  )
}
export default RightSection