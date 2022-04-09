import { Link, Outlet } from 'react-router-dom'
import {
  StyledLayoutContainer,
  StyledLayoutHeader,
  StyledLayoutLogo,
  StyledLayoutWrapper
} from './styles'

const Layout = () => {
  return (
    <StyledLayoutWrapper>
      <StyledLayoutHeader>
        <Link to="/">
          <StyledLayoutLogo src="/img/logo.svg" alt="logo" />
        </Link>
      </StyledLayoutHeader>
      <StyledLayoutContainer>
        <Outlet />
      </StyledLayoutContainer>
    </StyledLayoutWrapper>
  )
}

export default Layout
