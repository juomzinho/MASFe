import { Dispatch, SetStateAction } from "react"
import * as Styles from './Styles'
import LogoDark from '../../../assets/icons/masfe-dark.svg'
import LogoLight from '../../../assets/icons/masfe-light.svg'
import { useThemeStore } from "../../../store/theme"
import Hamburger from 'hamburger-react'
import { darkTheme, lightTheme } from "../../../utils/theme/theme"

interface Props {
    toggle: Dispatch<SetStateAction<boolean>>
    isOpen: boolean
}

const Nav = ({toggle, isOpen}: Props) => {
    const {theme} =  useThemeStore()
    return <Styles.Nav>
        <Styles.Logo src={theme === 'light' ? LogoLight : LogoDark} />
        <Hamburger color={theme === 'light' ? 
            lightTheme.color.primary.text   : 
            darkTheme.color.primary.text} 
            toggled={isOpen}
            toggle={toggle} 
            animateOnMount
            rounded
        
        />
    </Styles.Nav>
}

export default Nav