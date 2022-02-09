import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Auf ein Wörtchen"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p>
        Wörtchen ist ein deutschsprachiger Klon von Josh Wardles{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          Wordle
        </a>
        . Der Spielcode basiert auf Hannah Parks{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Open-Source-Adaption
        </a>{' '}
        von Wordle.
      </p>
      <p className="mt-2">
        Den Quellcode von Wörtchen findet ihr{' '}
        <a
          href="https://github.com/diondiondion/woertchen/"
          className="underline font-bold"
        >
          auf Github
        </a>
        .
      </p>
      <p className="mt-2">
        Hast du Feedback oder willst dein Ergebnis teilen? Schreibe ins{' '}
        <a
          href="https://forum.sofacoach.de/t/1888"
          className="underline font-bold"
        >
          Sofacoach-Forum
        </a>
        .
      </p>
    </BaseModal>
  )
}
