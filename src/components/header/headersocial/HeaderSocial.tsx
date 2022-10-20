import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi'

export interface HeaderSocialInterface { }

const HeaderSocial: React.FC<HeaderSocialInterface> = () => {
	return (
		<div className='header__socials'>
			<a href='https://www.linkedin.com/in/angel-wayar-e/' target='_blank'><BsLinkedin /></a>
			<a href='https://github.com/angelwayar?tab=repositories' target='_blank'><FaGithub /></a>
			<a href='https://www.instagram.com/angelwayar/' target='_blank'><FiInstagram/></a>
		</div>
	);
};

export default HeaderSocial;
