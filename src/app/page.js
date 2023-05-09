import Image from 'next/image'
import {AiFillStar} from 'react-icons'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-[#15161c]">
      <div className='h-[400px] w-[500px] flex flex-col bg-[#1f2230] rounded-lg px-8'>
        <section className='h-12 w-12 bg-[#292d40] rounded-full flex justify-center items-center my-8'>
          <svg className='h-[28px] w-[28px]' color="orange" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
        </section>
        <h1 className='text-white text-3xl'>How did we do?</h1>
        <p className='text-gray-400 text-md my-4'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className='flex gap-12 text-gray-400'>
          <section className='hover:bg-orange-500 text-white ease-in-out duration-200 cursor-pointer h-12 w-12 bg-[#292d40] rounded-full justify-center items-center flex'>1</section>
          <section className='hover:bg-orange-500 text-white ease-in-out duration-200 cursor-pointer h-12 w-12 bg-[#292d40] rounded-full justify-center items-center flex'>2</section>
          <section className='hover:bg-orange-500 text-white ease-in-out duration-200 cursor-pointer h-12 w-12 bg-[#292d40] rounded-full justify-center items-center flex'>3</section>
          <section className='hover:bg-orange-500 text-white ease-in-out duration-200 cursor-pointer h-12 w-12 bg-[#292d40] rounded-full justify-center items-center flex'>4</section>
          <section className='hover:bg-orange-500 text-white ease-in-out duration-200 cursor-pointer h-12 w-12 bg-[#292d40] rounded-full justify-center items-center flex'>5</section>
        </div>
        <button className='w-90 h-12 bg-orange-500 rounded-3xl my-8 text-white hover:bg-white hover:text-orange-500 ease-in-out duration-200'>SUBMIT</button>
      </div>
    </main>
  )
}

