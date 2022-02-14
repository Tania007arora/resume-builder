import { useNavigate } from "react-router-dom";
export default function ButtonSaveNext(props) {
    let navigate = useNavigate();
    function onHandleSubmit() {
        props.saveInfoFunction(props.data, props.saveName);
        navigate(props.nextLink);
    }
    return (
        <div className="col-6">
            <button type="button" className="btn" style={{ backgroundColor: '#8BDB81', color: 'black', borderRadius: '20px' }} onClick={onHandleSubmit} >{props.icon ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg> : <span>Save And Next</span>}
            </button>
        </div>
    )
}