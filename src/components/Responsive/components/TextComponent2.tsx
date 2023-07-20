import React from 'react';
import Vector from '../../../../public/static/img/vector-1.svg';
import Image from 'next/image';

const TextComponent2 = () => {
	return (
		<div className="w-[700px] h-[200px] flex-col justify-center items-center gap-3 inline-flex relative top-10">
			<div className="flex-col justify-center items-center flex">
				<div className="justify-start items-center gap-2.5 inline-flex">
					<div className="text-center text-black text-6xl font-medium leading-10">
						Peer-
					</div>
					<div className="w-[108px] h-[49px] bg-gray-50 bg-opacity-90 rounded-full border border-gray-50">
						<Image
							src={Vector}
							alt='="logo'
						/>
					</div>
					<div className="text-center text-black text-6xl font-medium leading-10">
						-Peer
					</div>
				</div>
				<div className="text-center text-black text-6xl font-medium leading-10 relative top-3">
					portfolio management
				</div>
			</div>
			<div className="w-[608px] text-center text-gray-500 text-lg tracking-tight font-medium leading-snug relative top-[24px]">
				Coolwater's innovative combination of smart contracts and a proprietary
				protocol ensures that ETH pooling is transparent, efficient, and secure.
			</div>
		</div>
	);
};

export default TextComponent2;
