import React, { useState, useEffect } from 'react'

export function useCategoriesData() {
  const [ categories, setCategories ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server.miguelseguramx.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}
