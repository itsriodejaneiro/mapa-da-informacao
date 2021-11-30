import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: rgba(38, 35, 47, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  padding: 20px 30px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 800px) {
		flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: fixed;
    top: 60px;
    left: -100%;
    background-color: rgba(38,35,47,1);
    padding: 20px 30px;
    width: 50vw;
    height: 100vh;
    transition: left .4s ease;
    &[open] {
      left: 0%;
    }
  }
`

export const HeaderMenu = styled.button`
  width: 30px;
  height: 20px;
  position: relative;
  display: none;
  span {
    position: absolute;
    width: 100%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ccc;
    opacity: 1;
    transition: opacity .4s ease;
  }
  &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    background-color: #ccc;
    transition: transform .4s ease;
  }
  &::before {
    top: 0%;
    transform: translate(0%, 0%) rotate(0deg);
  }
  &::after {
    bottom: 0%;
    transform: translate(0%, 0%) rotate(0deg);
  }
  &[open] {
    span {
      opacity: 0;
    }
    &::before, &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::before {
      top: 45%;
      transform: translate(0%, 0%) rotate(45deg);
    }
    &::after {
      bottom: 50%;
      transform: translate(0%, 0%) rotate(-45deg);
    }
  }
  @media(max-width: 800px) {
		display: block;
  }
`

export const HeaderLink = styled.a`
  font-size: ${(props) => props.theme.fontSizes.text};
  font-family: ${(props) => props.theme.fontFamilies.firaSansRegular};
  color: ${(props) => props.theme.colors.lightGray};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;
  margin: 0 20px;
  border-bottom: 1px solid transparent;
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
  &.current{
    color: ${(props) => props.theme.colors.white};
    pointer-events: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }
  @media(max-width: 800px) {
    margin: 0 0 20px;
  }
`;

export default HeaderContainer;