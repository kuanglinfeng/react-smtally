import db from '../utils/db'

export default function (tagsType: 'userOutlayTags' | 'userIncomeTags') {
  const get = () => db.get(tagsType) || []
  const set = (tags: TagItem[]) => db.set(tagsType, JSON.stringify(tags))
  return { get, set }
}
