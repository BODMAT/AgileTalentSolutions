import { useState, useEffect, type KeyboardEvent } from "react";
import { BthSearch } from "../Reusable/BtnSearch";
import { Option } from "../Reusable/Option";
import { allSkills } from "../../data/skills";

interface SearchFormProps {
    options: string[];
    setOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

export function SearchForm({ options, setOptions }: SearchFormProps) {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(() => {
        if (!inputValue.trim()) {
            setSuggestions([]);
            return;
        }
        const val = inputValue.toLowerCase();
        const matches = allSkills
            .filter(skill => skill.toLowerCase().includes(val) && !options.includes(skill))
            .slice(0, 3);
        setSuggestions(matches);
    }, [inputValue, options]);

    const addSkill = (skill: string) => {
        if (!skill.trim() || options.includes(skill)) return;
        setOptions(prevOptions => [...prevOptions, skill]);
        setInputValue("");
        setSuggestions([]);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === "Tab") {
            e.preventDefault();
            if (suggestions.length > 0) {
                addSkill(suggestions[0]);
            } else {
                addSkill(inputValue.trim());
            }
        }
    };

    return (
        <form
            onSubmit={e => e.preventDefault()}
            className="flex flex-col gap-3 w-full items-center"
        >
            <div className="flex gap-3 items-center w-full max-w-[700px] relative">
                <input
                    type="text"
                    placeholder="Skills"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="p-3 bg-[var(--bg-input)] rounded-lg border-[2px] placeholder:text-[#1f2937] border-[#1f2937] w-full"
                />
                <BthSearch text="Search" handler={() => addSkill(inputValue.trim())} />
                {suggestions.length > 0 && (
                    <ul className="absolute top-full left-0 right-0 bg-white border rounded mt-1 z-10 shadow-lg">
                        {suggestions.map((s, i) => (
                            <li
                                key={i}
                                className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => addSkill(s)}
                            >
                                {s}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <ul className="flex flex-wrap gap-3 text-center items-center justify-center mt-2">
                {options.map((option, index) => (
                    <Option
                        key={index}
                        value={option}
                        handler={() => setOptions(prev => prev.filter((_, i) => i !== index))}
                    />
                ))}
            </ul>
        </form>
    );
}
