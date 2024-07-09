// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { Text } from '@mysten/ui';

import { LegalLinks, LegalText } from './Legal';
import { footerLinks, socialLinks } from './footerLinks';
import { ReactComponent as ScalarWhite } from '../../assets/logo.svg';
import { Link } from '~/ui/Link';

function FooterLinks() {
	return (
		<div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-end">
			<ul className="flex gap-4 md:flex-row md:gap-6">
				{footerLinks.map(({ title, href }) => (
					<li key={href}>
						<Link variant="text" href={href}>
							<p className='text-[#C5C5C8] text-base md:text-lg font-medium'>
								{title}
							</p>
						</Link>
					</li>
				))}
			</ul>

			<ul className="flex justify-center items-center gap-6">
				{socialLinks.map(({ children, href }) => (
					<li key={href}>
						<Link variant="text" color="steel-darker" href={href}>
							<div className="mt-2">{children}</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

function Footer() {
	return (
		<footer className="sticky top-[100%] bg-black px-5 py-10 md:px-10 md:py-14 lg:py-18">
			<nav className="flex flex-col justify-center gap-4 divide-y divide-solid divide-[#54565E] md:gap-7.5">
				<div className="flex flex-col-reverse items-center gap-7.5 md:flex-row md:justify-between ">
					<div className="hidden self-center text-hero-dark md:flex md:self-start">
						<ScalarWhite />
					</div>
					<div>
						<FooterLinks />
					</div>
				</div>
				<div className="flex flex-col-reverse justify-center gap-3 pt-3 md:flex-row md:justify-between">
					<LegalText />
					{/* <LegalLinks /> */}
				</div>
			</nav>
			<div className="mt-4 flex justify-center border-t border-solid border-[#54565E] pt-5 text-hero-dark md:hidden md:self-start">
				<ScalarWhite />
			</div>
		</footer>
	);
}

export default Footer;
