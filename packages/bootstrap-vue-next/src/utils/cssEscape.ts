import {toString} from './stringUtils'

const escapeChar = (value: string) => `\\${value}`

/**
 * The `cssEscape()` util is based on this `CSS.escape()` polyfill: https://github.com/mathiasbynens/CSS.escape
 *
 * @param {unknown} value
 * @deprecated
 */
export default (value: unknown): string => {
  const val = toString(value)

  const {length} = val
  const firstCharCode = val.charCodeAt(0)

  return val.split('').reduce((result: string, char: string, index: number) => {
    const charCode = val.charCodeAt(index)

    // If the character is NULL (U+0000), use (U+FFFD) as replacement
    if (charCode === 0x0000) {
      return `${result}\uFFFD`
    }

    // If the character ...
    if (
      // ... is U+007F OR
      charCode === 0x007f ||
      // ... is in the range [\1-\1F] (U+0001 to U+001F) OR ...
      (charCode >= 0x0001 && charCode <= 0x001f) ||
      // ... is the first character and is in the range [0-9] (U+0030 to U+0039) OR ...
      (index === 0 && charCode >= 0x0030 && charCode <= 0x0039) ||
      // ... is the second character and is in the range [0-9] (U+0030 to U+0039)
      // and the first character is a `-` (U+002D) ...
      (index === 1 && charCode >= 0x0030 && charCode <= 0x0039 && firstCharCode === 0x002d)
    ) {
      // ... https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
      return result + escapeChar(`${charCode.toString(16)} `)
    }

    // If the character ...
    if (
      // ... is the first character AND ...
      index === 0 &&
      // ... is a `-` (U+002D) AND ...
      charCode === 0x002d &&
      // ... there is no second character ...
      length === 1
    ) {
      // ... use the escaped character
      return result + escapeChar(char)
    }

    // If the character ...
    if (
      // ... is greater than or equal to U+0080 OR ...
      charCode >= 0x0080 ||
      // ... is `-` (U+002D) OR ...
      charCode === 0x002d ||
      // ... is `_` (U+005F) OR ...
      charCode === 0x005f ||
      // ... is in the range [0-9] (U+0030 to U+0039) OR ...
      (charCode >= 0x0030 && charCode <= 0x0039) ||
      // ... is in the range [A-Z] (U+0041 to U+005A) OR ...
      (charCode >= 0x0041 && charCode <= 0x005a) ||
      // ... is in the range [a-z] (U+0061 to U+007A) ...
      (charCode >= 0x0061 && charCode <= 0x007a)
    ) {
      // ... use the character itself
      return result + char
    }

    // Otherwise use the escaped character
    // See: https://drafts.csswg.org/cssom/#escape-a-character
    return result + escapeChar(char)
  }, '')
}
