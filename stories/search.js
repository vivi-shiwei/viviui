import React from 'react'

import Search from '../src/components/search/index'
import Container from '../src/components/container'
import SearchBox from '../src/components/search/searchBox'
import SearchButton from '../src/components/search/searchButton'
import SearchResult from '../src/components/search/searchResult'
export default { title: 'Search' }

export const SearchTest = () => {
  return (
    <Container mt='30px'>
      <Search
        left={<SearchBox placeholder='活动名称、特长' />}
        right={<SearchButton>搜索</SearchButton>}
        title={<SearchResult display='block'>無數據</SearchResult>}
      />
    </Container>
  )
}
