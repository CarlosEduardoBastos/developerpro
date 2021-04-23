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
        
    }
    
    .corpo_text{
        margin-left: 10px;
        width: 400px;
        height: 300px;
        
        h1{
            color: white;
            font-size: 2rem;
        }
        p{
            color: white;
            font-size: 1.4rem;
            line-height: 1.2;
        }
        .nome{
            color: tomato;
        }
        li{
            display: inline-block;
            margin: 5px;
            color: white;
        }
        h3{
            text-align: center;
            color: white;
            margin: 5px;
        }
    }  
`;