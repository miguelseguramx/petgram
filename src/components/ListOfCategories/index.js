import React from 'react';
import { Category } from '../Category/index'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export function ListOfCategories(props) {
  return (
    <List>
      {
        categories.map(category => (
            <Item key={category.id}>
              <Category { ...category }/>
            </Item>
          )
        )
      }
    </List>
  );
}
