// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { SocialDiscord24, SocialLinkedin24, SocialTwitter24 } from '@mysten/icons';
import { type ReactNode } from 'react';
import { ReactComponent as Telegram } from '../../assets/telegram.svg';
import { ReactComponent as X } from '../../assets/x.svg';
import { ReactComponent as Discord } from '../../assets/discord.svg';

type FooterItem = {
	category: string;
	items: { title: string; children: ReactNode; href: string }[];
};
export type FooterItems = FooterItem[];

function FooterIcon({ children }: { children: ReactNode }) {
	return <div className="flex items-center text-steel-darker">{children}</div>;
}

export const footerLinks = [
	{
		title: 'Website',
		href: 'https://scalar.org/',
	},
	{
		title: 'Blog',
		href: 'https://scalarprotocolnews.substack.com/',
	},
	{
		title: 'Docs',
		href: 'https://scalar.gitbook.io/scalar',
	},
	{
		title: 'GitHub',
		href: 'https://github.com/scalarorg/',
	},
];

export const socialLinks = [
	{
		children: (
			<FooterIcon>
				<Telegram />
			</FooterIcon>
		),
		href: 'https://t.me/scalarchat',
	},
	{
		children: (
			<FooterIcon>
				<Discord />
			</FooterIcon>
		),
		href: 'https://discord.com/invite/wzzYhgCggD',
	},
	{
		children: (
			<FooterIcon>
				<X />
			</FooterIcon>
		),
		href: 'https://x.com/scalarprotocol',
	},
];

export const legalLinks = [
	{
		title: 'Terms & Conditions',
		href: 'https://mystenlabs.com/legal#termsofservice',
	},
	{
		title: 'Privacy Policy',
		href: 'https://mystenlabs.com/legal#privacypolicy',
	},
];
