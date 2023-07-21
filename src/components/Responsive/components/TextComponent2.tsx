import React from 'react';
import Vector from '../../../../public/static/img/vector.svg';
import Image from 'next/image';
import Vector1 from '../../../../public/static/img/vector-1.svg';

const TextComponent2 = () => {
	return (
		<div className="flex justify-center items-center relative md:top-[200px] top-[150px]">
			<div className="w-[700px] h-[200px] flex-col justify-center items-center gap-3 inline-flex relative top-10">
				<div className="flex-col justify-center items-center flex">
					<div className="justify-start items-center gap-2.5 inline-flex">
						<div className="text-center text-black text-4xl md:text-6xl font-medium leading-10">
							Peer-
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
						<div className="text-center text-black text-4xl md:text-6xl font-medium leading-10">
							-Peer
						</div>
					</div>
					<div className="text-center text-black text-4xl md:text-6xl font-medium leading-10 relative top-3">
						portfolio management
					</div>
				</div>
				<div className="md:w-[608px] w-[354px] text-center text-gray-500 md:text-lg tracking-tight font-medium leading-snug relative top-[24px] text-sm">
					Coolwater's innovative combination of smart contracts and a
					proprietary protocol ensures that ETH pooling is transparent,
					efficient, and secure.
				</div>
			</div>
		</div>
	);
};

export default TextComponent2;
