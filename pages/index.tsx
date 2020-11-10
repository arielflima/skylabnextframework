// import Head from 'next/head'

import {Heading, Grid, Flex, Input, Link, Button} from '@chakra-ui/core'

export default function Home() {
  return (
    <Grid 
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
      '. . . .'
      '. logo form .'
      '. . . .'
      "

      justifyContent="center"
      alignItems="center"
      >

        <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
          <img src="rocketseat.svg" alt="RocketSeat" />

          <Heading size="2xl" lineHeight="shorter" marginTop={16}>
            Faça seu login
            </Heading>

        </Flex>

        <Flex
          gridArea="form"
          height="100%"
          backgroundColor="gray.700"
          borderRadius="md"
          flexDir="column"
          alignItems="streach"
          padding={16}
          >
            <Input
              height="50px"
              backgroundColor="gray.800"
              focusBorderColor="purple.500"
              borderRadius="sm"
              placeholder="E-mail"
              />

            <Input
              height="50px"
              backgroundColor="gray.800"
              focusBorderColor="purple.500"
              borderRadius="sm"
              placeholder="Senha"
              marginTop={2}
              />  
              <Link
                alignSelf="flex-start"
                marginTop={2}
                fontSize="sm"
                color="purple.600"
                fontWeight="bold"
                _hover={{ color: 'purple.500' }}
              >
                Esqueci minha senha
              </Link>

              <Button
               marginTop={6}
               backgroundColor="purple.500"
               height="50px"
               borderRadius="sm"
               _hover={{ backgroundColor: 'purple.600'}}
              >ENTRAR</Button>
          </Flex>
    </Grid>
  )
}