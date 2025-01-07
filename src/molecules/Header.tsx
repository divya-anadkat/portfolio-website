import CubeImg from '../assets/cube-abstract.png';

const Header = () => {
	return (
		<header className='container mx-auto' id='main-header'>
			<div className='flex justify-between items-center h-full'>
				<div className='process-vision flex-1'>
					<h1 className='open-sans-font'>Define. Design. Deliver.</h1>

					<p className='text-2xl mt-16 quicksand-font'>
						Let’s collaborate to create innovative solutions using cutting-edge technologies in mobile app development,
						web development, and cloud infrastructure. Together, we’ll build a robust digital presence that empowers
						your brand globally!
					</p>
				</div>
				<div className='flex-1'>
					<img src={CubeImg} alt='cube-abstract' className='w-[75%] ml-auto' />
				</div>
			</div>
		</header>
	);
};

export default Header;
