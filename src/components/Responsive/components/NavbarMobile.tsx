import React from 'react';
import Menu from '../../../../public/static/img/menu.svg';
import Logo from '../../../../public/static/img/logo.svg';

import Image from 'next/image';

const NavbarMobile = () => {
	return (
		<div className="w-[100%] h-[54px] md:px-[130px] py-2 bg-white bg-opacity-80 border border-slate-300 border-opacity-30 backdrop-blur-xl flex-col justify-center items-center gap-2.5 inline-flex">
			<div className="w-[100%] justify-between items-center gap-44 inline-flex">
				<div className="justify-center items-center gap-8 flex">
					<div className="w-36 h-4 px-2 py-px justify-start items-end gap-1.5 flex">
						<div className="justify-start items-end gap-0.5 flex">
							<Image
								src={Logo}
								alt="logo"
							/>
						</div>
					</div>
				</div>
				<button className="px-2.5 py-2   justify-center items-center flex">
					<div className="w-12 relative">
						<Image
							src={Menu}
							alt="twitter"
						/>
					</div>
				</button>
			</div>
		</div>
	);
};

export default NavbarMobile;
