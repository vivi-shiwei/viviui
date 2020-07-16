import React, { useRef } from 'react'
import {
  Box,
  Spinner
} from '@chakra-ui/core'
import InfiniteScroll from 'react-infinite-scroller'

const InfiniteScrollComponent = ({ children, loadMore, hasMore }) => {
  const scrollParentRef = useRef(null)

  return (
    <div
      ref={scrollParentRef}
      style={{
        height: '100%',
        overflowY: 'auto'
      }}
    >
      <InfiniteScroll
        initialLoad
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        useWindow={false}
        getScrollParent={() => scrollParentRef.current}
        loader={
          <Box key={0} d='flex' m={3} justifyContent='center'>
            <Spinner />
          </Box>
        }
      >
        {children}
      </InfiniteScroll>
    </div>
  )
}

export default InfiniteScrollComponent
