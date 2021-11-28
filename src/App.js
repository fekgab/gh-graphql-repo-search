import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSearchContext } from './context/SearchContext'
import { Search } from './components/Search/Search'
import { Results } from './components/Results/Results'
import { Container, Header, Wrapper } from './App.sc'

function App() {
  const { query } = useSearchContext()
  return (
    <Container data-testid="app">
      <ToastContainer />
      <Header>
        <Wrapper>
          <Search />
        </Wrapper>
      </Header>
      <Wrapper>{query && <Results query={query} />}</Wrapper>
    </Container>
  )
}

export default App
