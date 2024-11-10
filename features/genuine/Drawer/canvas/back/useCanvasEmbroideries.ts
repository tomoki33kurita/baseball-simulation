export const isHalfWidthCharChecker = (str: string) => !str.match(/^[^\x01-\x7E\xA1-\xDF]+$/)
