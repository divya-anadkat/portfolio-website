import DesignServiceImg from '../assets/design-service.png';
import CodeServiceImg from '../assets/code-service.png';
import DeliverServiceImg from '../assets/deliver-service.png';

const Services = () => {
	const services = [
		{
			id: 'design',
			img: DesignServiceImg,
			title: 'Design',
			body: 'From Wireframing to Prototyping, a complete UI design process tailored for your app. An attention seeking & efficient design is the one where users need to spend least time & get useful information you would want to convey. Rock-solid Usability tests helps in building user experience for larger target audience.',
			subtitle: 'Wireframing, UI design, Prototyping, & Usability tests',
		},
		{
			id: 'code',
			img: CodeServiceImg,
			title: 'Code',
			body: 'Writing code for app to deliver immersive experience with speed is the key aspect for users to stick and interact with your app. It essentially begins with building design elements and typography. This helps in keeping the code modular and maintainable. Also allowing quicker testing and debugging backed by Performance Report.',
			subtitle: 'Modular Elements, Code Structuring & Performance Report',
		},
		{
			id: 'deliver',
			img: DeliverServiceImg,
			title: 'Deliver',
			body: 'Agile Development can be tricky if commits are unplanned. Timely Delivery without any compromise in code quality. Deploying pre-coded web apps could be as fast as 45 minutes including Domain integration! Experienced with popular Hosting & Domain registerations platforms like Digital Ocean, AWS, Netlify, Godaddy, & Namecheap.',
			subtitle: 'Supports Agile Development, Hosting & Domain Integration',
		},
	];

	return (
		<section id='services-section'>
			<div className='container mx-auto'>
				<h2 className='open-sans-font font-semibold'>Services</h2>

				<div className='cards mt-24'>
					{services.map((svc) => (
						<div key={svc.id} className='service-card'>
							<div className='infographic flex-[4] flex justify-center items-center'>
								<img src={svc.img} alt={`${svc.id}-service`} />
							</div>
							<div className='flex-1'></div>
							<div className='infographic-text flex-[10] pe-4'>
								<h3 className='mb-8'>{svc.title}</h3>
								<p>{svc.body}</p>
								<p className='subtitle mt-8'>{svc.subtitle}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
