import "dreamland/dev"
import { Counter } from "./components/Counter"

import tsLogo from "./typescript.svg"

export const App = function () {
    return (
        <div class="container">
            <div>
                <img src={tsLogo} alt="Typescript Logo" />

                <h1>dreamland.js tsx template</h1>
                <p>Edit <code>src/app.tsx</code> and watch your app update automatically</p>

                <Counter />

                <p>
                    <a href="https://dreamland.js.org/" target="__blank">Documentation</a> | <a href="https://github.com/MercuryWorkshop/dreamlandjs" target="__blank">GitHub</a> | <a href="https://discord.gg/JAjNyRRgYF" target="__blank">Discord Chat</a>
                </p>
            </div>
        </div>
    )
}