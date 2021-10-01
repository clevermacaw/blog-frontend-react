import { useState } from 'react'
import { Button } from 'reactstrap'
import PropTypes from 'prop-types'

function ArticleForm({
  initialTitle,
  initialBody,
  onProcessItem,
  buttonText,
  loading,
}) {
  const [title, setTitle] = useState(initialTitle)
  const [body, setBody] = useState(initialBody)

  function handleSubmit(e) {
    e.preventDefault()
    e.stopPropagation()

    onProcessItem({ title, body })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
      />
      <textarea
        placeholder="body"
        className="form-control"
        onChange={(e) => setBody(e.target.value)}
      >
        {body}
      </textarea>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <Button type="submit" color="primary">
          {buttonText}
        </Button>
      )}
    </form>
  )
}

ArticleForm.propTypes = {
  initialTitle: PropTypes.string,
  initialBody: PropTypes.string,
  onProcessItem: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default ArticleForm
