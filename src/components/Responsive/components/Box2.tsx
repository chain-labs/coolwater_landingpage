import React from 'react';

const Box2 = () => {
	return (
		<div className="w-[411px] h-48 relative">
			<div className="w-[411px] h-48 left-0 top-0 absolute bg-gray-50 rounded-lg border border-gray-100"></div>
			<div className="left-[20px] top-[135px] absolute flex-col justify-start items-start gap-1 inline-flex">
				<div className="text-gray-700 text-base font-semibold leading-tight">
					Calculate your $BLUR value
				</div>
				<div className="text-gray-500 text-xs font-medium leading-none">
					Calculate your expected returns using our calculator
				</div>
			</div>
			<div className="left-[20px] top-[45px] absolute flex-col justify-start items-end gap-2 inline-flex">
				<div className="w-44 text-zinc-950 text-xl font-medium leading-normal">
					1.0123 ETH
				</div>
				<div className="w-96 justify-start items-center gap-2 inline-flex">
					<div className="text-center text-neutral-400 text-xs font-normal leading-3">
						0.00 ETH
					</div>
					<div className="grow shrink basis-0 pr-28 bg-zinc-100 rounded-full flex-col justify-center items-start inline-flex">
						<div className="w-48 h-1.5 relative bg-gray-700 rounded-full">
							<div className="w-5 h-5 left-[184px] top-[-7px] absolute bg-white rounded-full border-2 border-gray-700"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Box2;
