import { FormHTMLAttributes, ReactNode } from 'react'
import * as Styles from './Styles'

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

const Form = ({ children, ...rest }: Props) => {
  return <Styles.FormContent {...rest}>{children}</Styles.FormContent>
}

export default Form
