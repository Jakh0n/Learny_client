import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ContactIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { ModeToggle } from './mode.toggle'

const Header = () => {
	return (
		<>
			<div className='h-20 bg-sidebar border rounded-lg m-2 sticky top-2 z-50 p-2 '>
				<div className='w-full h-full flex items-center justify-between'>
					<Logo />
					<div className='flex items-center gap-2 px-4'>
						<SidebarTrigger className='size-6  hover:text-foreground cursor-pointer' />
						<ModeToggle />
						<Button variant='ghost' size='icon' asChild>
							<Link href='/contact'>
								<ContactIcon />
							</Link>
						</Button>
						<Button variant='outline' asChild>
							<Link href='/auth/sign-in' className='flex items-center gap-2'>
								<UserIcon className='size-4' />
								<span className='hidden md:block'>Sign In</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
