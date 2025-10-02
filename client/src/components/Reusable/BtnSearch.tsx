export function BthSearch({ text, handler }: { text: string, handler: () => void }) {
    return (
        <button onClick={handler} className="py-3 px-5 bg-[var(--bg-btn)] hover:bg-[var(--accent-blue-hover)] text-white transitioned rounded-xl cursor-pointer text-[20px] max-sm:text-[16px] font-bold">{text}</button>
    )
}