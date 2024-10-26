import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
import { ChevronDown } from 'lucide-react'
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar'

const sidebarData = [
  {
    title: 'Initial Employee Setup',
    href: '/new-project',
    subItems: [
      {
        title: 'Set Hydracad Template',
        href: '/survey#survey',
        subItems: [
          // { title: 'Preparation', href: '/survey#preparation' },
          // { title: 'How to Survey', href: '/survey#how-to-survey' },
        ],
      },
      {
        title: 'Set Hydracad Toolbar',
        href: '/survey#survey',
        subItems: [
          // { title: 'Preparation', href: '/survey#preparation' },
          // { title: 'How to Survey', href: '/survey#how-to-survey' },
        ],
      },
      {
        title: 'Customize Hydracad Binds',
        href: '/survey#survey',
        subItems: [
          // { title: 'Preparation', href: '/survey#preparation' },
          // { title: 'How to Survey', href: '/survey#how-to-survey' },
        ],
      },
      {
        title: 'Reccomended Hydracad Settings',
        href: '/survey#survey',
        subItems: [
          // { title: 'Preparation', href: '/survey#preparation' },
          // { title: 'How to Survey', href: '/survey#how-to-survey' },
        ],
      },
    ],
  },
  {
    title: 'New Project Workflow',
    href: '/new-project',
    subItems: [
      {
        title: 'Survey Phase',
        href: '/survey#survey',
        subItems: [
          { title: 'Preparation', href: '/survey#preparation' },
          { title: 'How to Survey', href: '/survey#how-to-survey' },
        ],
      },
      {
        title: 'Design Phase',
        href: '/design#design',
        subItems: [
          { title: 'Create Job Folder', href: '/design#job-folder' },
          { title: 'Download Files', href: '/design#download-files' },
          { title: 'Start FP Drawing', href: '/design#start-fp' },
          { title: 'Import Existing System', href: '/design#import-existing' },
          { title: 'Draw Existing System', href: '/design#draw-existing' },
          { title: 'Import RCP', href: '/design#import-rcp' },
          { title: 'Clean RCP', href: '/design#clean-rcp' },
        ],
      },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/" passHref>
              <p className="flex items-center pr-4 py-2 text-lg">Home</p>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.map((item) => (
          <Collapsible className="group/collapsible" key={item.title}>
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="break-words ">
                  {item.title}
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  {item.subItems.map((subItem) => (
                    <SidebarMenuItem
                      key={subItem.title}
                      className="break-words"
                    >
                      <SidebarMenuButton asChild>
                        <Link href={subItem.href} passHref>
                          <p className="px-4 py-1 break-words text-wrap h-fit">
                            {subItem.title}
                          </p>
                        </Link>
                      </SidebarMenuButton>
                      {subItem.subItems && (
                        <SidebarMenuSub>
                          {subItem.subItems.map((subSubItem) => (
                            <SidebarMenuSubItem key={subSubItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link href={subSubItem.href} passHref>
                                  <p className="px-4 py-1 break-words text-wrap text-neutral-300">
                                    {subSubItem.title}
                                  </p>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
