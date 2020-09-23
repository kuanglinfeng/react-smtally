import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import queryString from 'query-string'
import styled from 'styled-components'
import Header from 'components/Header'
import Icon from 'components/Icon'
import { IconWrapper, TagItem, Tags, Title } from 'components/add/UserTags'
import { systemIncomeTags, systemOutlayTags, SystemTags } from 'constants/systemTags'
import useUserTags from 'hooks/useUserTags'
import theme from 'theme'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const IconBorder = styled(IconWrapper)`
  &.selected {
     background: ${ (props: IconWrapperProps) => props.backgroundColor };
    .icon {
      fill: #fff;
    }
  }
`

const Button = styled.div`
  font-size: 16px;
  color: #fff;
  padding-right: 5px;
`

const Main = styled.main`
  padding: 16px 0;
  flex-grow: 1;
  overflow: auto;
`

const TagType = styled.h3`
  font-size: 16px;
  color: #999;
  text-align: center;
  padding-top: 8px;
  font-weight: 400;
`

export default () => {

  const location = useLocation()
  const history = useHistory()
  const parsed = queryString.parse(location.search)
  const [systemTags] = useState(parsed.type === '-' ? systemOutlayTags : systemIncomeTags)
  const { get, set } = useUserTags(parsed.type === '-' ? 'userOutlayTags' : 'userIncomeTags')
  const [selectedTags, setSelectedTags] = useState(get())

  const isTagSelected = (tag: TagItem) => {
    return selectedTags.find(selectedTag => selectedTag.value === tag.value) !== undefined
  }

  const onTagClick = (tag: TagItem) => {
    const tags = [...selectedTags]
    if (isTagSelected(tag)) {
      setSelectedTags(tags.filter(t => t.value !== tag.value))
    } else {
      tags.splice(-1, 0, tag)
      setSelectedTags(tags)
    }
  }

  const onSubmit = () => {
    set(selectedTags)
    history.goBack()
  }

  const renderEl = (systemTags: SystemTags) => {
    const elements = []
    for (const prop in systemTags) {
      if (systemTags.hasOwnProperty(prop)) {
        const tagType = <TagType>{ systemTags[prop][0].title }</TagType>
        const tags = systemTags[prop].map(tag => {
          return (<TagItem key={ tag.value } onClick={ () => onTagClick(tag) }>
            <IconBorder backgroundColor={ theme.tagColors[tag.value] }
                        className={ isTagSelected(tag) ? 'selected' : '' }>
              <Icon name={ tag.value } />
            </IconBorder>
            <Title>{ tag.title }</Title>
          </TagItem>)
        })
        const tagsElement = <Tags>{ tags }</Tags>
        const element = <div key={ prop }>{ tagType }{ tagsElement }</div>
        elements.push(element)
      }
    }
    return elements
  }

  return (
    <Wrapper>
      <Header>
        <Icon name="back" onClick={ () => history.goBack() } />
        <Button onClick={ onSubmit }>确定</Button>
      </Header>
      <Main>{ renderEl(systemTags) }</Main>
    </Wrapper>
  )
}