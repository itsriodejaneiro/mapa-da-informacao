import styled from "styled-components";

export const TitleWrapper = styled.h1`
  line-height: 1.2em;
	font-size: ${(props) => props.theme.fontSizes.mainTitle};
	@media(max-width: 800px) {
		text-align: center;
  }
`;

export const Light = styled.span`
	font-family: ${(props) => props.theme.fontFamilies.firaSansThin};
	color: ${(props) => props.theme.colors.highlightText};
	display: block;
`;

export const Bold = styled.span`
	font-family: ${(props) => props.theme.fontFamilies.firaSansSemiBold};
`;

export default TitleWrapper;