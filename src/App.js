import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { ApolloProvider } from 'react-apollo'

import ArticlePage from './pages/articlePage'
import ArticlesPage from './pages/articlesPage'
import client from './apolloClient'
import './App.css'
import logo from './logo.svg'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App-home d-flex flex-column">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/articles">See articles</Link>
            </div>
          </Route>
          <Route path="/articles">
            <Navbar color="grey" light expand="md" className="container">
              <NavbarBrand href="/">Blog</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/articles">Articles</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            <main className="container">
              <Switch>
                <Route exact path="/articles">
                  <ArticlesPage />
                </Route>
                <Route exact path="/articles/:id">
                  <ArticlePage />
                </Route>
              </Switch>
            </main>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
