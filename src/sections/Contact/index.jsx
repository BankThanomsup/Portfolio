import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    return (
        <div className="flex items-end ">
            <div className="flex item-end gap-4 text-2xl ">
                <a href="https://github.com/BankThanomsup/Portfolio" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub} />
                </a>
                <a href="https://medium.com/@thitikorn.thanomsup" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faMedium}    />
                </a>
                <a href="https://www.linkedin.com/in/thitikorn-thanomsup-130183284/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faLinkedin}  />
                </a>
            </div>
        </div>
    )
}
export default Contact