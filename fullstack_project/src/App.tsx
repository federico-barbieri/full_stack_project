import { Grid, GridItem } from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid";


function App() {


  return (

    <Grid
  templateAreas=
                {{lg:`"nav nav"
                      "aside main"`,
                  base: `"nav" "main"`
                    
                }}

  h='200px'
  gap='1'
>
  <GridItem pl='2' bg='orange.300' area={'nav'}>
    <NavBar />
  </GridItem>
  <Show above="lg">
  <GridItem pl='2' bg='pink.300' area={'aside'}>
    Aside
  </GridItem>
  </Show>
  <GridItem pl='2' area={'main'}>
    <GameGrid />
  </GridItem>
</Grid>
  )
}

export default App
