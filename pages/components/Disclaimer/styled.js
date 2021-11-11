import styled from "styled-components"
import TextWrapper from '../Text/styled'

export const DisclaimerWrapper = styled(TextWrapper)`
	font-family: ${(props) => props.theme.fontFamilies.firaMonoRegular};
  color: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.fontSizes.small}
`;

export default DisclaimerWrapper