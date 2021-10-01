import { Query, Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'

function ArticlePage(props) {
  const query = gql`
    query loadArticle($id:ID!)
      articles {
        id
        title
        body
      }
    }
  `

  return (
    <Query query={query}>
      {({ data, loading }) =>
        loading ? (
          <div>loading...</div>
        ) : data.article ? (
          <Mutation mutation={mutation}>
            {(createArticle, { loading }) => (
              <ArticleForm
                initialTitle={data.article.title}
                initialBody={data.article.body}
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
        ) : (
          <div>
            Something went wrong
            <Link to="/articles">To list</Link>
          </div>
        )
      }
    </Query>
  )
}

export default ArticlePage
