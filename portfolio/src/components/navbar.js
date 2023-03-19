import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'

export default function Navbar() {
    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#about" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#projects" className="hover:underline">Projects</a></li>
            <li className="p-4"><a href="#links" className="hover:underline">Links</a></li>
            </ul>
        </div>
    </div>
    )
}