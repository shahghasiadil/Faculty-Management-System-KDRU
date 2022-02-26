import { useState, useEffect } from 'react'
import axios from 'axios'
import AutoComplete from '@components/autocomplete'

const AutoCompleteAjax = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    axios.get('/api/autocomplete/data').then(response => setSuggestions(response.data.autoComplete))
  }, [])

  return suggestions.length ? (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      placeholder='Search for any of the top 250 IMDB movies'
    />
  ) : null
}
export default AutoCompleteAjax
