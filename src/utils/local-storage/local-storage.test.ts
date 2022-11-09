import { getStorageItem, setStorageItem } from './local-storage'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'SURVEY-MODULE_survey',
      JSON.stringify(['1', '2'])
    )

    expect(getStorageItem('survey')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('survey', ['1', '2'])

    expect(window.localStorage.getItem('SURVEY-MODULE_survey')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
