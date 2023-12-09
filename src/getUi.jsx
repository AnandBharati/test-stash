function getUi(isBtnClicked, setIsBtnClicked, clickHandler) {
    return (
        <div>
            <button onClick={() => { setIsBtnClicked(!isBtnClicked); clickHandler() }}>
                {!isBtnClicked ? "show" : "hide"}
            </button>
        </div>
    )
}
export default getUi;