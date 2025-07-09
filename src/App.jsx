import React from 'react'
import socials from './assets/Group 12.png'
import bg from './assets/Rectangle 6.png'
import img2 from './assets/Rectangle 25.png'
import man1 from './assets/Bill 1.png'
import man2 from './assets/Beverly 1.png'
import man3 from './assets/Claudia 1.png'
import man4 from './assets/Avatar 1.png'



const App = () => {
  return (
    <div>
      <header className='flex bg-black text-white justify-between px-[50px] pt-[20px]'>
        <b className='font-extrabold text-[29px]'>LOGO</b>
        <ul className='flex items-center gap-[30px]'>
          <li>Home</li>
          <li>About us</li>
          <li>Portfolio</li>
          <li>News</li>
          <button className='bg-[#FA9021] w-[131px] h-[41px] rounded-[6px] text-[13px] text-white'>Contact us</button>
        </ul>
      </header>
      <main>
        <section className='bg-black flex justify-between pl-[100px] items-center py-[50px] text-white'>
          <aside className='flex flex-col gap-[50px] items-start'>
            <div className='flex items-center gap-[10px]'>
              <span className='text-white text-[12px]'>Home   ></span>
              <span className='text-[#FB9E3C] text-[12px]'>About us</span>
            </div>
            <h1 className='font-bold text-[30px]'>Lorem Ipsum is simply <br /> dummy text of the printing <br /> and.</h1>
            <p className='text-[15px]'>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s.</p>
            <button className='bg-[#FA8305] rounded-[40px] w-[176px] h-[47px] font-[500]'>Get in touch -></button>
          </aside>
          <aside>
            <img src={bg} alt="" />
          </aside>
        </section>
        <section className='bg-[#090300] py-[100px] text-white'>
          <h1 className='text-[25px] font-[600] pl-[80px]'>Why work with us</h1>
          <div className='flex justify-evenly mt-[50px]'>
            <article className='bg-[#1C140F] flex flex-col justify-center gap-[20px] items-start w-[378px] h-[348px] pl-[50px] rounded-[20px]'>
              <b className='bg-[#B000DC1C] text-[14px] py-[5px] px-[10px] rounded-[8px]'>Lorem ipsum</b>
              <h1 className='text-[20px]'>Lorem Ipsum</h1>
              <p className='text-[14px]'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s,</p>
            </article>
            <article className='bg-[#1C140F] flex flex-col justify-center gap-[20px] items-start w-[378px] h-[348px] pl-[50px] rounded-[20px]'>
              <b className='bg-[#DC42001C] text-[14px] py-[5px] px-[10px] rounded-[8px]'>Lorem ipsum</b>
              <h1 className='text-[20px]'>Lorem Ipsum</h1>
              <p className='text-[14px]'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s,</p>
            </article>
            <article className='bg-[#1C140F] flex flex-col justify-center gap-[20px] items-start w-[378px] h-[348px] pl-[50px] rounded-[20px]'>
              <b className='bg-[#00DC8D1C] text-[14px] py-[5px] px-[10px] rounded-[8px]'>Lorem ipsum</b>
              <h1 className='text-[20px]'>Lorem Ipsum</h1>
              <p className='text-[14px]'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s,</p>
            </article>
          </div>
        </section>
        <section className='bg-[#1C140F] pt-[100px] text-white flex items-center justify-around'>
          <aside>
            <img src={img2} alt="" />
          </aside>
          <aside className='flex flex-col gap-[30px]'>
            <b className='text-[16px] font-[500]'>Lorem ipsum</b>
            <h1 className='text-[28px] font-[600]'>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. </h1>
            <p className='text-[16px] font-[400]'>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy <br /> text ever since the 1500s, when an unknown printer took a galley of <br /> type and scrambled it to make a type specimen book. It has <br /> survived not only five centuries,</p>
          </aside>
        </section>
        <section className='text-white bg-[#090300] py-[100px]'>
          <h1 className='pl-[100px] font-[600] text-[25px]'>Our Team</h1>
          <div className='flex justify-center gap-[25px] mt-[50px] items-center'>
            <article className='flex flex-col gap-[10px] w-[295px] h-[253px] justify-center bg-[#1C140F] rounded-[20px] items-center'>
              <img src={man1} alt="" />
              <b className='text-[19px] font-[600]'>John peter</b>
              <p className='font-[300] text-[16px]'>COO</p>
            </article>
            <article className='flex flex-col gap-[10px] w-[295px] h-[253px] justify-center bg-[#1C140F] rounded-[20px] items-center'>
              <img src={man2} alt="" />
              <b className='text-[19px] font-[600]'>John peter</b>
              <p className='font-[300] text-[16px]'>COO</p>
            </article>
            <article className='flex flex-col gap-[10px] w-[295px] h-[253px] justify-center bg-[#1C140F] rounded-[20px] items-center'>
              <img src={man3} alt="" />
              <b className='text-[19px] font-[600]'>John peter</b>
              <p className='font-[300] text-[16px]'>COO</p>
            </article>
            <article className='flex flex-col gap-[10px] w-[295px] h-[253px] justify-center bg-[#1C140F] rounded-[20px] items-center'>
              <img src={man4} alt="" />
              <b className='text-[19px] font-[600]'>John peter</b>
              <p className='font-[300] text-[16px]'>COO</p>
            </article>
          </div>
        </section>
        <section className='bg-[#090300] pl-[130px] flex flex-col gap-[50px] py-[100px] text-white'>
          <div className='flex flex-col gap-[20px] text-white'>
            <h1 className='font-[600] text-[30px]'>Lorem Ipsum</h1>
            <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. </p>
          </div>
          <div className='bg-[#1C140F] flex justify-between items-center w-[1200px] py-[25px] px-[50px] rounded-[15px]'>
            <aside className='flex flex-col gap-[10px]'>
              <h1 className='text-[30px] font-[500]'>Stay in the loop</h1>
              <p className='text-[17px]'>Subscribe to receive the latest news and updates about TDA. <br />
                We promise not to spam you! </p>
            </aside>
            <aside className='flex items-center justify-end'>
              <input className='bg-white text-black pr-[120px] w-[385px] h-[48px] placeholder:text-[#898989] placeholder:text-[10px] placeholder:font-[300] rounded-[8px] pl-[25px]' type="email" placeholder='Enter email address' />
              <button className='absolute bg-[#DC7000] text-white rounded-[8px] mr-[5px] w-[105px] h-[37px]'>Continue</button>
            </aside>
          </div>
        </section>
      </main>
      <footer className='text-white bg-[#070707]'>
        <div className='flex items-start justify-between px-[100px] py-[50px]'>
          <article className='flex flex-col gap-[25px]'>
            <b className='font-extrabold text-[29px]'>LOGO</b>
            <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </p>
            <span>@Logo</span>
          </article>
          <ul>
            <b>About us</b> <br /> <br />
            <li>
              Zeux <br />
              Portfolio <br />
              Careers <br />
              Contact us
            </li>
          </ul>
          <article>
            <b>Contact us</b> <br /><br />
            <p>Lorem Ipsum is simply dummy text <br /> of the printing and typesetting <br /> industry. </p>
            <span>+908 89097 890</span>
          </article>
          <img className='relative left-[0px] top-[100px]' src={socials} alt="" />
        </div>
        <div className='border-t border-[#D2D2D2] py-[25px]'>
          <p className='text-center'>Copyright ® 2021 Lorem All rights Rcerved</p>
        </div>
      </footer>
    </div>
  )
}

export default App