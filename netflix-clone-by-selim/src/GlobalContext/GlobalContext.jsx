import { createContext, useContext, useState } from 'react'
import { AVATAR } from '../data'
const filmsCategoriesGlobalContext = createContext()
export const dummyUser = {
  email: 'selim@email.net',
  pass: '1337',
  img: AVATAR,
}
export function GlobalContext({ children }) {
  const [trending, setTrending] = useState([])
  const [topRated, setTopRated] = useState([])
  const [discover, setDiscover] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [romance, setRomance] = useState([])
  const [action, setAction] = useState([])
  const [kids, setKids] = useState([])
  const [horror, setHorror] = useState([])
  const [movieSearchKeyword, setMovieSearchKeyword] = useState('')
  const [searchedMovieId, setSearchedMovieId] = useState(null)
  const [user, setUser] = useState(null)
  return (
    <filmsCategoriesGlobalContext.Provider
      value={{
        trending,
        setTrending,
        topRated,
        setTopRated,
        discover,
        setDiscover,
        user,
        setUser,
        dummyUser,
        movieSearchKeyword,
        setMovieSearchKeyword,
        searchedMovieId,
        setSearchedMovieId,
        upcoming,
        setUpcoming,
        horror,
        setHorror,
        setKids,
        kids,
        romance,
        setRomance,
        action,
        setAction,
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
