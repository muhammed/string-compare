import styled from 'styled-components'

export const TextInput = styled.input<{ type: string }>`
  width: 100%;
  height: 51px;
  background: #ffffff;
  border: 1px solid #e9e9e9;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 14px;
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.primary};

  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: #afafaf;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0px 0px 0px 0.5px ${({ theme }) => theme.colors.primary};
  }
`
