import React from 'react';

const TextComponent = () => {
	return (
		<div className="w-96 h-48 flex-col justify-center items-center gap-3 inline-flex">
			<div className="flex-col justify-center items-center flex">
				<div className="justify-start items-center gap-7 inline-flex">
					<div className="text-center text-black text-6xl font-medium leading-10">
						The Platform{' '}
					</div>
					<div className="text-center text-black text-6xl font-medium leading-10">
						for
					</div>
				</div>
				<div className="text-center text-black text-6xl font-medium leading-10">
					Pooled Lending on Blur
				</div>
			</div>
			<div className="w-96 text-center text-gray-500 text-lg font-normal leading-snug">
				Passively earn Blur points and ETH yield by contributing to established
				NFT lenders
			</div>
		</div>
	);
};

export default TextComponent;
