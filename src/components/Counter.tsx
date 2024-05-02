import "dreamland/dev"

export const Counter: Component<
    {}, { counter: number }
> = function () {

    this.counter = 0

    return (
        <button on:click={() => this.counter++}>Clicks: {use(this.counter)}</button>
    )

}