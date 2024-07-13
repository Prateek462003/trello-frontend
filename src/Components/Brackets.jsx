import React from 'react';
import { CiHeart } from "react-icons/ci";
import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";

const Brackets = () => {
    return (
        <div className='px-2 mt-5 flex justify-between items-center'>
            <div className='flex items-center w-full justify-between'>
                <div className='flex justify-between items-center'>
                    <span className='text-lg font-semibold'>
                        Brackets
                    </span>
                    <div className='flex space-x-2 mx-8'>
                        <div className='flex justify-center items-center'>
                            <CiHeart className='border-r-2' />
                            <div className='flex mx-2 items-center'>
                                <IoEarthOutline />
                                <span className='border-r-2'>Public</span>
                            </div>
                            <CiLock className='mx-2' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <img className="h-8 mx-12" src="../../public/Users.png" alt="" />
                    <span>Menu</span>
                </div>
            </div>
        </div>
    );
}

export default Brackets;
