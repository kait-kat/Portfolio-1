import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import {faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons;'

export default function Links(){
    return (
        <div className="">
            <ul className="text-center">
                <li><a href="https://github.com/kait-kat" rel="noreferrer" target="_blank"><FontAwesomeIcon size= '2x1' icon={faCode}/> </a></li>
                <li><a href="https://www.linkedin.com/in/kait-heinle-773516269" rel="noreferrer" target="_blank"><FontAwesomeIcon size= '2x1' icon={faEnvelope}/></a></li>
            </ul>
        </div>
    )
}



