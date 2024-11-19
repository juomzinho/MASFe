import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
body: {
    width: 100vw;
    height: 100vh;
    background: ${({theme}) => theme.primary};
    position: relative;
    padding: 10px;
    box-sizing: border-box;
}
`;
