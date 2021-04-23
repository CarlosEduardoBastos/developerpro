import React from 'react';
import { Conteiner } from './styles/HeaderContent.styles';
import Lottie from 'react-lottie';
import animationData from './animation/36121-developer-at-work.json'

const HeaderContent = ({title}) => {
    const [animationState, setAnimarionState] = React.useState({
        isStopped: false, isPaused: false
    });
    const [nome, setNome] = React.useState('');
    const [repos, setRepos] = React.useState([]);
    const [totalRepos, setTotalRepos] = React.useState('');
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    React.useEffect(()=>{
        const api = async () => {
            const http = await fetch('https://api.github.com/users/CarlosEduardoBastos');
            const res = await http.json();
            const {login, repos_url, public_repos} = res;
            const repositorios = repos_url;
            setNome(login);
            setTotalRepos(public_repos)
            console.log(repositorios)
            const apiRepos = async () => {
                const url = await fetch(repositorios);
                const json = await url.json()
                console.log(json)
                setRepos(json)
            }
            apiRepos()
        }
        api()
    },[])
    return (
        <Conteiner>
            <section className="corpo">
                <section className="corpo_text">
                    <h1>{title}</h1>
                    <p>
                        Meu nome é Carlos Eduardo, tenho 17 anos, comecei na área da programação aos 
                        11 anos, utilizando a linguagem python, mas o que me apaixonou foi o
                        desenvolvimento web onde eu estou até hoje,
                        no desenvolvimento web foi onde eu aprendi html, css, javascript
                        e estou aprendendo react.js e next.js.
                    </p>
                    <p>Nome no Github: <small className="nome">{nome}</small></p>
                    <h3>Repositórios: {totalRepos}</h3>
                    {repos.map(({id, name}) => <li key={id}>{name}</li>)}
                </section>
                <section className="img">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}/>
                </section>
            </section>
        </Conteiner>
    )
}

export default HeaderContent
