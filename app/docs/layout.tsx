import { DocsLayout } from 'next-docs-ui/layout'
import type { ReactNode } from 'react'
import { tree } from '../source'
import { Nav } from "next-docs-ui/nav";
import 'next-docs-ui/style.css'
export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
 <div>
  <DocsLayout
    
    tree={tree}
sidebar={{
  collapsible: false
}}
    nav={{
        enabled: false
      
    }}
  >
    {children}
  </DocsLayout>
</div>
  )
}
