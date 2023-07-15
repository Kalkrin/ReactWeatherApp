import { useState } from "react"

const SearchBox = () => {
    const [text, setText] = useState('Hamilton, CA');
    return (
        <form>
            <label className="form-control-label">Search For Location</label>
            <input type="text" placeholder={text} value={text} onChange={(e) => setText(e.target.value)} />
            <button className="btn" type="submit">Search For Weather</button>
        </form>
    )
}

export default SearchBox
