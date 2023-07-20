import Image from 'next/image';
import React from 'react';
import Ellipse from '../../../../public/static/img/ellipse-2.png';
import ChevronRight from '../../../../public/static/img/chevron-right.svg';

const Box4 = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="w-[481px] h-[230px] px-3.5 py-4 bg-neutral-50 rounded-2xl border border-blue-600 border-opacity-5 flex-col justify-start items-start gap-9 inline-flex">
				<div className="self-stretch justify-start items-center gap-3 inline-flex">
					<Image
						className="w-12 h-12 rounded-full"
						src={Ellipse}
						alt="ellipse"
					/>
					<div className="flex-col justify-start items-start gap-1.5 inline-flex">
						<div className="opacity-40 text-stone-700 text-xs font-semibold leading-3">
							Presented by:
						</div>
						<div className="text-stone-700 text-xl font-semibold leading-tight">
							Homerfan33
						</div>
					</div>
				</div>
				<div className="self-stretch h-28 flex-col justify-start items-start gap-8 flex">
					<div className="self-stretch rounded-xl justify-start items-center gap-9 inline-flex">
						<div className="justify-start items-center gap-2.5 flex">
							<div className="p-2.5 bg-orange-100 rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
								<div className="text-stone-700 text-xl font-semibold leading-tight">
									🔥
								</div>
							</div>
							<div className="flex-col justify-start items-start gap-2 inline-flex">
								<div className="opacity-40 text-stone-700 text-xs font-semibold leading-3">
									Target APY
								</div>
								<div className="text-stone-700 text-base font-semibold leading-none">
									30%-70%
								</div>
							</div>
						</div>
						<div className="justify-start items-center gap-2.5 flex">
							<div className="p-2.5 bg-slate-200 rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
								<div className="text-stone-700 text-xl font-semibold leading-tight">
									👽
								</div>
							</div>
							<div className="flex-col justify-start items-start gap-2 inline-flex">
								<div className="w-16 opacity-40 text-stone-700 text-xs font-semibold leading-3">
									ETH locked
								</div>
								<div className="text-stone-700 text-base font-semibold leading-none">
									2147
								</div>
							</div>
						</div>
						<div className="justify-start items-center gap-2.5 flex">
							<div className="p-2.5 bg-slate-200 rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex">
								<div className="text-stone-700 text-xl font-semibold leading-tight">
									👽
								</div>
							</div>
							<div className="flex-col justify-start items-start gap-2 inline-flex">
								<div className="w-16 opacity-40 text-stone-700 text-xs font-semibold leading-3">
									ETH locked
								</div>
								<div className="text-stone-700 text-base font-semibold leading-none">
									2147
								</div>
							</div>
						</div>
					</div>
					<div className="self-stretch px-2.5 py-2 bg-[#3351F2] rounded-3xl shadow border border-white border-opacity-10 justify-center items-center gap-1.5 inline-flex">
						<div className="text-center text-white text-sm font-medium leading-tight">
							Contribute to the pool{' '}
						</div>
						<div className="w-5 h-5 relative">
							<Image
								src={ChevronRight}
								alt="ellipse"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Box4;
