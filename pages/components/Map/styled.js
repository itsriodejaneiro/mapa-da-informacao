import styled from "styled-components"

export const Wrapper = styled.div`
	padding: 0 30px;
	color: #fff;
	font-family: 'Fira Mono', monospace;
	position: relative;
	svg {
		.legenda {
			.legenda-text {
				fill: #fff;
			  opacity: 0.7;
				font-size: 14px;
			  cursor: pointer;
			}
			.legenda-line {
				stroke: #fff;
				stroke-opacity: 0.05;
				stroke-width: 2px;
			}
		}
		.labels {
			text {
				fill: #fff;
				font-family: 'Fira Mono', monospace;
				font-size: inherit;
			}
		}
		.vis-background {
			fill: transparent;
		}
	}
	// .tooltip {
	// 	background: rgba(0, 0, 0, 0.85);
  //   padding: 12px 20px 10px 14px;
	// 	font-size: 10px;
	// 	width: 300px;
	// 	position: absolute;
	// 	display: none;
	// 	&-title {
	// 		text-transform: uppercase;
	// 	}
	// 	&-text {
	// 		font-size: 12px;
	// 		line-height: 1.2;
	// 	}
	// 	&.show {
	// 		display: block;
	// 	}
	// }
`;
export default Wrapper;