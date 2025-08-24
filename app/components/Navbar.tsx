import Link from 'next/link';
import { FaTools } from "react-icons/fa";
import { IconType } from 'react-icons/lib';
import { SiFreelancermap } from "react-icons/si";
import { SlFolderAlt, SlHome, SlInfo } from "react-icons/sl";

interface NavItem {
    name : string;
    icon : IconType;
    link : string;
}

const Navbar = () => {
    const navItems : NavItem[] = [
        { name : 'Home' , icon : SlHome , link : '#home' },
        { name : 'About' , icon : SlInfo , link : '#about'},
        { name : 'Projects' , icon : SlFolderAlt , link : '#projects' },
        { name : 'Freelance' , icon : SiFreelancermap , link : '#freelance'},
        { name : 'Skills' , icon : FaTools , link : '#skills'},
    ]

    return (
        <nav className='sticky top-0 left-0 w-full z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm'>
            <div className='max-w-screen-xl mx-auto px-6'>
                <div className='flex justify-around items-center h-16'>
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.link} 
                            className='group flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-all'>
                            <item.icon className='h-6 w-6 mb-1 group-hover:scale-110 group-hover:text-blue-500 transition-transform duration-200'/>
                            <span className='text-xs font-medium'>{item.name}</span>
                            <span className='mt-1 w-0 h-0.5 bg-blue-500 rounded-full group-hover:w-6 transition-all duration-300'></span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar