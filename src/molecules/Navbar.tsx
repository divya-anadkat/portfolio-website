const Navbar = () => {
	return (
		<nav id='navbar' className='flex justify-between items-center h-24 container mx-auto'>
			<a href='#' id='brand' className='lobster-font'>
				DIV Anadkat
			</a>
			<ul className='flex items-center gap-x-24 quicksand-font font-medium'>
				<li>
					<a href='#about-section'>About</a>
				</li>
				<li>
					<a href='#services-section'>Services</a>
				</li>
				<li>
					<a href='#services-section'>Projects</a>
				</li>
				<li>
					<a id='nav__connect-btn' href='#connect-section' className='px-8 py-3 rounded-md'>
						<span className='font-bold'>Connect</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
