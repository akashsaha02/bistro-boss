import { Link } from "react-router-dom"
const HomeButton = ({ to, text }) => {
    return (
            <Link
                to={`/${to}`}
                type="button"
                className="capitalize border-b-2 border-b-yolo px-4 py-2 rounded font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-yolo hover:text-white focus:outline-none focus:ring-2 focus:ring-yolo"
            >
                {text}
            </Link>
    )
}

export default HomeButton
