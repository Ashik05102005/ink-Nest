import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import {
  BookOpen,
  Book,
  User,
  BriefcaseBusiness,
  CodeXml,
  Landmark,
  Heart,
  Ellipsis
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

function Categories() {

  const navigate = useNavigate()

  const list =[
    {
    image: "src/assets/category/selfhelp.png",
    btnColor: "#FFD84D",
    btnBg: "#4A3708",
  },
  {
    image: "src/assets/category/fiction.png",
    btnColor: "#7EA8FF",
    btnBg: "#1B2F66",
  },
  {
    image: "src/assets/category/business.png",
    btnColor: "#2EE5C7",
    btnBg: "#0E514A",
  },
  {
    image: "src/assets/category/programming.png",
    btnColor: "#B985FF",
    btnBg: "#44246D",
  },
  {
    image: "src/assets/category/history.png",
    btnColor: "#E4B07A",
    btnBg: "#6B4321",
  },
  {
    image: "src/assets/category/love.png",
    btnColor: "#FF7DAE",
    btnBg: "#7B2147",
  },

  ]

  const categoryButtons = [
  {
    id: 1,
    name: "All Books",
    icon: BookOpen,
    active: true,
    border: "border-green-800/60",
    bg: "bg-green-800/15",
    text: "text-green-800",
    hover: "hover:bg-amber-500/20"
  },
  {
    id: 2,
    name: "Fiction",
    icon: Book,
    active: false,
    border: "border-slate-700",
    bg: "bg-transparent",
    text: "text-gray-300",
    hover: "hover:bg-slate-800 hover:text-white"
  },
  {
    id: 3,
    name: "Self Help",
    icon: User,
    active: false,
    border: "border-slate-700",
    bg: "bg-transparent",
    text: "text-gray-300",
    hover: "hover:bg-slate-800 hover:text-white"
  },
  {
    id: 4,
    name: "Business",
    icon: BriefcaseBusiness,
    active: false,
    border: "border-slate-700",
    bg: "bg-transparent",
    text: "text-gray-300",
    hover: "hover:bg-slate-800 hover:text-white"
  },
  {
    id: 5,
    name: "Programming",
    icon: CodeXml,
    active: false,
    border: "border-slate-700",
    bg: "bg-transparent",
    text: "text-gray-300",
    hover: "hover:bg-slate-800 hover:text-white"
  },
  {
    id: 6,
    name: "History",
    icon: Landmark,
    active: false,
    border: "border-slate-700",
    bg: "bg-transparent",
    text: "text-gray-300",
    hover: "hover:bg-slate-800 hover:text-white"
  },
  {
    id: 7,
    name: "Romance",
    icon: Heart,
    active: false,
    border: "border-slate-700",
    bg: "bg-transparent",
    text: "text-gray-300",
    hover: "hover:bg-slate-800 hover:text-white"
  },
  {
    id: 8,
    name: "More",
    icon: Ellipsis,
    active: false,
    border: "border-slate-700",
    bg: "bg-transparent",
    text: "text-gray-300",
    hover: "hover:bg-slate-800 hover:text-white"
  }
];
  return (
    <div>
      <div className='flex flex-col items-center mt-5 mx-3'>
        <h1 className='text-3xl'> Browse by Category</h1>
        <p className='text-gray-600'>Explore books across your favourite genres</p>
        <div className='flex  overflow-x-scroll max-w-full hide-scrollbar gap-2 mt-4 mx-3'>
          {categoryButtons.map((item) => {
          const Icon = item.icon;
          return (
            <button
                    key={item.id}
                    className={`flex w-fit items-center gap-2 rounded-full border px-4 py-1 transition-all duration-300 `}
                    
                  >
                    <Icon size={18} />
                    <p className='w-25'>{item.name}</p>
                  </button>
                );
              })}
        </div>
      </div>
      <div className='flex justify-center'>
        <div
        className='my-3 min-h-50  mx-3 flex overflow-auto hide-scrollbar'
        >
          {list.map((item)=>(
            <div
            key={item.image}
            className='min-w-60 relative'>
              <img 
              className='p-2 h-120 sm:h-140 md:h-160  rounded-3xl w-60'
              src={item.image}></img>
              <div className='absolute sm:bottom-8 bottom-5 w-full  flex justify-center'>
                  <button
                    className="flex items-center justify-center gap-2
                    rounded-xl px-5 py-2
                    font-medium text-base
                    transition-all duration-300
                    border"
                    style={{
                      backgroundColor: item.btnBg,
                      color: item.btnColor,
                      borderColor: item.btnColor,
                    }}
                    onClick={()=>navigate('/products')}
                  >
                    Explore
                    <HiArrowRight className="text-lg" />
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  </div>
  )
}

export default Categories