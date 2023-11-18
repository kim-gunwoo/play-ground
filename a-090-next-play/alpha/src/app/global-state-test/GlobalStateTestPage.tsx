'use client'

import GlobalZustandStateCaseA from "./GlobalZustandStateCaseA"
import GlobalZustandStateCaseAdd from "./GlobalZustandStateCaseAdd"
import GlobalZustandStateCaseB from "./GlobalZustandStateCaseB"

function GlobalStateTestPage() {
    return <div>
        <GlobalZustandStateCaseA />
        <GlobalZustandStateCaseB />
        <GlobalZustandStateCaseAdd />
    </div>
}

export default GlobalStateTestPage