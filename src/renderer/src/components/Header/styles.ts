import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["blue-500"]};
  width: 100%;
  height: 16vh;
  position: relative;

  display: flex;
  align-items: center;

  .logoAtlasImg {
    width: 7rem;
    height: 7rem;
    /* margin-left: 5vw; */
  }
  .logoFlemme {
    width: 5rem;
    height: 7rem;
  }

  .logos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 0 10%;
  }

  .logoAtlasCarpiagne {
    position: absolute;

    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
