import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";

const AddTask = ({ activity }) => {

  const handleClick = async () => {
    const title = window.prompt('Enter Title:');
    if (title !== null) {
      const description = window.prompt('Enter Description:');
      if (description !== null) {
        const image = window.prompt('Enter Image URL:');
          try {
            const response = await fetch("https://trello-backend-ndbv.onrender.com/tasks", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "title": title,
                "description": description,
                "image": image,
                "activity_id": activity.id
              }),
            });

            if (!response.ok) {
              throw new Error('Network Response was not Ok');
            }

            // Show alert dialog box
            alert("New task added successfully");

            // Reload the page
            window.location.reload();

          } catch (err) {
            console.error("Error adding new task:", err);
          }
      }
    }
  };

  return (
    <div className='bg-white border-2 border-dashed font-semibold border-gray-200 rounded-lg py-16 p-4 my-2 shadow flex justify-center items-center cursor-pointer' onClick={handleClick}>
      <AiOutlinePlus className='mr-2' />
      <span>Add new Card</span>
    </div>
  );
}

export default AddTask;