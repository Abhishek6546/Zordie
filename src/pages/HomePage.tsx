import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

import companies from "../data/companies.json"
import Autoplay from 'embla-carousel-autoplay'

import Cards from '@/components/Cards'
import {
    Card,
    CardContent,
    CardHeader,

} from "@/components/ui/card"

import Cards2 from '@/components/Cards2'
import Footer from '@/components/Footer'

const HomePage = () => {
    return (
        <>
            <Navbar />

            {/* Header */}
            <div className="bg-black text-white h-full flex flex-col px-4  md:px-10 py-8  md:py-2 ">
                {/* Logo Section */}
                <div className="hidden md:block  mb-8 md:mb-16  md:ml-8 ">
                    <span className="text-2xl font-bold">Zordie AI</span>
                </div>

                <div className='flex flex-col md:flex-row justify-center  w-[100%] gap-4 '>
                    <div className=' md:w-[40%]  md:h-[80%]  flex  flex-col gap-4'>
                        <h2 className=" text-3xl md:text-4xl lg:5xl xl:text-6xl font-normal mb-6 text-center md:text-left ">Transform work with full-stack generative AI</h2>
                        <p className="text-xs lg:text-[15px]  text-center md:text-left  ">Build generative AI into any bussiness process with the<br></br> secure enterprise platform </p>

                        <div className=' flex justify-center md:justify-start gap-2  md:gap-4 mb-8'>
                            <Button className='bg-[#4F106E] hover:bg-[#2f0544] w-[130px]  lg:w-[213px]  lg:h-[58px] rounded-full lg:text-xl'>Request a demo</Button>
                            <Button className='bg-[#CD6AFF] hover:bg-[#56246f] w-[130px] lg:w-[213px]  lg:h-[58px] rounded-full lg:text-xl'>Start building</Button>
                        </div>
                        <div className='text-white'>
                            <p className='text-center md:text-start'>World-class enterprise trust Writer</p>
                        </div>
                    </div>

                    <div className=' md:w-[40%]  md:h-[80%] relative '>
                        <div className='w-[100%] flex justify-center'>
                            <img src="/Video.png" className=' xl:pt-4' alt="" />
                        </div>
                        <Button className=' play  w-28 h-6 flex ml-2  md:gap-2 rounded-full bg-black hover:bg-black  top-2   xl:top-8 md:w-32 lg:w-36 lg:h-8  absolute'><img src="/icons.png" alt="" /><span className='text-xs mr-6 md:text-sm'>play with sound</span></Button>

                        <div className='square bg-[#B89FD7] w-[28px] h-[28px] rounded-full flex justify-center items-center absolute right-6 bottom-2 xl:right-8'>
                            <img src="/icon2.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className='container mt-2  md:w-[80%] md:mx-auto'>
                    <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-5 px-10">
                        <CarouselContent className="flex items-center ">
                            {companies.map(({ name, id, path }) => (
                                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 px-2 sm:px-5"> {/* Padding to offset negative margins */}
                                    <img src={path} alt={name} className="w-[84px] h-[17px] sm:h-8 object-contain" />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>


            {/* Approach */}
            <div className=" min-h-screen bg-gradient-to-b from-pinkLight via-purpleDark via-70% to-pinkLight relative">

                <div className='px-2 pt-[80px] md:pt-[120px] w-full md:w-[50%] mx-auto flex flex-col gap-4 '>
                    <p className='text-center text-black font-semibold'>O U R A P P R O A C H</p>
                    <h1 className="text-3xl md:text-4xl lg:5xl  font-normal  text-center ">The integrated platform  designed for accuracy and security</h1>
                    <div className='flex justify-center items-center '>  <p className="lg:w-[75%] text-xs  md:text-md  text-center ">Building your own AI stack be slow and expensive.Writer abstracts complexity so you can focus on AI-first workflows,not maintaining infrastructure.</p></div>
                </div>

                <div className=' btns w-[80%] max-sm:top-[34%] max-sm:ml-[40px] md:w-[50%] min-h-16 bg-[#D4B2F7] flex justify-center max-sm:flex-wrap items-center md:gap-6 rounded-full mx-auto absolute  xl:left-[25%] xl:top-[32%]  py-2 '>
                    <button className='w-[45%] rounded-full text-xs md:text-sm  bg-[#D4B2F7]  text-black px-2 md:px-4  py-2  font-semibold  md:h-12  outline-none'>Code Generation</button>
                    <button className=' w-[45%] rounded-full text-xs md:text-sm bg-black text-white px-2 md:px-4 py-2  font-semibold  md:h-12  outline-none'>Knowledge Graph</button>
                    <button className=' w-[45%] rounded-full text-xs md:text-sm  bg-[#D4B2F7]  text-black px-2 py-2 md:px-4  font-semibold md:h-12  outline-none'>AI Animation</button>
                    <button className=' w-[45%] rounded-full text-xs md:text-sm bg-[#D4B2F7]  text-black px-2 py-2 md:px-4  font-semibold md:h-12  outline-none'>AI Studio</button>
                </div>

                <div className='md:w-[80%] mx-auto rounded-t-lg bg-black mt-20 max-md:pb-20 pb-32' >
                    <div className='flex flex-col  items-center gap-4  pt-[80px] px-4 lg:px-1 md:[60%] lg:w-[50%] mx-auto'>
                        <h1 className='text-white text-3xl md:text-4xl lg:5xl  font-normal  text-center'>Ground AI in your data</h1>
                        <p className='text-white text-xs  md:text-md  text-center'>Zordie AI empowers businesses to create fully functional websites in minutes. Using state-of-the-art AI technology, generate optimized, visually stunning and responsive designs tailored to your unique needs</p>

                        <Button className=' w-[160px] h-[50px] md:w-[195px] md:h-[60px] bg-[#242424] flex justify-between font-medium rounded-full mt-6'>Learn more <span className='bg-white rounded-full'><img src="/next.png" className='w-8 h-8 p-1' alt="arrow" /></span></Button>
                    </div>

                </div>
                <div className='md:w-[80%] mx-auto relative md:rounded-b-lg bg-black'>
                    <div className='relative w-[80%] mx-auto'>
                        <img src="/2bg.png" className='object-cover w-full h-full' alt="bg" />
                        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                            <img src="/2Ask.png" className='object-cover  h-full' alt="ask" />
                        </div>
                    </div>

                </div>

                {/* <div className='h-screen md:w-[80%] mx-auto rounded-lg bg-black mt-20 overflow-hidden'>
                    <div className='flex flex-col items-center gap-4 pt-[80px] px-4 lg:px-1 md:w-[60%] lg:w-[50%] mx-auto'>
                        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-normal text-center'>Ground AI in your data</h1>
                        <p className='text-white text-xs md:text-md text-center'>Zordie AI empowers businesses to create fully functional websites in minutes. Using state-of-the-art AI technology, generate optimized, visually stunning and responsive designs tailored to your unique needs</p>

                        <Button className='w-[160px] h-[50px] md:w-[195px] md:h-[60px] bg-[#242424] flex justify-between font-medium rounded-full mt-6'>Learn more <span className='bg-white rounded-full'><img src="/next.png" className='w-8 h-8 p-1' alt="arrow" /></span></Button>
                    </div>
                    <div className='relative w-[80%] mx-auto mt-[70px] md:mt-[102px]'>
                        <div className='relative'>
                            <img className='bgimg absolute bottom-0 right-0 w-full h-auto' src="/2bg.png" alt="bg" />
                        </div>
                        <div className='relative'>
                            <img src="/2Ask.png" className='ques absolute bottom-0 right-0 transform translate-x-1/2 lg:h-60 xl:h-80' alt="ask" />
                        </div>
                    </div>
                </div> */}
            </div>



            {/* Support */}
            <div className='bg-black min-h-screen  '>
                <div className='flex flex-col justify-center items-center pt-[100px] gap-4 px-4 md:w-[60%] mx-auto'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src="/section3/clip.png" className='' alt="clip" />
                        <span className='font-semibold text-white'>U S E C A S E S</span>
                    </div>

                    <div className='max-sm:w-[60%]'>
                        <img src="/section3/humans.png" alt="" />
                    </div>

                    <div >
                        <h2 className='text-white text-3xl md:text-4xl lg:5xl  font-normal  text-center'>Enpower your people.</h2>
                        <h2 className='text-white text-3xl md:text-4xl lg:5xl  font-normal  text-center'>Accelerate work</h2>
                    </div>
                    <div>
                        <p className=' text-white text-center  text-xs  md:text-md'>keep pace the needs of your bussiness.Deploy custom AI apps in a snap for any use case,including digital assistants,content generation,summarization,and data analysis.</p>

                    </div>
                </div>
                <div className=' w-[80%]  min-h-16 bg-[#6C227A] flex justify-center  items-center md:gap-6 rounded-full mx-auto px-2 py-2 md:px-2 mt-[5px] '>
                    <button className=' w-[40%] rounded-full text-xs md:text-sm  bg-black  text-white  px-1 md:px-4  py-2  font-semibold  md:h-12  outline-none'>Support</button>
                    <button className=' w-[40%] rounded-full text-xs md:text-sm bg-[#6C227A]  text-white px-1 md:px-4 py-2  font-semibold  md:h-12  outline-none'>Operations</button>
                    <button className=' w-[40%] rounded-full text-xs md:text-sm  bg-[#6C227A]  text-white px-1 py-2 md:px-4  font-semibold md:h-12  outline-none'>IT</button>
                    <button className=' w-[40%] rounded-full text-xs md:text-sm bg-[#6C227A]  text-white px-1 py-2 md:px-4  font-semibold md:h-12  outline-none'>Sales</button>
                    <button className=' w-[40%] rounded-full text-xs md:text-sm bg-[#6C227A]  text-white px-1 py-2 md:px-4  font-semibold md:h-12  outline-none'>Marketing</button>
                </div>

                <div className='flex flex-col justify-center  items-center '>
                    <div className='w-[80%] h-[60px] md:h-[70px] bg-[#D153FF] border-b-[1px] border-black  rounded-t-xl'>
                    </div>
                    <img src="/section3/Video.png" className=' rounded-b-xl w-[80%] h-[70%]' alt="video" />
                </div>

                <div className='mt-[40px] md:mt-[80px]'>
                    <div className='flex justify-center items-center'>
                        <p className='text-white w-[60%] max-sm:w-[80%] md:w-[60%] lg:w-[40%]  md:leading-relaxed text-center  text-sm  md:text-lg'>"Writer is onto something amazing. Their full-stack platform, deep customer-centricity,and high-touch approach to services truly sets them apart.Post our due dilligence,partnering with Writer was an easy decision for us."</p>
                    </div>

                    <div className='flex justify-center items-center mt-[20px]  gap-4'>
                        <div >
                            <img className='max-sm:w-[70px] max-sm:pr-[10px]' src="/section3/man.png" alt="man" />
                        </div>
                        <div className='flex flex-col max-sm:gap-0 gap-2'>
                            <h3 className='text-white font-bold'>Ajay Dhaul</h3>
                            <p className='text-white'>SVP of Data & Applied AI</p>
                            <img src="/section3/kenvue.png" alt="man" className='w-[100px]' />
                        </div>
                    </div>
                    <div className='h-[1px] bg-white mx-auto w-[80%] md:w-[30%] mt-[25px]'></div>

                    <div className='flex gap-3 justify-center  mt-[30px]'>
                        <div className='w-[38px] h-[38px] rounded-full flex justify-center items-center bg-white'>
                            <img src="/section3/Icon.png" alt="arrow" />
                        </div>
                        <div className='  w-[38px] h-[38px] rounded-full flex justify-center items-center bg-white'>
                            <img src="/section3/Icon2.png" alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>


            {/* Writer */}
            <div className="bg-black pt-12 md:pt-24  ">
                <div className=" flex flex-col items-center gap-4 md:mb-[20px] py-7">
                    <img
                        src="/section4/logo.jpg"
                        className="w-10 h-10 rounded-full"
                        alt="Logo"
                    />
                    <h1 className="font-semibold text-white text-lg tracking-wide">
                        D I F F E R E N T I A T O R S
                    </h1>
                </div>
                <div className="relative  w-full md:w-[80%] lg:w-[60%] mx-auto rounded-[100px] bg-custom-radial shadow-lg text-white md:px-6">
                    <h2 className="absolute left-4 right-4 md:left-[80px] md:right-[80px] top-[-17px] text-2xl md:text-4xl lg:text-5xl text-center">
                        Change the game with Writer
                    </h2>
                    <div className="px-4 min-h-screen pt-16  md:pt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-6 pb-[60px]">
                        {/* Card 1 */}
                        <div className="rounded-lg lg:h-[450px] xl:h-[400px] bg-white text-black p-7 ">
                            <div className="xl:w-[85%] flex flex-col gap-[10px]">
                                <img
                                    src="/section4/icon1.jpg"
                                    className="w-12 h-12 rounded-full"
                                    alt="Icon 1"
                                />
                                <h2 className="text-2xl md:text-3xl mt-4">Get accurate results</h2>
                                <p className="text-lg md:text-md mt-3 text-[#333333]">
                                    Zoidie AI are top-ranked on key benchmarks. Knowledge Graph, our code
                                    generation tool,{" "}
                                    <span className="underline">achieves higher accuracy</span> than other models.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="md:h-[360px] xl:h-[330px] rounded-lg bg-white text-black p-7">
                            <img
                                src="/section4/icon2.jpg"
                                className="w-12 h-12 rounded-full"
                                alt="Icon 2"
                            />
                            <h2 className="text-2xl md:text-3xl mt-4">Customize to your requirements</h2>
                            <p className="text-lg md:text-md mt-3 text-[#333333]">
                                Create AI apps to deliver consistent, high-quality outputs that meet your
                                requirements.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className=" rounded-lg bg-blue-500 text-black">
                            <div className="w-full h-[40px] bg-black rounded-t-lg"></div>
                            <div className="px-7 xl:w-[90%] mb-4">
                                <img
                                    src="/section4/icon3.png"
                                    className="w-12 h-12 rounded-full mt-4"
                                    alt="Icon 3"
                                />
                                <h2 className="text-2xl md:text-3xl mt-4">Operate at a fraction of a cost</h2>
                                <p className="text-lg md:text-md mt-3 text-[#333333]">
                                    Our platform architecture is scalable and significantly more
                                    cost-effective than leading alternative approaches.
                                </p>
                                <h3 className="text-4xl md:text-6xl text-white mt-6">67%</h3>
                                <p className="text-xl md:text-3xl text-white">LOWER COST</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className=" div4 xl:mt-[-70px]  md:h-[400px] xl:h-[350px] rounded-lg bg-white text-black p-7">
                            <img
                                src="/section4/icon4.jpg"
                                className="w-12 h-12 rounded-full"
                                alt="Icon 4"
                            />
                            <h2 className="text-2xl md:text-3xl mt-4">Accelerate time to value</h2>
                            <p className="text-lg md:text-md mt-3 text-[#333333]">
                                Build and deploy AI websites in days. Our services team demystifies
                                generative AI and drives AI adaptation with your people.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="h-[300px]  md:h-[340px]  rounded-lg bg-white text-black p-7">
                            <img
                                src="/section4/icon5.jpg"
                                className="w-12 h-12 rounded-full"
                                alt="Icon 5"
                            />
                            <h2 className="text-2xl md:text-3xl mt-4">Deploy the way you want</h2>
                            <p className=" text-lg md:text-md mt-3 text-[#333333]">
                                We support flexible deployment options including multi-tenant and
                                single-tenant.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className=" div6 xl:mt-[-165px]   rounded-lg bg-white text-black p-7 mb-12">
                            <img
                                src="/section4/icon6.jpg"
                                className="w-12 h-12 rounded-full"
                                alt="Icon 6"
                            />
                            <h2 className="text-2xl md:text-3xl mt-4">Stay secure and compliant</h2>
                            <p className="text-lg md:text-md mt-3 text-[#333333]">
                                Our platform is secure, suitable, and provides personalized trained
                                models. Zoidie AI adheres to privacy laws and security standards.
                            </p>
                            <div className='grid grid-cols-2 mt-5'>

                                <div className='border-t-2 border-r-2 border-[#b6a6c8]'>
                                    <img src="/section4/icon7.jpg" className='mix-blend-multiply w-40 h-40 p-3' alt="" />
                                </div>

                                <div className='border-t-2 border-[#b6a6c8]'>
                                    <img src="/section4/icon8.jpg" className='mix-blend-multiply w-40 h-40 p-3' alt="" />
                                </div>

                                <div className='border-t-2 border-r-2 border-[#b6a6c8]'>
                                    <img src="/section4/icon9.jpg" className='mix-blend-multiply w-40 h-40 p-3' alt="" />
                                </div>

                                <div className='border-t-2 border-[#b6a6c8]'>
                                    <img src="/section4/icon10.jpg" className='mix-blend-multiply w-40 h-40 p-3' alt="" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>



            {/* Capabilities */}
            <div className=' h-[1700px] md:h-[900px] xl:min-h-screen bg-black '>
                <div className='w-full min-h-screen md:pt-[80px] bg-black relative'>
                    <div className='flex  justify-center max-sm:px-4'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <img className='h-10 w-10' src="/circle/logo.png" alt="logo" />
                            <p className='text-white text-sm'>C A P A B I L I T I E S</p>
                            <p className='text-xl md:text-3xl lg:text-4xl text-white'>Maximize output and insights</p>
                        </div>
                    </div>
                    <div className="min-h-screen w-full  bg-black flex justify-center items-center max-sm:px-4">
                        <div className=" w-full md:w-[50%] min-h-screen rounded-full  lg:bg-circle-gradient shadow-2xl">
                            <div className='pt-[10px] md:w-[70%] mx-auto max-md:w-[90%]'>
                                <p className='text-white text-xs md:text-md text-center '>Writer consistently delivers high-quality output and accurate insights that reflect your brand,knowledge,and rules.</p>
                            </div>

                        </div>

                        <div className='px-6 md:px-4 grid md:grid-cols-3   md:gap-5 absolute   top-[150px]   md:top-[300px]'>
                            <Card className='lg:w-[330px] lg:h-[480px] mt-[20px] border-none '>
                                <CardHeader className='p-0 '>
                                    <div>
                                        <img src="/circle/img1.png" className='w-full h-[250px] ' alt="" />
                                    </div>

                                </CardHeader>
                                <CardContent className='flex flex-col gap-4 w-[80%] mt-2'>
                                    <div className='text-black text-sm font-semibold pt-[10px]'>C R E A T E</div>

                                    <p className='text-lg text-black'>Produce great work effortlessly</p>
                                    <p className='text-[#333333] text-xs'>Speed up bussiness processes and get highly-tailored outputs based on your use cases.</p>

                                    <div className='flex gap-3 cursor-pointer items-center'>
                                        <div className='text-md text-black'>Learn more</div>
                                        <span><img src="/arrow.png" alt="arrow" /></span>
                                    </div>
                                </CardContent>

                            </Card>
                            <Card className='lg:w-[330px] lg:h-[480px] mt-[20px] border-none '>
                                <CardHeader className='p-0 '>
                                    <div>
                                        <img src="/circle/img1.png" className='w-full h-[250px] ' alt="" />
                                    </div>

                                </CardHeader>
                                <CardContent className='flex flex-col gap-4 w-[80%] mt-2'>
                                    <div className='text-black text-sm font-semibold pt-[10px]'>C R E A T E</div>

                                    <p className='text-lg text-black'>Produce great work effortlessly</p>
                                    <p className='text-[#333333] text-xs'>Speed up bussiness processes and get highly-tailored outputs based on your use cases.</p>

                                    <div className='flex gap-3 cursor-pointer items-center'>
                                        <div className='text-md text-black'>Learn more</div>
                                        <span><img src="/arrow.png" alt="arrow" /></span>
                                    </div>
                                </CardContent>

                            </Card>
                            <Card className='lg:w-[330px]  lg:h-[480px] mt-[20px] border-none '>
                                <CardHeader className='p-0 '>
                                    <div>
                                        <img src="/circle/img1.png" className='w-full h-[250px] ' alt="" />
                                    </div>

                                </CardHeader>
                                <CardContent className='flex flex-col gap-4 w-[80%] mt-2'>
                                    <div className='text-black text-sm font-semibold pt-[10px]'>C R E A T E</div>

                                    <p className='text-lg text-black'>Produce great work effortlessly</p>
                                    <p className='text-[#333333] text-xs'>Speed up bussiness processes and get highly-tailored outputs based on your use cases.</p>

                                    <div className='flex gap-3 cursor-pointer  items-center'>
                                        <div className='text-md text-black'>Learn more</div>
                                        <span ><img src="/arrow.png" alt="arrow" /></span>
                                    </div>
                                </CardContent>

                            </Card>
                        </div>
                    </div>



                </div>
            </div>





            {/* cards */}
            <div className='bg-black'>
                <div className=' flex flex-col max-md:justify-center max-md:items-center  lg:w-full xl:w-[71%] px-6 mx-auto '>
                    <div className='flex flex-col max-md:justify-center max-md:items-center items-start'>
                        <img src="/world.png" alt="world" />
                        <span className='text-white font-semibold'>I N T E G R A T I O N S</span>
                    </div>
                    <div className='md:pt-[15px]'>
                        <h2 className='text-white text-center md:text-start text-2xl md:text-3xl lg:text-4xl '>In all the places your people work</h2>
                    </div>
                    <div className='md:pt-[15px] lg:w-[90%]  max-md:text-center'>
                        <p className='text-white text-xs md:text-md leading-loose'>Put AI apps in people’s hands wherever they work with our desktop experiences, <u>enterprise API</u>, and popular extensions, including <u>Chrome,</u> <u>Google Docs,</u> <u>Microsoft Word,</u> <u>Microsoft Outlook,</u> <u>Figma,</u> and <u>Contentful</u>.</p>
                    </div>
                </div>
            </div>
            <Cards />


            {/*bottom cards */}
            <div className='bg-black pt-20'>
                <div className=' flex flex-col max-md:justify-center max-md:items-center  lg:w-full xl:w-[71%] px-6 mx-auto '>
                    <div className='flex flex-col max-md:justify-center max-md:items-center items-start'>
                        <img src="/bottomcards/customer.png" alt="world" />
                        <span className='text-white font-semibold'>C U S T O M E R</span>
                    </div>
                    <div className='md:pt-[15px] flex '>
                        <h2 className='text-white text-center md:text-start text-2xl md:text-3xl lg:text-4xl '>See how companies run faster with Writer</h2>
                    </div>
                    <div className='md:pt-[15px] lg:w-[40%]  max-md:text-center '>
                        <p className='text-white text-xs md:text-md leading-loose'>Across industries and functions, world-class teams transform work with the Writer generative AI platform.
                            <button className=' text-white font-semibold'>Learn more <span className='font-bold'> →</span></button>
                        </p>
                    </div>
                </div>
            </div>

            <Cards2 />


            
            <div className=' h-[300px] md:h-[400px] flex justify-center items-center   bg-[linear-gradient(90deg,#C45FFF_5%,#430866_100%)]'>
                    <div className='flex flex-col gap-4 items-center justify-center px-2 md:px-4'>
                         <h3 className='text-2xl md:text-3xl lg:text-4xl  lg:w-[70%] text-center'>Accelerate growth with the full-stack generative AI platform</h3>
                         <div className='flex gap-2'>
                            <button className='text-black sm:w-[180px] bg-none border border-black hover:bg-blue-600  px-4 py-2 rounded-full font-semibold'>Request a demo</button>
                            <button className='text-white sm:w-[180px] font-semibold bg-black  px-4 py-2 hover:bg-gray-950 rounded-full'>Try for free</button>
                         </div>
                    </div>
            </div>

            {/* Footer */}
            <Footer/>
        </>
    )
}

export default HomePage