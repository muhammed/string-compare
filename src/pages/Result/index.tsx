import Button from 'components/Button'
import ShadowBox from 'components/ShadowBox'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  StyledCheckButton,
  StyledIcon,
  StyledResultContainer,
  StyledResultWrapper,
  StyledTitle
} from './styles'

const Result = () => {
  const [searchParams] = useSearchParams()
  const first = searchParams.get('first')
  const second = searchParams.get('second')
  const [isEqual, setIsequal] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    console.log(first, second)
    checkforIdentical()
  }, [first, second])

  const checkforIdentical = () => {
    if (!first || !second) {
      setError(true)
      return
    }
    if (first?.localeCompare(second) === 0) {
      setIsequal(true)
    } else {
      setIsequal(false)
    }
  }

  const handleIgnoreCaseSensitivity = () => {
    if (!first || !second) {
      setError(true)
      return
    }
    if (first.toLowerCase().localeCompare(second.toLowerCase()) === 0) {
      setIsequal(true)
    } else {
      setIsequal(false)
    }
  }

  return (
    <StyledResultWrapper>
      <ShadowBox>
        <StyledResultContainer>
          {error ? (
            <>
              <StyledIcon>☠️</StyledIcon>
              <StyledTitle>Someting is wrong!</StyledTitle>
            </>
          ) : isEqual ? (
            <>
              <StyledIcon>🎉</StyledIcon>
              <StyledTitle>Equal!</StyledTitle>
            </>
          ) : (
            <>
              <StyledIcon>💤</StyledIcon>
              <StyledTitle>Not equal!</StyledTitle>
            </>
          )}
        </StyledResultContainer>
        <StyledCheckButton onClick={handleIgnoreCaseSensitivity}>
          ignore case sensitivity
        </StyledCheckButton>
        <Link to="/">
          <Button>Go back</Button>
        </Link>
      </ShadowBox>
    </StyledResultWrapper>
  )
}

export default Result
