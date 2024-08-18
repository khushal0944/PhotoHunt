"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

function page() {
    
    const categories = [
        "Animals",
        "Anime",
        "Brands",
        "Cars",
        "Cartoons",
        "Cartoons",
        "Celebrities",
        "Devices",
        "Devices",
        "Fortnite",
        "Games",
        "Geography",
        "Geography",
        "Holidays",
        "Holidays",
        "Motor",
        "Motor",
        "Movies",
        "Music",
        "Nature",
        "Other",
        "Pokemon",
        "Religion",
        "Religion",
        "Resolutions",
        "Resolutions",
        "Space",
        "Space",
        "Sports",
        "Superheroes",
      ];
      const router = useRouter()
    function handleClick(category: string) {
        router.push(`/categories/${category}`)
    }
    
  return (
    <>
    <div className='text-5xl mt-10 text-white text-center'>Categories</div>
    <div className='grid grid-cols-5 mt-10 mx-5 shadow-2xl' >
        {
            categories.map((category) => <button key={category} onClick={() => handleClick(category)} className='h-14 flex justify-center items-center text-xl even:text-white even:bg-gray-800 hover:scale-105 hover:text-2xl duration-100 odd:bg-gray-300 even:hover:text-black even:hover:bg-gray-500 odd:hover:text-white odd:hover:bg-gray-600 gap-x-5'>
                {category}
            </button>)
        }
    </div>
    </>
  )
}

export default page