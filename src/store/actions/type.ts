export const type = {
  SWITCH_THEME: 'SWITCH_THEME',
}
export function switchThme(theme: string) {
  return {
    type: type.SWITCH_THEME,
    theme
  }
}