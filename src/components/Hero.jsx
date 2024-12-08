import { logo } from '../assets' 

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Logo" className='w-28'/>

        <button type='button' onClick={() => window.open('https://github.com/Alavi-Sadaf')} className='white_btn'>
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Get the Key Points With <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAi GPT-4</span>
      </h1>
      <h2 className='desc'>
        Crux, powered by OpenAI GPT-4, simplifies long articles into clear, concise summaries. Get key insights quickly and effortlessly—perfect for staying informed without wasting time.
      </h2>
    </header>
  )
}

export default Hero