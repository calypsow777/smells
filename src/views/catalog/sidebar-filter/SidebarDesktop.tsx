import React from "react"

import { Drawer } from "@material-ui/core"
import { ClassNameMap } from "@material-ui/styles"

interface Props {
  style: ClassNameMap<"root">
  sidebarElements: JSX.Element[]
}

function CatalogSidebarDesktop({ style, sidebarElements }: Props): JSX.Element {
  return (
    <Drawer variant="permanent" classes={{ paper: style.root }} anchor="left" elevation={0}>
      {sidebarElements}
    </Drawer>
  )
}

export default CatalogSidebarDesktop
