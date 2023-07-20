import React from 'react';

const BlurboxComp = () => {
	return (
		<div className="flex justify-center items-center relative top-[102px]">
			<div className="w-[263px] h-9 px-4 py-2.5 bg-[#F8F6FF] rounded-2xl shadow-inner border border-black border-opacity-5 backdrop-blur-md justify-start items-start gap-2.5 inline-flex">
				<div className="text-center flex flex-row">
					<div className="text-blue-700 text-xs font-medium leading-none">
						$BLUR{' '}
					</div>
					<div className="text-gray-700 text-xs font-medium leading-none">
						{' '}
						Lending taken to a different level
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlurboxComp;
