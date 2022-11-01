import Navbar from './Navbar'
import Head from 'next/head'
import { Container } from '@mui/material'

export default function Layout({ children }) {
    return(
        <>
            <Head>
                <title>Teste Loop</title>
            </Head>
            <Navbar/>
            <Container maxWidth="md">{children}</Container>
        </>
    )
}