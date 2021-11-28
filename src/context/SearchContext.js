import React, { useContext, useState } from 'react'

export const SearchContext = React.createContext()

export const SearchProvider = (props) => {
  const [query, setQuery] = useState('')

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
      }}
      {...props}
    />
  )
}

export function useSearchContext() {
  const value = useContext(SearchContext)

  if (!value) {
    throw new Error('the component must be in Search context')
  }
  return value
}
