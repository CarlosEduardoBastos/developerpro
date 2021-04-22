import React from 'react';
import { Conteiner } from './styles/HeaderContent.styles';
import Lottie from 'react-lottie';
import animationData from './animation/36121-developer-at-work.json'

const HeaderContent = ({title}) => {
    const [animationState, setAnimarionState] = React.useState({
        isStopped: false, isPaused: false
    });
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <Conteiner>
            <section className="corpo">
                <section className="corpo_text">
                    <h1>{title}</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Tempora iste, repudiandae rerum iure eaque temporibus adipisci nulla,
                          corporis consectetur sapiente illo, 
                        pariatur quaerat a repellendus natus. Sapiente suscipit consectetur nemo?
                    </p>
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
