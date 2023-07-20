import Image from 'next/image';
import React from 'react';
import Divider from '../../../../public/static/img/divider.svg';

const Footer = () => {
	return (
		<div>
			<div className="w-[100%] h-20 flex-col justify-center items-center gap-6 inline-flex top-[20%]">
				<div className="justify-center items-center gap-6 inline-flex">
					<div className="w-44 text-center text-slate-500 text-sm font-medium leading-none">
						Cookies
					</div>
					<div className="w-44 text-center text-slate-500 text-sm font-medium leading-none">
						Privacy Policy
					</div>
					<div className="w-44 text-center text-slate-500 text-sm font-medium leading-none">
						Term of Conditions
					</div>
				</div>
			</div>
			<Image
				className="w-[100%]"
				src={Divider}
				alt="divider"
			/>
			<div className="w-[100%] h-20 text-center flex-col justify-center items-center inline-flex text-slate-500 text-xs font-normal leading-none">
				©2023 Coolwater. All Rights Reserved.
			</div>
		</div>
	);
};

export default Footer;
