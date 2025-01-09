import ThemeSwitch from '../atoms/ThemeSwitch';

const Navbar = () => {
	return (
		<nav id='navbar'>
			<div className='container mx-auto flex'>
				<a href='#' id='brand' className='lobster-font'>
					DIV Anadkat
				</a>
				<ul className='flex items-center quicksand-font font-medium'>
					<li>
						<a href='#about-section'>About</a>
					</li>
					<li>
						<a href='#services-section'>Services</a>
					</li>
					<li>
						<ThemeSwitch />
					</li>
					<li>
						<a id='nav__connect-btn' href='#contact-section' className='rounded-md'>
							<span className='font-bold'>Connect</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
