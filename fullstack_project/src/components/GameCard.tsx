import React from 'react'
import {Card, Image, Heading, CardBody, Text} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";

interface Props{
    game: Game;
}

function GameCard({game}: Props) {

  return (
    <Card>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize="2x1">{game.name}</Heading>
            <PlatformIconsList 
            platforms={game.parent_platforms.map((pp) => pp.platform)} 
            />
            <CriticScore score={game.metacritic} />
        </CardBody>

    </Card>
  )
}

export default GameCard