import styled from 'styled-components';

export const Conteiner = styled.section`
    width: 100%;
    height: 100vh;
    .corpo{
        max-width: 960px;
        margin: 60px auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }
    
    .corpo_text{
        width: 400px;
        height: 400px;
        
        h1{
            color: white;
            font-size: 2rem;
        }
        p{
            color: white;
            font-size: 1.4rem;
            line-height: 1.2;
        }
    }  
`;