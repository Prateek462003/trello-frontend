import React, { useState, useEffect } from 'react';
import { BsThreeDots } from "react-icons/bs";
import Task from './Tasks';
import AddTask from './AddTask';

const Activity = ({ activity }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch(`https://trello-backend-ndbv.onrender.com/activities/${activity.id}`);
                if (!response.ok) {
                    throw new Error('Network Response was not Ok');
                }
                const data = await response.json();
                setTasks(data);
            } catch (err) {
                console.error("Error fetching activities:", err);
            }
        };

        fetchTasks();
    }, [activity.id]);

    return (
        <div className='p-4 w-full sm:w-[362px] flex-shrink-0'>
            <div className='flex bg-gray-100 rounded-lg justify-between items-center mb-4 p-2'>
                <span>{activity.name}</span>
                <BsThreeDots className='cursor-pointer' />
            </div>
            {tasks.length === 0 ? (
                <AddTask activity={activity} />
            ) : (
                <>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                    <AddTask activity={activity} />
                </>
            )}
        </div>
    );
}

export default Activity;
