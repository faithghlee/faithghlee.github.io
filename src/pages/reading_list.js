import React from "react"
import Layout from "../components/layout"
import {graphql, useStaticQuery} from 'gatsby'

const ReadingList = () => {
const data = useStaticQuery(graphql`
query  {
  allGoodreadsShelf {
        nodes {
          reviews {
            book {
              isbn
              title
              uri
            }
          }
        }
      }
}
`
) 

  return (
    <Layout>
      {data.allGoodreadsShelf.nodes[0].reviews[0].book.title}
    </Layout>
  )
}

export default ReadingList