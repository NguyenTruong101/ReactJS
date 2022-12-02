import IMG11 from '../../assets/11.png';
import SideBar from "../Sidebar";
import axios from "axios";
import { useState, useEffect } from 'react';
import request from "../../utils/request";
import Modal from './Modal';


const NganhNghe = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(3);

    const [show, setShow] = useState(false);
    const [totalPage, setTotalPage] = useState(5);

    const Close = () => {
        setShow(false);
    }

    const [MaNN, setMaNN] = useState("");

    const [NN, setNN] = useState("");

    const Add = () => {
        request.post('/api/field', {
            data: {
                fieldDTO: {
                    name: NN
                },
            }
        }).then(res => (
            alert("Them thanh cong")
        ))
    }



    useEffect(() => {

        request.get('/api/field', {
            params: {

            },
            data: {

            },
        }).then(res => {
            // console.log(res);
            console.log(res.data);
            setData(res.data);


        })
    }, [])
    return (
        <div className="NganhNghe">

            <div style={{ display: 'flex', gap: '80%' }}>
                <p>Khóa (20) </p>
                <button style={{
                    background: '#1890FF',
                    borderRadius: "3px white",
                    padding: "8px 16px",
                    border: '0px solid #000',
                    color: '#fff',
                }} onClick={() => setShow(true)}> + Thêm Ngành Nghề</button>
            </div>

            <Modal show={show} close={Close} title='Them lop' width='70%' height='auto' >
                <div style={{ display: 'flex', width: '100%', gap: "10%", borderTop: "1px solid #E2E3E9" }}>
                    <div style={{ width: '45%' }}>
                        {MaNN}

                        <p>Mã ngành nghề</p>
                        <input type="text" placeholder='Nhập mã' style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setMaNN(event.target.value)}></input>
                    </div>

                    <div style={{ width: '45%' }}>
                        {NN}

                        <p>Ngành nghề</p>
                        <input type="text" placeholder='Nhập ngành nghề' style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setNN(event.target.value)}></input>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: "59px", justifyContent: 'flex-end', gap: '10px', borderTop: "1px solid #E2E3E9", paddingTop: "11px" }}>
                    <button style={{ padding: '8px 16px', fontSize: '14px' }} onClick={() => Close()}>Hủy</button>
                    <button style={{ padding: '8px 16px', fontSize: '14px' }} onClick={() => Add()}>Thêm</button>
                </div>

            </Modal>
            <div>
                <table style={{ width: '100%' }}>
                    <thead style={{background:"#F0F0F0"}}>
                        <th>STT</th>
                        <th><img src={IMG11}></img></th>
                        <th>Mã ngành nghề </th>
                        <th> Ngành nghề</th>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr>
                                <td style={{ width: '4%', textAlign: "center" }}>1</td>
                                <td style={{ width: '8%' }}>
                                    <div style={{ display: 'flex', width: "100%", justifyContent: 'center' }}>
                                        <button onClick={() => setShow(true)}>Sua</button>
                                        <button>Xoa</button>
                                    </div>

                                </td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>


                        ))}

                    </tbody>
                </table>
            </div>

            <div>
                <div className='Page'>

                    {/* <p>Trang hiện tại: {page}</p>
                    <p>Số phần tử 1 trang: {size}</p> */}
                    <div className='TotalPage'>
                        {/* Trước */}
                        <button
                            onClick={() => {
                                setPage(page - 1);
                            }}
                        >
                            Trước
                        </button>
                        {/* Hiện ra các trang */}
                        {[...Array(totalPage)].map((item, index) => (
                            <button
                                style={{
                                    background: index + 1 === page ? 'blue' : ''
                                }}
                                onClick={() => {
                                    setPage(index + 1);
                                }}
                            >
                                {/* Hiện số trang */}
                                {index + 1}
                            </button>
                        ))}
                        {/* Sau */}
                        <button
                            onClick={() => {
                                setPage(page + 1);
                            }}
                        >
                            Sau
                        </button>
                        <p> {totalPage}/trang </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default NganhNghe;
