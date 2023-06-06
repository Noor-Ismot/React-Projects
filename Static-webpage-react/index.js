ReactDOM.render(<ul>
    <li>Composable</li>
    <li>Easy</li>
</ul>, document.getElementById("list"))


function MainContent() {
    return (
        <h1>Fun facts about React</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("heading")
)

const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "dummyText";
document.getElementById("heading").append(h1);