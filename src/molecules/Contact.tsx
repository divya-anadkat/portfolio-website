import LetsTalkImg from '../assets/lets-talk.png';

const Contact = () => {
	return (
		<section id='contact-section' className='bg-gray-50 py-36'>
			<div className='container mx-auto'>
				<h2 className='text-4xl open-sans-font font-semibold'>Let's Talk</h2>

				<div className='flex justify-between mt-24'>
					<div className='flex-[4] flex items-center'>
						<img src={LetsTalkImg} alt='lets-talk' className='w-[25%] mx-auto relative -left-6' />
					</div>
					<div className='flex-[7]'>
						<p>
							Information shared by you is protected & used for analysing project requirements only. I’ll be in touch
							with you in less than 24 hours. Thank you for reaching out!
						</p>

						{/* Contact Info */}
						<div className='flex mt-16'>
							<div className='flex-1'>
								<h3>Your Info</h3>
							</div>
							<div className='flex-[5]'>
								<input type='text' className='w-[48%] mb-6 me-[4%]' placeholder='Full Name' />
								<input type='email' className='w-[48%] mb-6' placeholder='Email Id' />
								<input type='text' className='w-[48%]' placeholder='Country' />
							</div>
						</div>

						{/* Project Info */}
						<div className='flex mt-16'>
							<div className='flex-1'>
								<h3>Project Info</h3>
							</div>
							<div className='flex-[5]'>
								<input type='text' className='w-[48%] mb-6 me-[4%]' placeholder='Project Category' />
								<input type='text' className='w-[48%] mb-6' placeholder='Budget' />
								<textarea
									className='w-full'
									rows={4}
									placeholder='Please describe your project & it requirements or share Upwork link: Purpose, Target Audience...'
								/>

								<button className='btn-primary mt-12'>Send Details</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
