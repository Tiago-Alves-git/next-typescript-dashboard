'use client'

import { Button } from '@mui/material'
import Header from './Components/Header'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import './Style/home.css';

export default function Home() {
  return (
    <main className='mainSection'>
      <Header />
      <section className='GreenCircle'>
      </section>
      <h1 className='TitleLandingPage'> PLANEJE O SEU <br></br> FUTURO!! </h1>
      <div className='CallToAction'>
        <Button className='CallButtons'> Inscreva-se <ArrowCircleRightOutlinedIcon /></Button>
        <article> Ferramenta que te auxilia a organizar e ter uma melhor aproveitação de tempo na busca e aplicação em vagas de emprego! </article>
        <Button className='CallButtons'> Veja nossos recursos! <ArrowCircleDownOutlinedIcon /></Button>
      </div>
    </main>
  )
}
