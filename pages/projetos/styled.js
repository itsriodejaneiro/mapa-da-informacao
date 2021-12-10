import styled from "styled-components";

export const ProjectsWrapper = styled.section`
	padding: 180px 30px;
	max-width: 62%;
	margin: 0 auto;
	@media(max-width: 800px) {
	  max-width: 100%;
		padding: 150px 30px;
		h1, p {
			text-align: left;
		}
  }
`;

export const Loading = styled.div`
  margin: 40px 0 0;
`;

export const ProjectList = styled.ul`
	padding-top: 50px;
`;

export const ProjectItem = styled.li`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	margin: 0 0 40px;
	img {
		object-fit: cover;
	}
	@media(max-width: 800px) {
		flex-direction: column;
  }
`;

export const ProjectInfo = styled.div`
	width: 60%;
	margin-left: 20px;
	a {
		font-size: ${(props) => props.theme.fontSizes.title};
		&:hover {
			text-decoration: underline;
		}
	}
	@media(max-width: 800px) {
	  margin-top: 25px;
	  width: 100%;
  }
`;

export const ProjectDescription = styled.p`
	padding-top: 30px;
`;

export const SingleProjectWrapper = styled.section`
  padding: 180px 30px 40px;
	max-width: 62%;
	margin: 0 auto;
	h1 {
		margin: 0 0 20px;
	}
	p {
		margin: 0 0 40px;
	}
	div {
		color: #fff;
	}
	@media(max-width: 800px) {
	  max-width: 100%;
		padding: 150px 30px 0;
		h1, p {
			text-align: left;
		}
  }
`;

export const HeaderLink = styled.a`
  font-size: ${(props) => props.theme.fontSizes.text};
  font-family: ${(props) => props.theme.fontFamilies.firaSansRegular};
  color: ${(props) => props.theme.colors.lightGray};
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;
	text-decoration: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  &:hover {
    color: ${(props) => props.theme.colors.white};
		text-decoration: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }
`;


export default ProjectsWrapper;