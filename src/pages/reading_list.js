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
      <img
                    src="http://books.google.com/books/content?id=d7fCsgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
                    className="d-inline-block align-top mb-0"
                    alt= " Logo"
                />
    </Layout>
  )
}

export default ReadingList