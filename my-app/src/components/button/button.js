export default function Button({text, onClick}) {
    return (
        <button onClick={onClick} className="main-button">
            {text}
        </button>
    );
}