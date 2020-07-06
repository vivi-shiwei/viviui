import React from 'react'
import {
  Box,
  Spinner
} from '@chakra-ui/core'
import InfiniteScroll from 'react-infinite-scroller'

const InfiniteScrollComponent = ({ children, loadMore, hasMore }) => (
  <div>
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={hasMore}
      threshold={750}
      initialLoad={false}
      loader={
        <Box key='loader' d='flex' m={3} justifyContent='center'>
          <Spinner />
        </Box>
      }
    >
      {children}
    </InfiniteScroll>
    <style jsx>{`
      div, div > div {
        width: 100%
      }
    `}
    </style>
  </div>
)

export default InfiniteScrollComponent
