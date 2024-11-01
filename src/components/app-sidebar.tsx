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
        href: '/initial-setup/set-hyd-template',
        subItems: [
          // { title: 'Preparation', href: '/survey#preparation' },
          // { title: 'How to Survey', href: '/survey#how-to-survey' },
        ],
      },
      {
        title: 'Set Hydracad Toolbar',
        href: '/initial-setup/set-hyd-toolbar',
        subItems: [
          // { title: 'Preparation', href: '/survey#preparation' },
          // { title: 'How to Survey', href: '/survey#how-to-survey' },
        ],
      },
      {
        title: 'Setup Sidebars',
        href: '/initial-setup/setup-sidebar',
        subItems: [
          // { title: 'Preparation', href: '/survey#preparation' },
          // { title: 'How to Survey', href: '/survey#how-to-survey' },
        ],
      },
      // {
      //   title: 'Reccomended Hydracad Settings',
      //   href: '/survey#survey',
      //   subItems: [
      //     // { title: 'Preparation', href: '/survey#preparation' },
      //     // { title: 'How to Survey', href: '/survey#how-to-survey' },
      //   ],
      // },
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
          { title: 'Copy Existing System', href: '/design#copy-existing' },
          { title: 'Create Layout', href: '/design#create-layout' },
        ],
      },
      {
        title: 'Paper Space',
        href: '/paper-space',
        subItems: [
          { title: 'Pick Size', href: '/paper-space#pick-size' },
          { title: 'Boilerplate', href: '/paper-space#boilerplate' },
          {
            title: 'Sprinkler Summary',
            href: '/paper-space#head-box',
          },
          { title: 'Add Details', href: '/paper-space#add-details' },
          { title: 'Add Key Plan', href: '/paper-space#add-keyplan' },
        ],
      },
      {
        title: 'Product Data',
        href: '/pd',
        subItems: [
          { title: 'Copy Files', href: '/pd#copy-files' },
          { title: 'Create Cover Page', href: '/pd#cover-page' },
          { title: 'Add Sprinkler Heads', href: '/pd#add-heads' },
          // { title: 'Boilerplate', href: '/paper-space#boilerplate' },
          // {
          //   title: 'Sprinkler Summary',
          //   href: '/paper-space#head-box',
          // },
          // { title: 'Add Details', href: '/paper-space#add-details' },
          // { title: 'Add Key Plan', href: '/paper-space#add-keyplan' },
        ],
      },
      {
        title: 'Upload For Review',
        href: '/upload',
        subItems: [
          { title: 'Print Drawing', href: '/upload#print-drawing' },
          { title: 'Upload to Procore', href: '/upload#upload-procore' },
          { title: 'Update Excel', href: '/upload#update-excel' },
          { title: 'Notify Manager', href: '/upload#notify-manager' },
          // { title: 'Create Cover Page', href: '/pd#cover-page' },
          // { title: 'Add Sprinkler Heads', href: '/pd#add-heads' },
          // { title: 'Boilerplate', href: '/paper-space#boilerplate' },
          // {
          //   title: 'Sprinkler Summary',
          //   href: '/paper-space#head-box',
          // },
          // { title: 'Add Details', href: '/paper-space#add-details' },
          // { title: 'Add Key Plan', href: '/paper-space#add-keyplan' },
        ],
      },
    ],
  },
  {
    title: 'Reference',
    href: '/new-project',
    subItems: [
      {
        title: 'CAD',
        href: '/reference/CAD',
        subItems: [
          { title: 'Head Symbols', href: '/reference/CAD#head-symbols' },
          { title: 'Layer Colors', href: '/reference/CAD#layer-colors' },
          { title: 'CAD Commands', href: '/reference/CAD#cad-commands' },
        ],
      },
      // {
      //   title: 'Set Hydracad Toolbar',
      //   href: '/survey#survey',
      //   subItems: [
      //     // { title: 'Preparation', href: '/survey#preparation' },
      //     // { title: 'How to Survey', href: '/survey#how-to-survey' },
      //   ],
      // },
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
              <p className="flex items-center py-2 pr-4 text-lg">Home</p>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.map((item) => (
          <Collapsible className="group/collapsible" key={item.title}>
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="break-words">
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
                          <p className="h-fit text-wrap break-words px-4 py-1">
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
                                  <p className="text-wrap break-words px-4 py-1 text-neutral-300">
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
