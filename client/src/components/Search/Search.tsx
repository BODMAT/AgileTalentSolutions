import { useEffect, useState } from "react";
import { User } from "./User";
import type { Profile } from "../../types/profile";
import { getProfilesWithSearch } from "../../api/profiles";
import { SearchForm } from "./SearchForm";

export function Search() {
    const [options, setOptions] = useState<string[]>([]);
    const [users, setUsers] = useState<Profile[]>([]);

    useEffect(() => {
        getProfilesWithSearch(options).then((data) => setUsers(data));
    }, [options]);

    return (
        <section className="myContainer mt-10">
            <div className="flex flex-col items-center gap-10">
                <h2 className="font-bold text-center text-5xl montseratt">Search Profiles</h2>
                <SearchForm options={options} setOptions={setOptions} />
            </div>
            <div className="grid grid-cols-3 gap-7 mt-10 max-md:grid-cols-2 max-sm:grid-cols-1">
                {users.map((user) => (
                    <User key={user.id} {...user} />
                ))}
            </div>
        </section>
    );
}
