import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import ArticleList from '../components/articleList'

const query = gql`
  {
    articles {
      id
      title
      body
    }
  }
`

function ArticlesPage() {
  return (
    <Query query={query}>
      {({ data, loading }) =>
        loading ? (
          <div>loading...</div>
        ) : (
          data.articles && <ArticleList items={data.articles} />
        )
      }
    </Query>
  )
}

export default ArticlesPage
