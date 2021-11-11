import styled  from "styled-components";

export const Button = styled.button`
  border: 1px solid ${(props) => props.theme.colors.lightYellow};
	color: ${(props) => props.theme.colors.lightYellow};
	font-size: ${(props) => props.theme.fontSizes.subtitle};
	font-family: ${(props) => props.theme.fontFamilies.firaMonoRegular};
  padding: 14px;
	transition: 0.3s;

	&:hover {
		background-color: ${(props) => props.theme.colors.lightYellow};
		color: ${(props) => props.theme.colors.backgroundPurple}
	}
`;

export default Button