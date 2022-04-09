import { TextInput } from './styles'

interface Props {
  placeholder: string
  initialValue?: string
  onChange?: (value: string) => void
  type?: string
  textarea?: boolean
  error?: string | undefined | null
}

const Input = ({ placeholder, onChange, type = 'text' }: Props) => {
  return (
    <TextInput
      type={type}
      placeholder={placeholder}
      onChange={(e: any) => {
        onChange?.(e.target.value)
      }}
    />
  )
}

export default Input
