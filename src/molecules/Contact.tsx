import { useEffect, useRef, useState } from 'react';
import LetsTalkImg from '../assets/lets-talk.png';
import Spinner from '../atoms/Spinner';

const Contact = () => {
	const [formStatus, setFormStatus] = useState<string>('');
	const formRef = useRef<HTMLFormElement>(null);
	const iframeRef = useRef<HTMLIFrameElement>(null);

	useEffect(() => {
		const form = formRef.current;
		if (form) {
			form.target = 'my-response-iframe';
			const iframe = iframeRef.current;
			if (iframe) {
				iframe.onload = function () {
					setFormStatus('success');
				};
			}
		}
	}, []);

	const handleSubmit = () => {
		setFormStatus('submitted');
	};

	return (
		<section id='contact-section' className='py-36 h-svh'>
			<div className='container mx-auto'>
				<h2 className='text-4xl open-sans-font font-semibold'>Let's Talk</h2>

				<div className='flex justify-between mt-24'>
					<div className='flex-[4] flex items-center'>
						<img src={LetsTalkImg} alt='lets-talk' className='w-[25%] mx-auto relative -left-16' />
					</div>
					<div className='flex-[7]'>
						<p>
							Information shared by you is protected & used for analysing project requirements only. I’ll be in touch
							with you in less than 24 hours. Thank you for reaching out!
						</p>

						{/* Contact Info */}
						<form
							action='https://docs.google.com/forms/d/e/1FAIpQLSfrZ8Fc3L83_iACwMFRzGCpoDGSCXrRttRg8uW4Pb78lo11tQ/formResponse'
							target='my-response-iframe'
							method='post'
							ref={formRef}
							onSubmit={handleSubmit}>
							<div className='flex mt-16'>
								<div className='flex-1'>
									<h3>Your Info</h3>
								</div>
								<div className='flex-[5]'>
									<input
										type='text'
										name='entry.1752787179'
										className='w-[48%] mb-6 me-[4%]'
										placeholder='Full Name'
										readOnly={formStatus !== ''}
										required
									/>
									<input
										type='email'
										name='entry.220551578'
										className='w-[48%] mb-6'
										placeholder='Email Id'
										readOnly={formStatus !== ''}
										required
									/>
									<input
										type='text'
										name='entry.1960163825'
										className='w-[48%]'
										placeholder='Country'
										readOnly={formStatus !== ''}
										required
									/>
								</div>
							</div>

							{/* Project Info */}
							<div className='flex mt-16'>
								<div className='flex-1'>
									<h3>Project Info</h3>
								</div>
								<div className='flex-[5]'>
									<input
										type='text'
										name='entry.64303406'
										className='w-[48%] mb-6 me-[4%]'
										placeholder='Project Category'
										readOnly={formStatus !== ''}
										required
									/>
									<input
										type='text'
										name='entry.1296522815'
										className='w-[48%] mb-6'
										placeholder='Budget'
										readOnly={formStatus !== ''}
										required
									/>
									<textarea
										className='w-full'
										name='entry.1976182367'
										rows={4}
										placeholder='Please describe your project & it requirements or share Upwork link: Purpose, Target Audience...'
										readOnly={formStatus !== ''}
										required
									/>

									<button className='btn-primary mt-12 flex justify-center' type='submit' disabled={formStatus !== ''}>
										{formStatus === 'submitted' && <Spinner />}
										<span className='relative bottom-[2px]'>
											{formStatus === '' && 'Send Details'}
											{formStatus === 'submitted' && 'Sending..'}
											{formStatus === 'success' && 'Success'}
										</span>
									</button>
								</div>
							</div>
						</form>
						<iframe ref={iframeRef} id='my-response-iframe' name='my-response-iframe'></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
