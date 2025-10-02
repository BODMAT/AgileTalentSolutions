export function Option({ value, handler }: { value: string, handler: () => void }) {
    return (
        <button onClick={handler} className="relative py-3 px-5 bg-[var(--accent-indigo)] hover:bg-[var(--accent-indigo-hover)] hover:pr-14 text-white transition-all rounded-xl cursor-pointer text-[20px] max-sm:text-[16px] font-bold group max-md:pr-14">
            {value}
            <span className="absolute top-1/2 right-3 w-5 h-5 -translate-y-1/2 opacity-0 group-hover:opacity-100 flex items-center justify-center max-md:opacity-100">
                <span className="absolute w-full h-[2px] bg-white rotate-45"></span>
                <span className="absolute w-full h-[2px] bg-white -rotate-45"></span>
            </span>
        </button>
    )
}
