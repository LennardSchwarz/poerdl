import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="So funktioniert's:"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p>
        Du hast 6 Versuche, das Wort des Tages zu erraten. Nach jedem Versuch
        wird mit unterschiedlichen Farben angezeigt, wie nah dein Wort dem
        gesuchten war:
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" status="correct" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="K" />
        <Cell value="E" />
      </div>
      <p>Das D kommt im Wort an der richtigen Stelle vor.</p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="K" />
        <Cell value="E" />
        <Cell value="B" />
        <Cell value="A" status="present" />
        <Cell value="P" />
      </div>
      <p>Das A kommt im Wort vor, jedoch an anderer Stelle.</p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="R" status="absent" />
        <Cell value="Ü" />
        <Cell value="N" />
        <Cell value="E" />
      </div>
      <p>Das R kommt nicht im Wort vor.</p>

      <p className="mt-4">
        Um Mitternacht wird ein neues Wörtchen des Tages freigeschaltet!
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Wörtchen ist ein deutschsprachiger Klon von{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          Wordle
        </a>
        der auf Basis von Hannah Parks{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Open-Source-Adaption
        </a>{' '}
        erstellt wurde.
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
