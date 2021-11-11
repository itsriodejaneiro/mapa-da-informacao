import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    backgroundPurple: '#2B2735',
    darkPurple: '#26242F',
    purple: '#725f96',
    lightPurple: '#ae92e9',
    lightestPurple: '#c9b2fa',
    lightYellow: '#ffc28f',
    darkYellow: '#af7744',
    white: '#fff',
    highlightText: '#ffc28f',
    lightGray: '#ccc',
  },
  fontSizes: {
    mainTitle: '3em',
    title: "2em",
    subtitle: '1.17em',
    text: '16px',
    footer: '0.7em',
    small: '0.8em'
  },
  fontFamilies: {
    firaMonoRegular: 'Fira Mono Regular',
    PTSansRegular: 'PT Sans Regular',
    firaSansRegular: 'Fira Sans Regular',
    firaSansThin: 'Fira Sans Thin',
    firaSansSemiBold: 'Fira Sans SemiBold',
  }
}

export const GlobalStyle = createGlobalStyle`
html {
  overflow-x: hidden;

  body {
		margin: 0;
  	padding: 0;
    overflow-x: hidden;
    position: relative;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.backgroundPurple};
    font-family: ${(props) => props.theme.fontFamilies.firaSans};

    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    header,
    footer {
      background-color: ${(props) => props.theme.colors.darkPurple};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
		p,
		blockquote,
		ul,
		li,
		button,
		input {
      color: ${(props) => props.theme.colors.white};
			margin: 0;
  		padding: 0;
    }

		a,
		input {
			color: inherit;
			font-family: inherit;
			font-size: inherit;
			line-height: inherit;
		}

    ul, ul > li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.white};
    }

    button {    
      appearance: button;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      overflow: visible;
      text-transform: none;
    }

    input {
      background: transparent;
      border: none;
      outline: none;
    }

    ::placeholder {
      color: inherit;
      opacity: 0.5;
    }
    
    :-ms-input-placeholder {
      color: inherit;
      opacity: 0.5;
    }
    
    ::-ms-input-placeholder {
      color: inherit;
      opacity: 0.5;
    }
  }
}
`;
 
export default GlobalStyle;