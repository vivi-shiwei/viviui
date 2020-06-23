import React from "react"
import {
    Input,
    useEventListener,
    Box,
    InputLeftElement,
    InputGroup,
} from "@chakra-ui/core"
import { SearchIcon } from "@chakra-ui/icons"
import "../styles/algolia.css"

let link

if (typeof window !== "undefined") {
    link = document.createElement("a")
}


function Search(props) {

    return (
        <Box
            position="relative"
            width="100%"
            boxSizing="content-box"
            display={["none", "block", "block"]}
            {...props}
            __css={{
                ".algolia-autocomplete": {
                    width: "100%",
                },
                ".algolia-autocomplete .ds-dropdown-menu": {
                    width: "100% !important",
                    maxWidth: "100% !important",
                    minWidth: "0 !important",
                },
                ".algolia-docsearch-suggestion--category-header": {
                    bg: "teal.400",
                },
                ".algolia-docsearch-suggestion--highlight": {
                    bg: "teal.50",
                    color: "gray.800",
                },
                ".ds-dropdown-menu": {
                    "&:before": {
                        display: "none",
                    },
                },
                ".ds-cursor .algolia-docsearch-suggestion--wrapper": {
                    bg: "gray.100",
                    boxShadow: "none",
                },
            }}
        >
            <InputGroup variant="filled" size="md">
                <InputLeftElement>
                    <SearchIcon color="gray.500" />
                </InputLeftElement>
                <Input
                    placeholder={`Search the docs (Press "/" to focus)`}
                    focusBorderColor="teal.200"
                    ref={ref}
                    borderRadius="md"
                    id="algolia-search"
                    aria-label="Search Chakra UI docs"
                />
            </InputGroup>
        </Box>
    )
}

export default Search