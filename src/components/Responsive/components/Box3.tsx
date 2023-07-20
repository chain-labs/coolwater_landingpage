import React from 'react';
import Image from 'next/image';

import Ellipse1 from '../../../../public/static/img/ellipse-6.png';
import Ellipse2 from '../../../../public/static/img/ellipse-5.png';
import Ellipse4 from '../../../../public/static/img/ellipse-2.png';
import Ellipse3 from '../../../../public/static/img/ellipse-3.png';
import Ellipse5 from '../../../../public/static/img/ellipse-4.png';
import Cursor from '../../../../public/static/img/cursor-1.png';

const Box3 = () => {
	return (
		<div className="w-[411px] h-48 relative ">
			<div className="w-[411px] h-48 left-0 top-0 absolute bg-gray-50 rounded-lg border border-gray-100">
				<div className="w-28 h-12 left-[259px] top-[64px] absolute">
					<div className="w-24 h-7 px-2.5 py-0.5 left-[22px] top-[22px] absolute bg-blue-600 rounded-3xl border border-blue-600 justify-start items-start gap-2 inline-flex">
						<div className="text-white text-xs font-medium leading-normal">
							Homerfan33
						</div>
					</div>
				</div>
				<div className="left-[15px] top-[135px] relative flex-col justify-start items-start gap-1 inline-flex">
					<div className="text-gray-700 text-base font-semibold leading-tight">
						Managed by the best
					</div>
					<div className="text-gray-500 text-xs font-medium leading-none">
						Homerfan33 is an established collateralized-NFT lender since 2021.{' '}
					</div>
				</div>
				<div className="left-[15px] top-[35px] absolute justify-start items-start inline-flex">
					<div className="w-16 h-16 bg-gray-50 bg-opacity-90 rounded-full border border-gray-50">
						<Image
							src={Ellipse1}
							alt='="logo'
						/>
					</div>

					<div className="w-16 h-16 absolute left-[42px] bg-gray-50 bg-opacity-80 rounded-full border border-gray-50">
						<Image
							src={Ellipse2}
							alt='="logo'
						/>
					</div>
					<div className="w-16 h-16 bg-gray-50 relative right-[-20px] bg-opacity-70 rounded-full border border-gray-50">
						<Image
							src={Ellipse3}
							alt='="logo'
						/>
					</div>
					<div className="w-16 h-16 bg-gray-50 relative bg-opacity-50 rounded-full border border-gray-50">
						<Image
							src={Ellipse5}
							alt='="logo'
						/>
					</div>
					<div className="w-16 h-16 bg-gray-50 relative left-[-20px] bg-opacity-50 rounded-full border border-gray-50">
						<Image
							src={Ellipse4}
							alt='="logo'
						/>
					</div>
					<Image
						className="w-[26px] h-[26px] rounded-full relative top-[35px] right-[18px]"
						src={Cursor}
						alt="logo"
					/>
				</div>
			</div>
		</div>
	);
};

export default Box3;
