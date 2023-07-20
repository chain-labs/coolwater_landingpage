import React from 'react';

const Box1 = () => {
	return (
		<div className="w-56 h-44 p-4 flex-col justify-start items-start gap-4 inline-flex">
			<div className="w-8 h-8 px-2 py-1.5 bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex"></div>
			<div className="self-stretch grow shrink basis-0 flex-col justify-between items-start gap-1 flex">
				<div className="self-stretch justify-start items-center gap-1 inline-flex">
					<div className="text-neutral-400 text-xs font-semibold leading-none">
						Total Points accured
					</div>
				</div>
				<div className="self-stretch text-neutral-900 text-5xl font-medium leading-10">
					10,472
				</div>
				<div className="px-3 py-1 bg-neutral-50 rounded-3xl border border-slate-300 border-opacity-20 justify-center items-center gap-1 inline-flex">
					<div className="w-3 h-3 px-0.5 py-px justify-center items-center flex">
						<div className="w-2 h-2 relative flex-col justify-start items-start flex"></div>
					</div>
					<div>
						<span className="text-green-500 text-xs font-medium leading-none">
							37.8%{' '}
						</span>
						<span className="text-neutral-400 text-xs font-medium leading-none">
							this week
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Box1;
