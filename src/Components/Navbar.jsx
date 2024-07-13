import { CiSearch, CiCirclePlus } from "react-icons/ci";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";

function Navbar() {
    return (
        <div className='h-10 flex justify-between items-center border-b p-2'>
            <div className='flex items-center'>
                <img className="w-70 h-6 border-r-2 border-gray-300 pr-2 hidden sm:block" src="../public/trello.png" alt="Trello" />
                <div className='hidden sm:flex items-center border-r-2 border-gray-300 px-5'>
                    <img className="h-5" src="../public/trello-mark-blue.png" alt="Trello Mark" />
                    <span className='text-sm'>Boards</span>
                </div>
                <div className="flex items-center w-full">
                    <input className="mx-6 w-full sm:w-96 border-2 bg-gray-100 rounded-xl pl-2" type="text" placeholder="Search" />
                    <CiSearch className='-translate-x-12' />
                </div>
            </div>
            <div className='flex items-center'>
                <div className="flex space-x-2">
                    <CiCirclePlus className="cursor-pointer" />
                    <HiOutlineExclamationCircle className="cursor-pointer" />
                    <IoIosNotificationsOutline className="cursor-pointer" />
                </div>
                <div className='ml-4'>
                    <img className="h-8" src="../../User.png" alt="User" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;

