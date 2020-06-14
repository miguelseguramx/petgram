import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export function ListOfCategories(props) {
  const { categories, loading } = useCategoriesData()
  const [ showFixed, setShowFixed ] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200 

      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [ showFixed ])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category => (
          <Item key={category.id}>
            <Category { ...category } path={`/pet/${category.id}`}/>
          </Item>
          )
        )
      }
    </List>
  )

  if (loading) {
    return 'Loading...'
  }

  return (
    <>
      { renderList() }
      { showFixed && renderList(true) }
    </>
  )
}
