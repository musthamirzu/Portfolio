import AboutImg from '../assets/about.png';
export default function About() {
    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5 '>
            <div className='md:w-1/2 py-5'>
                <img src={AboutImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[180px] font-bold'>About Me</h1>
                    <p className='pb-4'>I am a Full-stack developer. I build beautiful websites with React.js and Tailwind Css.</p>
                    <p className='pb-4'>I am proficient in Frontend skills like HTMl, CSS, Tailwindcss, Bootstrap, Javascript and React.js.</p>
                    <p className='pb-4'>In backend I know Node.js, Express.js, Mongo DB and Mongoose.</p>

                </div>

            </div>

        </section>
    )
}