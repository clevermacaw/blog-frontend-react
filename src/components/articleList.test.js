import { shallow } from 'enzyme'

import ArticleList from './articleList'

const mockArticles = [
  {
    id: 1,
    title: '1',
    body: 'fake body1',
  },
  {
    id: 2,
    title: '2',
    body: 'fake body2',
  },
  {
    id: 3,
    title: '3',
    body: 'fake body3',
  },
]

describe('<ArticleList />', () => {
  it('should render given articles', () => {
    const wrapper = shallow(<ArticleList items={mockArticles} />)
    mockArticles.forEach((article) => {
      expect(wrapper.contains(<b>{article.title}</b>)).toBe(true)
      expect(wrapper.contains(<p>{article.body}</p>)).toBe(true)
    })
  })
})
