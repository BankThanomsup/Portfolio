import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mb-10">
        <div className="flex justify-end">
            <a href="https://github.com/BankThanomsup"  target="_blank">
             <span>
                Developed with React.js and Tailwind CSS
                <FontAwesomeIcon className="ml-2" icon={faGithub}/>
            </span>    
            </a>
        </div>
    </div>
  )
}
export default Footer