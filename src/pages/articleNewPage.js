import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom'

import ArticleForm from '../components/articleForm'

const mutation = gql`
  mutation createArticleMutation($title: String!, $body: String!) {
    createArticle(input: { title: $title, body: $body }) {
      article {
        id
        title
        body
      }
    }
  }
`

function ArticleNewPage({ history }) {
  return (
    <Mutation mutation={mutation}>
      {(createArticle, { loading }) => (
        <ArticleForm
          buttonText="Add Item"
          loading={loading}
          onProcessItem={({ title, body }) =>
            createArticle({
              variables: { title, body },
              update: () => {
                history.push('/articles')
              },
            })
          }
        />
      )}
    </Mutation>
  )
}

export default withRouter(ArticleNewPage)
