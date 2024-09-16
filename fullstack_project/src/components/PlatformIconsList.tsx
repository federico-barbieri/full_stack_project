import React from 'react'
import {Text, Icon, HStack} from "@chakra-ui/react"
import { Platform } from "../hooks/useGames";


import {
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaAndroid,
    FaSteam,
} from "react-icons/fa";

import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";

interface Props {
    platforms: Platform [];
}

function PlatformIconsList({platforms}: Props) {

    const getIcon = (slug: string) => {
        switch (slug) {
            case 'windows':
                return FaWindows;
                case 'xbox':
                    return FaXbox;
                    case 'playstation':
                        return FaPlaystation;
                        case 'apple':
                            return FaApple;
                            case 'linux':
                                return FaLinux;
                                case 'android':
                                    return FaAndroid;
                                        case 'steam':
                                            return FaSteam;
                                            case 'nintendo':
                                                return SiNintendo;
        }
}
                                                        
    



  return (
    <HStack marginY="2">
        {platforms.map((platform) => (
        <Icon key={platform.id} as={getIcon(platform.slug)} />

    ))}

    </HStack>
   
  )
}

export default PlatformIconsList