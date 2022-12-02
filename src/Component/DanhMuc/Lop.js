
import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import IMG11 from '../../assets/11.png';
import IMG12 from '../../assets/12.png';
import '../../CSS/Lop.css';
import request from "../../utils/request";
import Modal from './Modal';
import { useActionData } from "react-router-dom";
import { useState } from "react";

const Lop = () => {
    const [ten,setTen] = useState("");
    const [name, setNam] = useState("");
    const [show, setShow] = useState(false);

    const Close = () => {
        setShow(false)
    }
    return (
        <div className="Lop">
            <div style={{ display: 'flex', gap: '85%' }}>
                <p>Lớp (20) </p>
                <button style={{
                    background: '#1890FF',
                    borderRadius: "3px white",
                    padding: "8px 16px",
                    border: '0px solid #000',
                    color: '#fff',
                }} onClick={() => setShow(true)}> + Thêm Lớp </button>
            </div>
            <Modal show={show} close={Close} title='Thêm Lớp' width="70%" height="auto">
                <div className="body-modal">
                    <div style={{ width: '45%' }}>
                        <p>Tên Lớp</p>
                        <input type="text" placeholder='Nhập tên lớp' style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setTen(event.target.value)}></input>
                    </div>
                    <div style={{ width: '45%' }}>
                        <p>Khóa</p>
                        <input type="text" placeholder='Chọn khóa' style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setNam(event.target.value)}></input>
                    </div>
                </div>
                <div className="foot">
                    <button style={{ padding: '8px 16px' }} onClick={() => Close()}>Hủy</button>
                    <button style={{ padding: '8px 16px' }} >Thêm</button>
                </div>
            </Modal>

            <div>
                <table style={{ width: '100%' }}>
                    <thead style={{background:"#F0F0F0"}}>
                        <th style={{ width: '3%' }}>STT</th>
                        <th style={{ width: '4%' }}><img src={IMG11} ></img></th>
                        <th>Tên lớp</th>
                        <th>Tên khóa</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td> <img className="picSet" src={IMG12} style={{ width: '100%',width:"70%",height:"50%"}}></img>
                                <ul className="set-up">
                                    <li className="itemli">Sửa</li>
                                    <li className="itemli">Xóa</li>
                                </ul>
                            </td>
                            <td>CNPM8</td>
                            <td>D14</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td> <img className="picSet" src={IMG12} style={{ width: '100%',width:"70%",height:"50%" }} ></img>
                                <ul className="set-up">
                                    <li className="itemli">Sửa</li>
                                    <li className="itemli">Xóa</li>
                                </ul>
                            </td>
                            <td>CNPM7</td>
                            <td>D14</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Lop;
