import React from 'react'
import {Badge} from "@chakra-ui/react";

interface Props{
    score: number;
}

const CriticScore = ({score}: Props) =>{

    const color = score >= 90 ? "green" : score >= 50 ? "yellow" : "red";

    return (
        <Badge colorScheme={color} variant="outline" size="lg" borderRadius="5" paddingX="1">
            {score}
        </Badge>

    )

}


export default CriticScore