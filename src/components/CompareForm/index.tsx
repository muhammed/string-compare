import Button from 'components/Button'
import Input from 'components/Input'
import ShadowBox from 'components/ShadowBox'
import { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { StyledErrorMessage, StyledFormWrapper } from './styles'

const CompoareForm = () => {
  const navigate = useNavigate()

  const [firstWord, setFirstWord] = useState<string>('')
  const [secondWord, setSecondWord] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!firstWord.length || !secondWord.length) {
      setError('Please fill all fields')
      return
    }

    if (firstWord.length !== secondWord.length) {
      setError('Hey! The words are not even the same length!')
      return
    }

    const params = { first: firstWord, second: secondWord }
    navigate({
      pathname: '/result',
      search: `?${createSearchParams(params)}`
    })
  }

  return (
    <ShadowBox>
      <StyledFormWrapper onSubmit={handleSubmit}>
        <Input
          placeholder="Your first entry"
          onChange={(value) => setFirstWord(value)}
          onBlur={(e) => setFirstWord(e.target.value.trim())}
        />
        <Input
          placeholder="Your second entry"
          onChange={(value) => setSecondWord(value)}
          onBlur={(e) => setSecondWord(e.target.value.trim())}
        />
        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
        <Button onClick={handleSubmit}>Check equality</Button>
      </StyledFormWrapper>
    </ShadowBox>
  )
}

export default CompoareForm
