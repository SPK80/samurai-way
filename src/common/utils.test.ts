import { getValidIdNumber } from './utils'

test('getValidIdNumber', () => {
    expect(getValidIdNumber('')).toBe(null)
    expect(getValidIdNumber(null)).toBe(null)
    expect(getValidIdNumber(undefined)).toBe(null)
    expect(getValidIdNumber(' 1')).toBe(null)
    expect(getValidIdNumber('    1')).toBe(null)
    expect(getValidIdNumber('2 ')).toBe(null)
    expect(getValidIdNumber('2    ')).toBe(null)
    expect(getValidIdNumber(' 3 ')).toBe(null)
    expect(getValidIdNumber(' a3 ')).toBe(null)
    expect(getValidIdNumber('3a')).toBe(null)

    expect(getValidIdNumber('41')).toBe(41)
})
