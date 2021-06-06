import { useState } from 'react'
import AutoComplete from '@components/autocomplete'

const AutoCompleteSections = () => {
  const [suggestions] = useState([
    {
      groupTitle: '1970s',
      data: [
        {
          title: 'C'
        }
      ]
    },
    {
      groupTitle: '1980s',
      data: [
        {
          title: 'C++'
        },
        {
          title: 'Perl'
        }
      ]
    },
    {
      groupTitle: '1990s',
      data: [
        {
          title: 'Haskell'
        },
        {
          title: 'Python'
        },
        {
          title: 'Java'
        },
        {
          title: 'Javascript'
        },
        {
          title: 'PHP'
        },
        {
          title: 'Ruby'
        }
      ]
    },
    {
      groupTitle: '2000s',
      data: [
        {
          title: 'C#'
        },
        {
          title: 'Scala'
        },
        {
          title: 'Clojure'
        },
        {
          title: 'Go'
        }
      ]
    },
    {
      groupTitle: '2010s',
      data: [
        {
          title: 'Elm'
        }
      ]
    }
  ])

  return (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      filterHeaderKey='groupTitle'
      grouped={true}
      placeholder="Type 'c'"
    />
  )
}
export default AutoCompleteSections
