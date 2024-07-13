import React, { useEffect, useState } from 'react';
import Activity from './Activity';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await fetch("https://trello-backend-ndbv.onrender.com/activities");
                if (!response.ok) {
                    throw new Error('Network Response was not Ok');
                }
                const data = await response.json();
                setActivities(data);
            } catch (err) {
                console.error("Error fetching activities:", err);
            }
        };

        fetchActivities();
    }, []);

    return (
        <div className='relative'>
            <div className='flex flex-nowrap bg-white px-2 mt-2 overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400'>
                {activities.map((activity) => (
                    <Activity key={activity.id} activity={activity} />
                ))}
            </div>
        </div>
    );
}

export default Activities;
