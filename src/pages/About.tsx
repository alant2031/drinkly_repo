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
                <p className="fs-5">Me chamo Alan Tanaka, sou de Fortaleza. Terminei o Ensino Médio pelo supletivo em 2010. Já morei no Japão por um período de 5 anos a trabalho, onde aprendi o básico do idioma e sobre a cultura local. Comecei a trabalhar com suporte técnico em uma empresa de software PDV em 2016, foi onde comecei a me interessar por programação. Fiz faculdade de Sistemas de Informação onde cursei dois semestres e aprendi os fundamentos básicos. Atualmente foco meus estudos apenas à programação para me tornar um especialista em Desenvolvimento Web. Javascript e Python são minhas linguagens favoritas. </p>
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
                <a href="https://www.linkedin.com/in/alan8819/" target="_blank" rel="noreferrer" className="d-flex justify-content-center rounded-circle">
                  <FontAwesomeIcon className="fs-1 text-primary" icon={faLinkedin}/>
                </a>
                <a href="https://github.com/alanctnk" target="_blank" rel="noreferrer" className="d-flex justify-content-center rounded-circle ms-3">
                  <FontAwesomeIcon className="fs-1 text-dark" icon={faGithub}/>
                </a>
                <a href="https://www.instagram.com/348014t/" target="_blank" rel="noreferrer" className="d-flex justify-content-center rounded-circle insta ms-3">
                  <FontAwesomeIcon className="fs-1 text-white p-1" icon={faInstagram}/>
                </a>
              </div>
            </div>
          </Content>
        </>
      }
    </div>
  )
}
