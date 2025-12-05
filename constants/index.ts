import {
	BookIcon,
	BookOpenIcon,
	CodeIcon,
	FacebookIcon,
	FileTextIcon,
	FolderOpenIcon,
	GithubIcon,
	HomeIcon,
	InstagramIcon,
	LayoutDashboardIcon,
	LinkedinIcon,
	SendIcon,
	XIcon,
} from 'lucide-react'

export const nav_items = [
	{
		title: 'Home Page',
		icon: HomeIcon,
		url: '/',
	},
	{
		title: 'Corses',
		icon: BookOpenIcon,
		url: '/courses',
	},
	{
		title: 'Projects',
		icon: FolderOpenIcon,
		url: '/projects',
	},
	{
		title: 'Source Code',
		icon: CodeIcon,
		url: '/source-code',
	},
	{
		title: 'Dashboard',
		icon: LayoutDashboardIcon,
		url: '/dashboard',
	},
]
export const startup_items = [
	{
		title: 'Blogs',
		icon: BookIcon,
		url: '/projects/blog',
	},
	{
		title: 'Resume Builder',
		icon: FileTextIcon,
		url: '/projects/resume-builder',
	},
	{
		title: 'Beautiful Code',
		icon: CodeIcon,
		url: '/projects/beautiful-code',
	},
]
export const footer_items = [
	{
		title: 'Telegram',
		icon: SendIcon,
		url: 'https://t.me/learny_ai',
	},
	{
		title: 'Instagram',
		icon: InstagramIcon,
		url: 'https://www.instagram.com/learny_ai',
	},
	{
		title: 'X',
		icon: XIcon,
		url: 'https://x.com/learny_ai',
	},
	{
		title: 'Facebook',
		icon: FacebookIcon,
		url: 'https://www.facebook.com/learny_ai',
	},
	{
		title: 'LinkedIn',
		icon: LinkedinIcon,
		url: 'https://www.linkedin.com/in/learny_ai',
	},
	{
		title: 'Github',
		icon: GithubIcon,
		url: 'https://www.github.com/learny_ai',
	},
]
