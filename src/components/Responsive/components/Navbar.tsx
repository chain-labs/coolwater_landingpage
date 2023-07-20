import React from 'react';
import TwitterLogo from '../../../../public/static/img/twitterlogo.svg';
import Logo from '../../../../public/static/img/logo.svg';

import Image from 'next/image';

const Navbar = () => {
	return (
		<div className="w-[100%] h-[54px] px-[130px] py-2 bg-white bg-opacity-80 border border-slate-300 border-opacity-30 backdrop-blur-xl flex-col justify-center items-center gap-2.5 inline-flex">
			<div className="w-[100%] justify-between items-center gap-44 inline-flex">
				<div className="justify-center items-center gap-8 flex">
					<div className="w-36 h-4 py-px justify-start items-end gap-1.5 flex">
						<div className="justify-start items-end gap-0.5 flex">
							<Image
								src={Logo}
								alt="logo"
							/>
						</div>
					</div>
					<div className="justify-start items-center gap-6 flex">
						<div className="px-4 py-2 justify-center items-center flex">
							<div className="text-center text-neutral-400 text-lg font-medium leading-snug">
								Strategies
							</div>
						</div>
						<div className="px-4 py-2 justify-center items-center flex">
							<div className="text-center text-neutral-400 text-lg font-medium leading-snug">
								My Loan
							</div>
						</div>
						<div className="px-4 py-2 justify-center items-center flex">
							<div className="text-center text-neutral-400 text-lg font-medium leading-snug">
								Docs
							</div>
						</div>
					</div>
				</div>
				<button className="px-2.5 py-2 bg-[#3351F2] rounded-3xl shadow border border-white border-opacity-10 justify-center items-center flex">
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
			</div>
		</div>
	);
};

export default Navbar;
