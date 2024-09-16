import React from 'react'
import {Card, Image, Heading, CardBody} from "@chakra-ui/react";

interface Props{
    game: Game;
}

function GameCard({game}: Props) {

  return (
    <Card>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize="2x1">{game.name}</Heading>
        </CardBody>

    </Card>
  )
}

export default GameCard