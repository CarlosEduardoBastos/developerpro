import styled from 'styled-components';

export const HeaderConteiner = styled.header`
    width: 100%;
    height: 70px;
    section{
        display: flex;
        max-width: 960px;
        margin: 0 auto;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }
    .logo{
        color: white;
        text-decoration: none;
        font-size: 1.3rem;
    }
    li{
        display: inline-block;
        margin: 10px;
    }
    li a{
        color: white;
        text-decoration: none;
    }
`;