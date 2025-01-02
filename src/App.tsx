import Navbar from './molecules/Navbar';
import Header from './molecules/Header';
import About from './molecules/About';
import Services from './molecules/Services';
import Contact from './molecules/Contact';
import Footer from './molecules/Footer';

const App = () => {
	return (
		<main className='container mx-auto'>
			<Navbar />
			<Header />
			<About />
			<Services />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
