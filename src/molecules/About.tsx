import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeProvider';
import AboutImg from '../assets/about.png';
import GridImgLight from '../assets/grid-light.png';
import GridImgDark from '../assets/grid-dark.png';

const About = () => {
	const { theme } = useContext(ThemeContext);
	const gridImg = theme === 'light' ? GridImgLight : GridImgDark;

	return (
		<section id='about-section'>
			<div className='container mx-auto'>
				<h2 className='open-sans-font font-semibold'>About Us</h2>

				<div className='flex justify-between mt-24'>
					<div className='flex-1'>
						<img src={AboutImg} alt='about-us' className='about-img w-[75%]' />
					</div>
					<div className='flex-1 flex flex-col justify-center relative'>
						<img src={gridImg} alt='grid' className='grid-img absolute -top-[10%] -right-10 w-[45%]' />
						<p>
							I am a passionate UI/UX and Full Stack Developer dedicated to creating immersive digital experiences
							across web, mobile, and cloud platforms. I follow an agile design and development process that blends
							simplicity with innovation, ensuring impactful solutions tailored to your needs.
						</p>

						<p className='subtitle'>I'm thrilled to assist you in getting started!</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
