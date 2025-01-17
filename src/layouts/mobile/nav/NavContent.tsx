import { ReactNode } from "react"
import * as Styles from './Styles'

interface Props {
    children: ReactNode
}

const NavContent = ({children}: Props) => {
    return <Styles.Content>
        {children}
    </Styles.Content>
}

export default NavContent