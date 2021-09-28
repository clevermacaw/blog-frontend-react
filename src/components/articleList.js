import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ArticleList(props) {
  return (
    <>
      {props.items.map(({ id, title, body }) => (
        <div key={id}>
          <Link to={`/articles/${id}`}>
            <b>{title}</b>
          </Link>
          <p>{body}</p>
        </div>
      ))}
    </>
  )
}

ArticleList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ArticleList
