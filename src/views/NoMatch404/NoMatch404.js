import React from 'react'

import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'

import "./NoMatch404.scss";

export default function VODCollection() {   
    return <div className="page404">
        <Container>
            <header className="font_thin">
              <Heading />
            </header>
            <main>
              <h2 className="font_thin">Page Not Found</h2>
              <h2>404</h2>
            </main>
        </Container>
        <footer>
            <Heading />
        </footer>
    </div>
}