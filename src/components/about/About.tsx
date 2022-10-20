import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me-about.jpg';
import './About.css';

export interface AboutInterface { }

const About: React.FC<AboutInterface> = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className='about__me'>
					<div className="about__me-image">
						<img src={ME} alt="About Image" />
					</div>
				</div>
				<div className="about_content">
					<div className="about__cards">
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>3+ Years Working</small>
						</article>
						
						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>200+ Worldwide</small>
						</article>

						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>80+ Completed</small>
						</article>
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet mauris ut dapibus dapibus.
						Vestibulum eu lacus erat. Curabitur nec purus varius, posuere orci sed, laoreet enim. In lacinia fermentum cursus.
						Morbi egestas, felis sit amet tincidunt dictum, neque orci venenatis turpis, ac semper odio magna ut est.
						
					</p>

					<a href='#contact' className='btn btn-primary'>Let's Talk</a>
				</div>
			</div>
		</section>
	);
};

export default About;