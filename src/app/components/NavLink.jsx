import Link from 'next/link';
const NavLink = ({href, title}) =>{
    return(

        <Link href= {href}
        className= " block py-2 pl-3 pr-4 text-[#292a2c] sm:text-xl rounded md:p-0 hover:text-gray-500 dark:bg-black dark:text-white"
                 >
                    {title}
                    </Link>
    )
}
export default NavLink;