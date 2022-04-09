import { StyledButtonWrapper } from './styles'

interface Props {
  children: React.ReactNode
  onClick?: (e?: any) => void
}

const Button = ({ children }: Props) => {
  return <StyledButtonWrapper>{children}</StyledButtonWrapper>
}

export default Button
