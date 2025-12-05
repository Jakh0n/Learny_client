import { AppSidebar } from '@/app/(browse)/components/app_sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { ChildProps } from '@/types'
import Header from './components/header'

const Layout = ({ children }: ChildProps) => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='w-full'>
				<Header />
				<div className='mt-2 max-w-6xl mx-auto'>{children}</div>
			</main>
		</SidebarProvider>
	)
}

export default Layout
