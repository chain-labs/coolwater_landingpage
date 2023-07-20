import React from 'react';
import TextComponent from './components/TextComponent';
import Box1 from './components/Box1';
import Box3 from './components/Box3';
import Box2 from './components/Box2';
import BlurboxComp from './components/BlurboxComp';
import TextComponent2 from './components/TextComponent2';
import Box4 from './components/Box4';
import BannerComp from './components/BannerComp';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Image from 'next/image';
import BackgroundImage from '../../../public/static/img/group-1171274935.png';

const LandingPage = () => {
	return (
		<div>
			<div>
				<Image
					className="w-[120%] self-stretch absolute"
					src={BackgroundImage}
					alt="image"
				/>
			</div>
			<Navbar />
			<BlurboxComp />
			{/* <TextComponent /> */}
			<div className="flex flex-row items-center justify-center relative top-[160px] gap-4">
				<Box1 />
				<div className="flex flex-col items-center justify-center relative">
					<Box2 />
					<Box3 />
				</div>
			</div>
			{/* <TextComponent2 /> */}
			<Box4 />
			<BannerComp />
			<Footer />
		</div>
	);
};

export default LandingPage;
