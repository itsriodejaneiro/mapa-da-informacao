import styled from "styled-components"

export const Wrapper = styled.div`
	padding: 0 30px;
	color: #fff;
	font-family: 'Fira Mono', monospace;
	position: relative;
	// background: green;
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
	.btn {
		background: #fff;
		padding: 7px 12px 6px;
		border-radius: 8px;
		color: #000;
		display: flex;
    align-items: center;
		margin: 20px 0 0;
		width: fit-content;
		font-weight: 600;
    font-size: 14px;
		line-height: 1;
		transition: background-color .4s ease;
		img {
			display: block;
			margin-left: 10px;
			height: 20px;
		}
		&:hover {
			text-decoration: none;
			background: rgba(255, 255, 255, .6);
		}
	}
`;
export default Wrapper;