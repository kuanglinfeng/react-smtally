export default {
  set(key: string, value: string) {
    window.localStorage.setItem(key, value)
  },
  get(key: string) {
    const dataString = window.localStorage.getItem(key)
    return dataString ? JSON.parse(dataString) : null
  }
}