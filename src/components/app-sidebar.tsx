import Link from 'next/link' // Import Next.js Link component
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

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* Home Button */}
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/" passHref>
              <p className="flex items-center px-4 py-2 ">
                Home {/* Optionally, add an icon or additional styling here */}
              </p>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                New Project Workflow
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                {/* Non-Collapsible Sub-Group for 'Survey' */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/survey#survey" passHref>
                      <p className="px-4 py-2">Survey</p>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/survey#preparation" passHref>
                          <p className="px-4 py-2">Preparation</p>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/survey#how-to-survey" passHref>
                          <p className="px-4 py-2">How to Survey</p>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>

                {/* Non-Collapsible Sub-Group for 'Design' */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <div className="flex justify-between px-4 py-2 ">
                      Design
                      <ChevronDown className="opacity-0" />
                    </div>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <div className="px-4 py-2">Update Cad Template</div>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <div className="px-4 py-2">Create Project Folder</div>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}
