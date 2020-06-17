import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

const ListOfCategoriesComponents = () => {
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

  if(loading) return (
    <List>
      <span className="circle"/>
      <span className="circle"/>
      <span className="circle"/>
      <span className="circle"/>
      <span className="circle"/>
      <span className="circle"/>
    </List>
  )

  return (
    <>
      { renderList() }
      { showFixed && renderList(true) }
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponents)
