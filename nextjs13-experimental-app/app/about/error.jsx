"use Client"

export default function ({ error, reset})  {
    return (
        <div>
            This ain't loading up: {error.message}
            <button onClick={() => reset()}></button>
        </div>
    )
}