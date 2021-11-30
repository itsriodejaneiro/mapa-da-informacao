import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.darkPurple};
	display: flex;
	justify-content: center;
	padding: 3em;
	width: 100vw;
	position: relative;
	bottom: 0;
	left: 0;
	.image-wrapper {
		margin-right: 30px;
		display: flex;
		align-items: center;
	}
	@media(max-width: 800px) {
		flex-direction: column;
		align-items: center;
		img {
			margin: 0 0 30px !important;
		}
		.image-wrapper {
			margin-right: 0;
		}
  }
`;

export const ItemsWrapper = styled.div`
	display: flex;
	justify-content: space-around;
  width: 65%;
	margin-left: 30px;
	@media(max-width: 800px) {
		margin-left: 0;
		flex-direction: column;
  }
`;

export const Item = styled.div`
	font-size: ${(props) => props.theme.fontSizes.small};
	font-family: ${(props) => props.theme.fontFamilies.firaMonoRegular};
	@media(max-width: 800px) {
		padding: 0.75em 0
  }
`;

export const ColumnTitle = styled.p`
	color: ${(props) => props.theme.colors.lightYellow};
	margin-bottom: 20px;
	@media(max-width: 800px) {
		text-align: center;
		margin-bottom: 0px;
  }
`;

export const ColumnText = styled.p`
	margin-bottom: 4px;
	margin-right: 20px;
	white-space: nowrap;
	padding: 2px 0;
	display: block;
	@media(max-width: 800px) {
		text-align: center;
		margin-bottom: 0;
		margin-right: 0;
		a {
			display: block;
			margin: 6px 0;
		}
  }
`;

export default Footer;