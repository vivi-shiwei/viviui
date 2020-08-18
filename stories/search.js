import React from 'react'

import Search from '../src/components/search/index'
import Container from '../src/components/container'
import SearchBox from '../src/components/search/searchInput'
import SearchButton from '../src/components/search/searchButton'
import SearchResult from '../src/components/search/searchResult'

export default { title: 'Search(hui vivi)' }

export const SearchTest = () => {
  return (
    <Container mt='30px'>
      <Search
        left={<SearchBox placeholder='活动名称、特长' />}
        right={<SearchButton>搜索</SearchButton>}
      >

        <SearchResult display='block'>無數據</SearchResult>
      </Search>
    </Container>
  )
}
