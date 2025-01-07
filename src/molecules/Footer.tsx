import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeProvider';

import BrandImg from '../assets/brand.jpg';
import WhatsappImg from '../assets/whatsapp.png';
import GithubImgLight from '../assets/github-light.png';
import GithubDarkLight from '../assets/github-dark.png';
import DribbbleImg from '../assets/dribbble.png';
import UpworkImg from '../assets/upwork.png';
import GmailImg from '../assets/gmail.png';

const Footer = () => {
	const { theme } = useContext(ThemeContext);

	const socialMedia = [
		{ id: 'Whatsapp', img: WhatsappImg },
		{ id: 'Gmail', img: GmailImg },
		{ id: 'Upwork', img: UpworkImg },
		{ id: 'Github', img: theme === 'light' ? GithubImgLight : GithubDarkLight },
		{ id: 'Dribbble', img: DribbbleImg },
	];

	return (
		<footer className='py-10'>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center'>
					{/* Brand */}
					<div className='flex-1 flex items-center space-x-6'>
						<div>
							<img src={BrandImg} alt='brand' className='w-16 h-16 rounded-full' />
						</div>
						<div>
							<p id='brand-name' className='open-sans-font font-semibold'>
								Divya Anadkat
							</p>
							<p id='brand-country' className='open-sans-font'>
								🇮🇳 India
							</p>
						</div>
					</div>

					{/* Social Media */}
					<div className='flex-1'>
						<ul className='flex items-center space-x-16 justify-center rounded-md py-4'>
							{socialMedia.map((sm) => (
								<li key={sm.id}>
									<a href='#' className='open-sans-font'>
										<img src={sm.img} alt={sm.id} title={sm.id} className='w-8 h-8' />
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Back to top */}
					<div className='flex-1 text-right'>
						<a href='#main-header'>Back to top</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
