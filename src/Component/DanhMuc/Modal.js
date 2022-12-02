// import { useState } from "react";


const Modal = (props) => {


    return (
        <div className="Modal">

            {props.show === true && (
                <div id="myModal" class="modal">

                    {/* <!-- Modal content --> */}
                    <div class="modal-content" style={{ width:props.width, height: props.height}}>
                        {/* <span class="close" onClick={() => props.setShow(false)}>&times;</span> */}
                        <div style={{ display: "flex", justifyContent:'space-between' }}>
                            <p style={{
                                fontWeight:'600',
                                fontSize:'16px',
                                fontFamily:'Roboto',
                                fontHeight:'19px',
                            }}>{props.title}</p>
                            <span class="close" onClick={() => props.close()}>&times;</span>
                        </div>

                        {props.children}

                    </div>

                </div>

            )}


        </div>
    )
}
export default Modal;

