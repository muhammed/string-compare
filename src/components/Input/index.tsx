import { TextInput } from './styles'

interface Props {
  placeholder: string
  initialValue?: string
  onChange?: (value: string) => void
  type?: string
  textarea?: boolean
  error?: string | undefined | null
  onBlur?: (e: any) => void
}

const Input = ({ placeholder, onChange, type = 'text', onBlur }: Props) => {
  return (
    <TextInput
      type={type}
      placeholder={placeholder}
      onChange={(e: any) => {
        onChange?.(e.target.value)
      }}
      onBlur={onBlur}
    />
  )
}

export default Input
