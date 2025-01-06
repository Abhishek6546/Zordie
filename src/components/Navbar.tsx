import  { useState } from 'react'
import { Button } from './ui/button'

const Navbar = () => {

    const [menu, setmenu] = useState<boolean>(false);
    return (
        <div>
            <div className='h-[60px]   bg-[linear-gradient(5deg,#3F105D_5%,#FFB4F8_100%)] flex items-center justify-between'>
                <img src="/logo.png" alt="logo" />
                <div>
                    <p className='text-black text-xs md:text-sm'>Knowledge Graph ranks first in new RAG benchmarking. <span className='font-bold text-black'>Learn more</span></p>
                </div>
                <div className='w-[30px] h-[30px] flex items-center justify-center mx-4'>
                    <div className='bg-[#202020] h-[30px] w-[30px] border-none rounded-full flex items-center justify-center relative'>
                        <span className='text-white'>X</span>
                    </div>
                </div>
            </div>

            {/* navbar */}
            
          
            <nav className=" bg-black text-white p-4 flex justify-between  md:justify-end items-center gap-6">
            <span className="  md:hidden text-2xl font-bold">Zordie AI</span>
                <div className='hidden md:block'>
                    <div className='flex items-center gap-4 '>
                        <ul className="flex space-x-6 font-semibold ">
                            <li><a href="#" className="hover:text-gray-300">HOME</a> <span className="h-2 w-2  mx-1 text-white ">-</span></li>
                            <li><a href="#" className="hover:text-gray-300">Products</a> <span className="h-2 w-2  mx-1 text-white ">-</span></li>
                            <li><a href="#" className="hover:text-gray-300">Pricing</a> </li>
                            <li><a href="#" className="hover:text-gray-300">Marketplace</a></li>
                            <li><a href="#" className="hover:text-gray-300">Resources</a> <span className="h-2 w-2  mx-1 text-white ">-</span></li>
                        </ul>
                        <div className="flex space-x-4 ">
                            <Button className='bg-[#930EAD] hover:bg-[#7D169C] rounded-3xl'>
                                Request a demo
                            </Button>
                            <Button className='bg-black hover:bg-black'>
                                Sign in
                            </Button>
                        </div>
                    </div>
                </div>

                <div onClick={() => setmenu(!menu)} className='md:hidden'>
                    {menu ? '✕' : "☰"}
                </div>
            </nav>

            {/* mobile navbar */}
            {menu && <nav className=" bg-black text-white p-4 flex z-10 h-[80%] justify-center items-center gap-6">

                <div className='flex flex-col items-center justify-center gap-4 '>
                    <ul className="flex flex-col  gap-4 font-semibold ">
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-gray-300">HOME</a> <span className="h-2 w-2  mx-1 text-white ">-</span></li>
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-gray-300">Products</a> <span className="h-2 w-2  mx-1 text-white ">-</span></li>
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-gray-300">Pricing</a> </li>
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-gray-300">Marketplace</a></li>
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-gray-300">Resources</a> <span className="h-2 w-2  mx-1 text-white ">-</span></li>
                    </ul>
                    <div className="flex flex-col justify-center items-start ">
                        <Button onClick={() => setmenu(!menu)} className='bg-[#930EAD] hover:bg-[#7D169C] rounded-3xl'>
                            Request a demo
                        </Button>
                        <Button onClick={() => setmenu(!menu)} className='bg-black hover:bg-black ml-2'>
                            Sign in
                        </Button>
                    </div>
                </div>
            </nav>}

        </div>
    )
}

export default Navbar