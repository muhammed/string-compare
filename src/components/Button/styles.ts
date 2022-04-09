import styled from 'styled-components'

export const StyledButtonWrapper = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  color: #ffffff;
  height: 51px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;

  &::disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`
