import { useSearchContext } from '../../context/SearchContext'
import { Button } from '../../base-components'
import { SearchInput } from './Search.sc'

export function Search() {
  const { query, setQuery } = useSearchContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(e.target[0].value)
  }

  return (
    <form onSubmit={handleSubmit} data-testid="search">
      <SearchInput
        type="text"
        defaultValue={query}
        aria-label="Search"
        placeholder="Search..."
        data-testid="searchInput"
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
