import React from 'react';
import { BiMessageDots } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const Task = ({ task }) => {
    const handleDeleteTask = async () => {
        try {
            const response = await fetch(`https://trello-backend-ndbv.onrender.com/tasks/${task.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network Response was not Ok');
            }
            
            alert("Task removed successfully");

            // Reload the page
            window.location.reload();

        } catch (err) {
            console.error("Error deleting task:", err);
        }
    };

    return (
        <div className='bg-gray-100 p-4 my-2 rounded-lg shadow'>
            {task.image && (
                <img className="w-full h-32 object-cover rounded-t-lg" src={task.image} alt="Task" />
            )}
            <div className='flex justify-between mt-2'>
                <div className='flex justify-start'>
                    <div className='w-12 h-2 bg-red-500 rounded-full mr-2'></div>
                    <div className='w-12 h-2 bg-blue-500 rounded-full mr-2'></div>
                    <div className='w-12 h-2 bg-green-500 rounded-full'></div>
                </div>
                <RiDeleteBinLine className='cursor-pointer' onClick={handleDeleteTask} />
            </div>
            <div className='font-semibold mt-2'>
                {task.title}
            </div>
            <div className=''>
                {task.description}
            </div>
            <div className='flex justify-between items-center mt-5'>
                <img className="h-8" src="../../User.png" alt="" />
                <div className='flex text-md w-36 justify-around items-center'>
                    <div className='flex items-center'>
                        <span>22</span>
                        <BiMessageDots className='cursor-pointer'/>
                    </div>
                    <div className='flex items-center'>
                        <span>22</span>
                        <FaRegHeart className='cursor-pointer' />
                    </div>
                    <div className='flex items-center'>
                        <span>22</span>
                        <FiPaperclip className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;
