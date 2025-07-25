import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => {
    return(
        <div>
            <div className="flex flex-row items-center gap-3 p-3 px-10 shadow-md">
                <FontAwesomeIcon icon={faCode} className="p-2 rounded-md text-white bg-gradient-to-r from-blue-400 to-purple-400"/>
                <div className="flex flex-col items-start">
                    <h1 className="font-bold text-lg">Josh's Component Lab</h1>
                    <p className="text-gray-500">Joshua's React Component Library</p>
                </div>
            </div>
        </div>
    )
}

export default Header