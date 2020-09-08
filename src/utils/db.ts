export default {
  set(key: 'records' | 'myOutlayTags' | 'myIncomeTags' | 'MAX_ID', value: string) {
    window.localStorage.setItem(key, value)
  },
  get(key: 'records' | 'myOutlayTags' | 'myIncomeTags' | 'MAX_ID') {
    const dataString = window.localStorage.getItem(key)
    return dataString ? JSON.parse(dataString) : null
  }
}