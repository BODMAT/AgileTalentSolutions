export function ErrorCustom() {
    return (
        <div>
            <div className="flex p-3 justify-center items-center transitioned text-red-400 text-3xl monserrat font-bold">
                <h1>Error</h1>
            </div>
        </div>
    )
}

export function NoData() {
    return (
        <div>
            <div className="flex p-3 justify-center items-center transitioned text-red-400 text-3xl monserrat font-bold">
                <h1>No data</h1>
            </div>
        </div>
    )
}

export function CustomMessage({ message }: { message: string }) {
    return (
        <div>
            <div className="flex p-3 justify-center items-center transitioned text-2xl monserrat font-semibold">
                <h1>{message}</h1>
            </div>
        </div>
    )
}