import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

export interface TestimonialsInterface { }

const data = [
	{
		id: 1,
		name: 'Tina Snow',
		image: AVTR1,
		testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet mauris ut dapibus dapibus. Vestibulum eu lacus erat. Curabitur nec purus varius, posuere orci sed, laoreet enim. In lacinia fermentum cursus. Morbi egestas, felis sit amet tincidunt dictum, neque orci venenatis turpis, ac semper odio magna ut est.',
	},
	{
		id: 2,
		name: 'Shatta Wale',
		image: AVTR2,
		testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet mauris ut dapibus dapibus. Vestibulum eu lacus erat. Curabitur nec purus varius, posuere orci sed, laoreet enim. In lacinia fermentum cursus. Morbi egestas, felis sit amet tincidunt dictum, neque orci venenatis turpis, ac semper odio magna ut est.',
	},
	{
		id: 3,
		name: 'Kwame Despite',
		image: AVTR3,
		testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet mauris ut dapibus dapibus. Vestibulum eu lacus erat. Curabitur nec purus varius, posuere orci sed, laoreet enim. In lacinia fermentum cursus. Morbi egestas, felis sit amet tincidunt dictum, neque orci venenatis turpis, ac semper odio magna ut est.',
	},
	{
		id: 4,
		name: 'Nana Ama McBrown',
		image: AVTR4,
		testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet mauris ut dapibus dapibus. Vestibulum eu lacus erat. Curabitur nec purus varius, posuere orci sed, laoreet enim. In lacinia fermentum cursus. Morbi egestas, felis sit amet tincidunt dictum, neque orci venenatis turpis, ac semper odio magna ut est.',
	},
];

const Testimonials: React.FC<TestimonialsInterface> = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimoninals</h2>

			<Swiper
				className="container testimonials__container"
				// install Swiper modules
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
			
			>
				{
					data.map(({ id, name, image, testimonial }) => {
						return (
							<SwiperSlide key={id} className="testimonial">
								<div className="client__avatar">
									<img src={image} alt="Avatar One" />
								</div>
								<h5 className='client__name'>{name}</h5>
								<small className='client__review'>
									{testimonial}
								</small>
							</SwiperSlide>
						);
					})
				}
			</Swiper>
		</section>
	);
};

export default Testimonials;
