import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6${
      isHardMode ? '*' : ''
    }\n\n${generateEmojiGrid(guesses)}\n\nhttps://woertchen.sofacoach.de`
  )
}

export const shareStatusWithBBCode = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `[${GAME_TITLE}](https://woertchen.sofacoach.de) ` +
      solutionIndex +
      ' ' +
      (lost ? 'X' : guesses.length) +
      `/6${isHardMode ? '*' : ''}\n\n` +
      guesses
        .map(
          (guess) =>
            `${generateEmojiGridLine(guess)} [spoiler]${guess}[/spoiler]`
        )
        .join('\n')
  )
}

function generateEmojiGridLine(guess: string) {
  const status = getGuessStatuses(guess)
  return guess
    .split('')
    .map((letter, i) => {
      switch (status[i]) {
        case 'correct':
          return '🟩'
        case 'present':
          return '🟨'
        default:
          return '⬜'
      }
    })
    .join('')
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses.map(generateEmojiGridLine).join('\n')
}
