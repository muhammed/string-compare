import styled from 'styled-components'

export const StyledFormWrapper = styled.form`
  width: 100%;
`

export const StyledErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 20px;
`
