import { SearchBar } from "./SearchBar"
import { SignIn } from "./SignIn"
import { YouTube } from "./YouTube"

export const AppBar = () => {
    return <div className="flex justify-between">
        <div>
            <YouTube />
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            <SignIn/>
        </div>
    </div>
}