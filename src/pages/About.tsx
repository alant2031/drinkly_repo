import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import myself from '../assets/myself.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Loading from '../components/Loading'

export default function About() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 800)
  }, [])
  return (
    <div>
      { isLoading ? <Loading /> :
        <>
          <Header title="About" subtitle="Information about me." />
          <Content>
            <div className="d-block d-sm-flex">
              <div>
                <h3 className="text-olive">Olá :D</h3>
                <p className="fs-5">Meu nome é Alan Tanaka e sou de Fortaleza, Brasil, uma cidade maravilhosa conhecida por suas belas praias e sua rica cultura. Desde a minha infância, sempre gostei muito de jogos puzzle e foi isso que me levou a estudar programação. Eu comecei a aprender programação quando era jovem e desde então nunca parei. Hoje, utilizo ferramentas como React, Node e Python para desenvolver aplicações full stack. Eu adoro trabalhar com essas tecnologias e sempre estou em busca de aprender mais e ficar atualizado com as últimas tendências do mercado. Além disso, eu gosto muito de trabalhar em equipe e colaborar com outros desenvolvedores para criar projetos incríveis. Acredito que a programação é uma habilidade poderosa e é uma das melhores maneiras de se expressar e fazer a diferença no mundo.</p>
                <h4 className="text-olive">Outros fatos:</h4>
                <p className="fs-5">
                  Minhas outras paixões incluem esportes, video game e xadrez. Gosto de leitura, normalmente leio conteúdo didático envolvendo tecnologia e programação.
                </p>
              </div>
              <img className="img-fluid img-thumbnail" src={myself} alt="myself" />
            </div>
            <div className="container d-flex mb-1">
              <h4 className="text-olive">Nas redes:</h4> 
              <div className="d-flex align-self-center ms-5">
                <a href="https://www.linkedin.com/in/alantanakaa/" target="_blank" rel="noreferrer" className="d-flex justify-content-center rounded-circle">
                  <FontAwesomeIcon className="fs-1 text-primary" icon={faLinkedin}/>
                </a>
                <a href="https://github.com/alant2031" target="_blank" rel="noreferrer" className="d-flex justify-content-center rounded-circle ms-3">
                  <FontAwesomeIcon className="fs-1 text-dark" icon={faGithub}/>
                </a>
              </div>
            </div>
          </Content>
        </>
      }
    </div>
  )
}
