import React from 'react';
import Image from 'next/image';
import Divider from '../../../../public/static/img/divider.svg';

const FooterMobile = () => {
	return (
		<div className="relative top-[500px] flex justify-center items-center">
			<div className="w-[100%] h-16 flex-col justify-start items-center gap-4 inline-flex">
				<div className="w-96 justify-between items-center gap-6 inline-flex">
					<div className="text-center text-zinc-500 text-xs font-medium leading-none">
						Cookies
					</div>
					<div className="text-center text-zinc-500 text-xs font-medium leading-none">
						Privacy Policy
					</div>
					<div className="text-center text-zinc-500 text-xs font-medium leading-none">
						Term of Conditions
					</div>
				</div>
				<Image
					className="w-[100%]"
					src={Divider}
					alt="divider"
				/>
				<div className="w-96 text-center text-zinc-500 text-xs font-medium leading-none">
					©2023 Coolwater. All Rights Reserved.
				</div>
			</div>
		</div>
	);
};

export default FooterMobile;
