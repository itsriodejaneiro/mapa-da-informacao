import styled from "styled-components";

export const AboutWrapper = styled.div`
	padding: 180px 30px;
	max-width: 62%;
	margin: 0 auto;
	h1 {
		margin: 0 0 30px;
	}
	iframe {
		margin: 24px 0;
	}
	@media(max-width: 800px) {
	  max-width: 100%;
		padding: 150px 30px;
		h1, p {
			text-align: left;
		}
		iframe {
			height: auto;
		}
  }
`;

export default AboutWrapper;