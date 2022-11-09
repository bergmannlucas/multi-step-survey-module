const APP_KEY = 'SURVEY-MODULE'

export function getStorageItem(key: string) {
  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, value: any) {
  const data = JSON.stringify(value)

  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
