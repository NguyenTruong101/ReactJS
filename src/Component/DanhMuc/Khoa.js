import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import IMG11 from '../../assets/11.png';
import IMG12 from '../../assets/12.png';
import '../../CSS/Khoa.css';
import request from "../../utils/request";
import Modal from './Modal';
import { useActionData } from "react-router-dom";
import { useEffect, useState } from "react";







const Khoa = () => {
    const [ten, setTen] = useState("");
    const [name, setNam] = useState("");
    const [show, setShow] = useState(false);

    const Close = () => {
        setShow(false)
    }

    const [data, setData] = useState([]);

    useEffect(() => {

        request.get('/api/course', {
            params: {
                

            },
            data: {

            }
        }).then(res => {
            console.log(res.data);
            setData(res.data);


        })
    }, [])


    return (
        <div className="Khoa">
            <div style={{ display: 'flex', gap: '85%',borderBottom:"1px solid #ccc"}}>
                <p>Khóa (20) </p>
                <button style={{
                    background: '#1890FF',
                    borderRadius: "3px white",
                    padding: "8px 16px",
                    border: '0px solid #000',
                    color: '#fff',
                    cursor: 'pointer',
                    height: "20%",
                    marginTop:"12px",
                    

                }} onClick={() => setShow(true)}> + Thêm Khóa</button>
            </div>
            <Modal show={show} close={Close} title='Thêm Khóa' width="70%" height="auto">
                <div className="body-modal">
                    <div style={{ width: '45%' }}>
                        <p>Tên Khóa</p>
                        <input type="text" placeholder='Nhập tên khóa' style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setTen(event.target.value)}></input>
                    </div>
                    <div style={{ width: '45%' }}>
                        <p>Năm bắt đầu</p>
                        <input type="text" placeholder='Nhập năm bắt đầu ' style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setNam(event.target.value)}></input>
                    </div>
                </div>
                <div className="foot">
                    <button style={{ padding: '8px 16px' }} onClick={() => Close()}>Hủy</button>
                    <button style={{ padding: '8px 16px' }} >Thêm</button>
                </div>
            </Modal>

            <div>
                <table style={{ width: '100%', borderColor: "#F0F0F0" }}>
                    <thead style={{ background: "#F0F0F0" }}>
                        <th style={{ width: '3%' }}>STT</th>
                        <th style={{ width: '4%' }}><img src={IMG11} ></img></th>
                        <th>Tên khóa</th>
                        <th>Năm bắt đầu</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className="dropdown"><img className="drop-img" src={IMG12} style={{ maxWidth: '100%' }}></img>
                                <div className="drop-content">
                                    <a onClick={()=> setShow(true)}>Sửa</a>
                                    <a>Xóa</a>
                                </div>
                            </td>
                            <td>D14</td>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="dropdown"> <img className="drop-img" src={IMG12} style={{ maxWidth: '100%' }} ></img>
                                <div className="drop-content">
                                    <a onClick={()=> setShow(true)}>Sửa</a>
                                    <a>Xóa</a>
                                </div>
                            </td>
                            <td>D15</td>
                            <td>2020</td>
                        </tr>
                        {/* {data.map((item, index) => ( */}
                        {data.map((item, index) =>(
                             <tr>
                        <td>3</td>
                            <td className="dropdown"> <img className="drop-img" src={IMG12} style={{ maxWidth: '100%' }} ></img>
                                <div className="drop-content">
                                    <a onClick={()=> setShow(true)}>Sửa</a>
                                    <a>Xóa</a>
                                </div>
                            </td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>

                        </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Khoa;