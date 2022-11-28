import styled from "styled-components"

export const AtlasContainer = styled.div`
  width: 20%;
  text-align: center;
  margin-top: 8%;

  h1 {
    margin-top: 1rem;
  }

  .horaires {
    color: ${(props) => props.theme["blue-500"]};
    font-size: 1.5rem;
    margin-block: 0.5rem;
  }

  .imgContainer {
    width: 80%;
    height: 44vh;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      object-position: 0 1.5rem;
    }
  }
`
