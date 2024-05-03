import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div>
                <div className="flex justify-center gap-8">
                    <Link to="https://github.com/mesubasi">
                        <FaGithub className="text-white size-6" />
                    </Link>
                    <Link to="">
                        <FaInstagram className="text-white size-6" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/muhammedeminsubasi/">
                        <FaLinkedin className="text-white  size-6" />
                    </Link>
                </div>
                <div className="flex justify-center pt-10 pb-20">
                    <p className="text-white inter-medium text-[10px] leading-3 text-center">Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with React.js <br />
                        and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.</p>
                </div>
            </div>e
        </>
    )
}

export default Footer