import { createContext, useContext, useState } from 'react'

const filmsCategoriesGlobalContext = createContext()

export function GlobalContext({ children }) {
  const [trending, setTrending] = useState([])
  const [topRated, setTopRated] = useState([])
  const [discover, setDiscover] = useState([])
  return (
    <filmsCategoriesGlobalContext.Provider
      value={{
        trending,
        setTrending,
        topRated,
        setTopRated,
        discover,
        setDiscover,
      }}
    >
      {children}
    </filmsCategoriesGlobalContext.Provider>
  )
}
export function useHomePageContext() {
  const context = useContext(filmsCategoriesGlobalContext)
  if (context === undefined)
    throw new Error('Context was used outside the Context Provider ')
  return context
}
