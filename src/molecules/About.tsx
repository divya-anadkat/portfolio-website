import AboutImg from '../assets/about.png';
import GridImg from '../assets/grid.png';

const About = () => {
	return (
		<section id='about-section' className='bg-gray-50 py-36'>
			<div className='container mx-auto'>
				<h2 className='text-4xl open-sans-font font-semibold'>About Us</h2>

				<div className='flex justify-between mt-20'>
					<div className='flex-1'>
						<img src={AboutImg} alt='about-us' className='w-[75%]' />
					</div>
					<div className='flex-1 flex flex-col justify-center relative'>
						<img src={GridImg} alt='grid' className='absolute -top-[20%] -right-5 w-[40%]' />
						<p>
							I am a passionate UI/UX and Full Stack Developer dedicated to creating immersive digital experiences
							across web, mobile, and cloud platforms. I follow an agile design and development process that blends
							simplicity with innovation, ensuring impactful solutions tailored to your needs.
						</p>

						<p className='subtitle mt-14'>I'm thrilled to assist you in getting started!</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
