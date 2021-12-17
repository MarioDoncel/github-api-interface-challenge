import React from 'react';

import { CardContainer } from './styles';

interface ICardProps {
  name: string, full_name: string, url:string, key:number
}

const Card = (props:ICardProps) => {
  return (
    <CardContainer>
        <h2>{props.name}</h2>
        <p>Full name:</p>
        <a href={props.url}>{props.full_name}</a>
    </CardContainer>
  );
}

export default Card;