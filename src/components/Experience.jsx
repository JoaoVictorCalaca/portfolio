import { BookA, Code, GraduationCap, Microscope, SchoolIcon, StarIcon, University, WorkflowIcon } from 'lucide-react';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#512bd4', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #512bd4' }}
          date="2022 - 2024"
          iconStyle={{ background: '#512bd4', color: '#fff' }}
          icon={<GraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Início dos estudos</h3>
          <h4 className="vertical-timeline-element-subtitle">Trindade, GO</h4>
          <p>
            Em 2022, comecei meus estudos na área da computação, focado em desenvolvimento web e mobile, por meio do curso Técnico em Informática para Internet no Instituo Federal Goiano.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          date="2024"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<Microscope />}
        >
          <h3 className="vertical-timeline-element-title">Primeiro Projeto de iniciação Científica</h3>
          <p>
            Em 2024, participei do meu primeiro projeto de iniciação científica, focado em desenvolver um aplicativo mobile voltado para monitoramento de treinos de musculação, onde pude aplicar os conhecimentos adquiridos durante o curso técnico.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Code />}
        >
          <h3 className="vertical-timeline-element-title">Projeto Final do curso</h3>
          <p>
            No projeto final do curso técnico, desenvolvio um navegador web completo para dispositivos móveis utilizando React Native, Java Spring Boot e Postgresql, integrando diversas funcionalidades para proporcionar uma experiência de navegação eficiente e amigável aos usuários.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
          date="2025"
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<University />}
        >
          <h3 className="vertical-timeline-element-title">Início do curso superior</h3>
          <h4 className="vertical-timeline-element-subtitle">Trindade, GO</h4>
          <p>
            Em 2025, iniciei o curso de Bacharelado em Engenharia da Computação no IF Goiano, onde continuo a expandir meus conhecimentos e habilidades na área de computação.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ff8600', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  ff8600' }}
          date="2025 - presente"
          iconStyle={{ background: '#ff8600', color: '#fff' }}
          icon={<University />}
        >
          <h3 className="vertical-timeline-element-title">Primeira oportunidade profissional</h3>
          <h4 className="vertical-timeline-element-subtitle">Trindade, GO</h4>
          <p>
            Consegui minha primeira oportunidade profissional como técnico de TI na empresa Vila São José Bento Cottolengo, onde aplico meus conhecimentos técnicos para gerenciar e solucionar problemas relacionados à infraestrutura de TI, manutenção de computadores e desenvolvimento de alguns sistemas para a instituição.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ff8600', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  ff8600' }}
          date="2026 - presente"
          iconStyle={{ background: '#ff8600', color: '#fff' }}
          icon={<University />}
        >
          <h3 className="vertical-timeline-element-title">Mudança de curso</h3>
          <h4 className="vertical-timeline-element-subtitle">Goiânia, GO</h4>
          <p>
            Buscando um curso superior com ênfase em desenvolvimento de sistemas, optei por me transferir pro curso de Eng. de Software no Centro Universitário Alves Faria.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'white', color: '#1a1a1a' }}
          icon={<StarIcon fill='#1a1a1a' />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Experience