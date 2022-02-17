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
        Errate das Wörtchen des Tages in 6 Versuchen. Nach jedem Versuch wird
        mit Farben angezeigt, wie nah dein Wort der Lösung war:
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
        Jeden Tag um Mitternacht wird ein neues Wörtchen freigeschaltet. Hast du
        Feedback oder willst dein Ergebnis teilen? Schreibe ins{' '}
        <a
          href="https://forum.sofacoach.de/t/1888"
          className="underline font-bold"
        >
          Sofacoach-Forum
        </a>
        .
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Wörtchen ist ein deutschsprachiger Klon von{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          Wordle
        </a>
        . Den Quellcode findet ihr{' '}
        <a
          href="https://github.com/diondiondion/woertchen/"
          className="underline font-bold"
        >
          auf Github
        </a>
        .
      </p>
    </BaseModal>
  )
}
