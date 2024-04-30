import './style.css'

export default () => {
    return (
        <div className="desktop">
            <h1 className="logo">
                WebDesk
            </h1>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <input type="submit" value=">" />
            </form>
        </div>
    )
}