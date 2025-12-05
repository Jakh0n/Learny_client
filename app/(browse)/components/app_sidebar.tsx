'use client'
import { Button } from '@/components/ui/button'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { footer_items, nav_items, startup_items } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AppSidebar() {
	const pathname = usePathname()
	return (
		<Sidebar collapsible='icon' variant='floating'>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Pages</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{nav_items.map(item => (
								<SidebarMenuItem
									key={item.title}
									className={cn(
										pathname === item.url &&
											'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
									)}
								>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Startups</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{startup_items.map(item => (
								<SidebarMenuItem
									key={item.title}
									className={cn(
										pathname === item.url &&
											'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
									)}
								>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu className='group-data-[collapsible=icon]:hidden'>
					<div className='flex items-center justify-between'>
						{footer_items.map(item => (
							<Button asChild key={item.title} variant='ghost' size='icon'>
								<Link href={item.url} target='_blank'>
									<item.icon />
								</Link>
							</Button>
						))}
					</div>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
