import styled from 'styled-components'

export const StyledResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`

export const StyledResultContainer = styled.div`
  padding: 59px 0 74px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledIcon = styled.span`
  margin-right: 10px;
  font-size: 30px;
`

export const StyledTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #000000;
`

export const StyledCheckButton = styled.button`
  background: none;
  border: none;
  text-align: center;
  display: block;
  width: 100%;
  margin-bottom: 20px;
  opacity: 0.8;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`
