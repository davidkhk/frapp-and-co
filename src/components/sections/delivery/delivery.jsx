import React from 'react';
import { Section, WorkingHours, Grid, Animation } from './delivery-style';
import IfoodImg from '../../../assets/ifood-icon.png';
import RappiImg from '../../../assets/rappi-icon.png';

const Delivery = () => {
  return (
    <Section id='delivery'>
      <h1>Peça e experimente agora!</h1>
      <WorkingHours>
        <h4>Horário de funcionamento:</h4>
        <span>Segunda à sexta: 9h:00 às 18h:00</span>
        <span>Sábados: 10h:30 às 17h:30</span>
        <span>Domingos e feriados: fechado</span>
      </WorkingHours>
      <Grid>
        <Animation>
          <a
            href='https://www.ifood.com.br/delivery/sao-paulo-sp/frapp--co-vila-mariana/609ccaed-7ae4-4579-b661-c23a7ad87105?utm_medium=share'
            target='_blank'
            rel='noreferrer'
          >
            <img src={IfoodImg} alt='Ifood icon' />
            <figcaption>
              <div>
                <p>Pra quem usa iFood</p>
              </div>
            </figcaption>
          </a>
        </Animation>
        <Animation>
          <a
            href='https://www.rappi.com.br/restaurantes/900522096'
            target='_blank'
            rel='noreferrer'
          >
            <img src={RappiImg} alt='img1' />
            <figcaption>
              <div>
                <p>ou pra quem prefere Rappi</p>
              </div>
            </figcaption>
          </a>
        </Animation>
      </Grid>
    </Section>
  );
};

export default Delivery;
