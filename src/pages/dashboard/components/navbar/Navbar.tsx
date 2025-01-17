import { useEffect, useState } from "react"
import Nav from "../../../../layouts/mobile/nav/Nav"
import NavContent from "../../../../layouts/mobile/nav/NavContent"
import NavItem from "../../../../layouts/mobile/nav/NavItem"
import NavUserMenu from "../../../../layouts/mobile/nav/NavUserMenu"
import { useContentStore } from "../../../../store/content"
const DashboardNavbar = () => {
    const [isOpen, toggle] = useState(false)
    const {content} = useContentStore()

    useEffect(()=>{
        toggle(false)
    }, [content])

    return (
        <>
        <Nav isOpen={isOpen} toggle={toggle} />
        {isOpen && <NavContent >
                <NavItem title="Inicio" />
                <NavItem title="UX Correlations" />
                <NavItem title="Verbos" />
                <NavItem title="Personas" />
                <NavUserMenu />
            </NavContent>}
        </>
    )
}

export default DashboardNavbar
  