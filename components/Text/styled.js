import styled from "styled-components";

export const TextWrapper = styled.p`
	font-size: ${(props) => props.theme.fontSizes.text};
	margin: 1em 0;
	@media(max-width: 800px) {
		text-align: center;
  }
`;

export default TextWrapper;