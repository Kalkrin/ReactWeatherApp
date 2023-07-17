import { useState } from "react"

const SearchBox = (props: any) => {
    const [text, setText] = useState(props.location);

    const search = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        props.search(text);
    }
    return (
        <form onSubmit={(e) => search(e)}>
            <label className="form-control-label">Enter Location</label>
            <input type="text" placeholder={text} value={text} onChange={(e) => setText(e.target.value)} />
            <button className="btn" type="submit">Search For Weather</button>
        </form>
    )
}

export default SearchBox
