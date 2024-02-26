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
                Errate das Pördl des Tages in 6 Versuchen. Nach jedem Versuch
                wird mit Farben angezeigt, wie nah dein Wort der Lösung war:
            </p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="A" />
                <Cell value="L" />
                <Cell value="L" />
                <Cell value="E" status="correct" />
                <Cell value="S" />
            </div>
            <p>Das E kommt im Wort an der richtigen Stelle vor.</p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="L" status="present" />
                <Cell value="A" />
                <Cell value="U" />
                <Cell value="C" />
                <Cell value="H" />
            </div>
            <p>Das L kommt im Wort vor, jedoch an anderer Stelle.</p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="O" />
                <Cell value="T" />
                <Cell value="T" />
                <Cell value="O" />
                <Cell value="S" status="absent" />
            </div>
            <p>Das S kommt nicht im Wort vor.</p>

            <p className="mt-4">
                Jeden Tag um Mitternacht wird ein neues Pördl freigeschaltet.
            </p>

            <button
                type="button"
                onClick={handleClose}
                className="mt-3 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            >
                Spielen
            </button>

            <p className="mt-5 italic text-sm text-gray-500 dark:text-gray-300">
                Pördl ist ein deutschsprachiger Klon von{' '}
                <a
                    href="https://www.nytimes.com/games/wordle/index.html"
                    className="underline font-bold"
                >
                    Wordle
                </a>
                .
            </p>
        </BaseModal>
    )
}
