import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeProvider';
import CubeImgLight from '../assets/cube-abstract.png';
import CubeImgDark from '../assets/cube-abstract-dark.png';

const Header = () => {
	const { theme } = useContext(ThemeContext);
	const cubeImg = theme === 'light' ? CubeImgLight : CubeImgDark;

	return (
		<header id='main-header'>
			<div className='container mx-auto'>
				<div className='flex items-center h-full'>
					<div className='process-vision'>
						<h1 className='open-sans-font'>Define. Design. Deliver.</h1>

						<p className='quicksand-font'>
							Let’s collaborate to create innovative solutions using cutting-edge technologies in mobile app
							development, web development, and cloud infrastructure. Together, we’ll build a robust digital presence
							that empowers your brand globally!
						</p>
					</div>
					<div className='img-wrapper'>
						<img src={cubeImg} alt='cube-abstract' className='mx-auto' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
