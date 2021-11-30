import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100vw;
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 64px;
	padding: 10px 30px 0;
`;

export const HeroImage = styled.div`
  padding: 0.75em;
	display: flex;
`;

export const HeroInfo = styled.div`
  max-width: 420px;
  padding: 0.75em;
`;

export const HeroTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media(max-width: 800px) {
		flex-direction: column;
  }
`;

export const HeroCTA = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media(max-width: 800px) {
		margin: 40px 0 0;
  }
`;

export default HeroContainer;