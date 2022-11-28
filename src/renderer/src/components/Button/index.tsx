import { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ButtonContainer type="button" {...rest}>
      {title}
    </ButtonContainer>
  )
}
export const ButtonContainer = styled.button`
  width: 32rem;
  height: 3.25rem;
  background: ${(props) => props.theme["blue-500"]};
  border: 0;
  border-radius: 8px;
  color: white;

  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 1rem;

  font-size: 1.25rem;
`
