// eslint-disable-next-line react/prop-types
function Alert({ setIsAlertShow }) {
    const hideAlert = () => {
        setIsAlertShow(false);
    }

    return (
        <div onClick={hideAlert} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: '#ddd2' }}>
            hide Alert
        </div>
    )
}
export default Alert