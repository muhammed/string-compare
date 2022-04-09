import { StyledBoxWrapper } from './styles'

interface Props {
  children: React.ReactNode
}

const ShadowBox = ({ children }: Props) => {
  return <StyledBoxWrapper>{children}</StyledBoxWrapper>
}

export default ShadowBox
