import React from 'react';
import Vector from '../../../../public/static/img/vector.svg';
import Vector1 from '../../../../public/static/img/vector-1.svg';

import Image from 'next/image';

const TextComponent = () => {
	return (
		<div className="flex justify-center items-center relative top-[114px]">
			<div className="w-[680px] h-[200px] flex-col justify-center items-center gap-3 inline-flex">
				<div className="flex-col justify-center items-center flex">
					<div className="justify-start items-center gap-3 inline-flex">
						<div className="text-center text-black md:text-6xl font-medium leading-10 text-4xl ">
							The Platform{' '}
						</div>
						<div className="invisible md:visible hidden md:flex">
							<Image
								src={Vector}
								alt='="logo'
							/>
						</div>
						<div className="visible flex md:invisible md:hidden">
							<Image
								src={Vector1}
								alt='="logo'
							/>
						</div>
						<div className="text-center text-black md:text-6xl font-medium leading-10 text-4xl ">
							for
						</div>
					</div>
					<div className="text-center text-black md:text-6xl text-4xl font-medium leading-10 relative md:top-[14px] top-[10px]">
						Pooled Lending on Blur
					</div>
				</div>
				<div className="md:w-[502px] sm:w-[354px] text-center text-gray-500 text-lg font-normal leading-snug relative md:top-[20px] sm:text-sm top-[10px]">
					Passively earn Blur points and ETH yield by contributing to
					established NFT lenders
				</div>
			</div>
		</div>
	);
};

export default TextComponent;
