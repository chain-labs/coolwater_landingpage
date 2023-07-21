import Image from 'next/image';
import React from 'react';
import Emoji from '../../../../public/static/img/024.svg';
import Emoji2 from '../../../../public/static/img/037-1.svg';
import TwitterLogo from '../../../../public/static/img/twitterlogo.svg';

import BannerImage from '../../../../public/static/img/slice-1-2.png';

const BannerComp = () => {
	return (
		<div className="flex justify-center items-center relative top-[450px]">
			<div className="md:w-[700px] md:h-[269px] w-[354px] h-[534px] relative rounded-lg border border-blue-600 border-opacity-25 overflow-hidden shadow-[#3351F2] border-[3px solid rgba(53, 83, 242, 0.25)]">
				<div className="md:w-[700px] md:h-[269px] w-[354px] h-[534px] left-0 top-0 absolute bg-[#3351F2] rounded-lg shadow border border-[3px solid rgba(53, 83, 242, 0.25)] border-opacity-10 shadow-[#3351F2]"></div>
				<div className="left-[24px] top-[32px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
					<div className="w-72 text-white text-2xl font-medium leading-loose">
						Coolwater is part of the Thaw Digital family
					</div>
					<div className="w-60 opacity-80 text-white text-xs font-medium leading-none">
						Innovation + experience from a leader in crypto debt financing.
					</div>
				</div>
				<div className="md:w-96 md:h-72 w-[367px] h-[281px] md:left-[349px] md:top-[20px] left-[90px] top-[259px] absolute bg-white bg-opacity-25 rounded-2xl shadow-inner  border-opacity-60"></div>
				<Image
					className="md:w-96 md:h-64 w-[355px] h-[272px] md:left-[358px] left-[100px] md:top-[29px] top-[268px] relative rounded-lg shadow-inner"
					src={BannerImage}
					alt="BannerImage"
				/>
				{/* <div className="w-36 h-12 left-[150px] top-[178px] absolute">
					<div className="w-28 h-7 px-2.5 py-0.5 left-[22px] top-[22px] absolute bg-violet-50 rounded-3xl shadow-inner border border-zinc-300 justify-center items-center gap-1 inline-flex">
						<div className="text-blue-600 text-xs font-medium leading-normal">
							Find us on
						</div>
						<div className="w-4 h-4 relative"></div>
						<div className="w-4 h-4 relative"></div>
					</div>
				</div> */}
				<button className="px-2.5 py-2 bg-slate-100 rounded-3xl shadow border border-white border-opacity-10 justify-center items-center flex">
					<div className="text-white text-xs font-medium leading-normal">
						Find us on
					</div>
					<div className="w-4 h-4 relative">
						<Image
							src={TwitterLogo}
							alt="twitter"
						/>
					</div>
				</button>
				<div className="w-11 h-11 left-[41.35px] top-[195.54px] absolute">
					<Image
						src={Emoji}
						alt="BannerImage"
					/>
				</div>
				<div className="w-11 h-9 left-[26px] top-[174px] absolute">
					<Image
						src={Emoji2}
						alt="BannerImage"
					/>
				</div>
			</div>
		</div>
	);
};

export default BannerComp;
