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
    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);
    const Close = () => {
        setShow(false);
        setEditshow(false);
    }
    const [change, setChange] = useState(0);
    const Refesh = () => {
        setChange(Date.now());
    }

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const Add = () => {
        request({
            method: 'POST',
            url: '/api/course',
            params: {
                name: name,
            },
            // query,body
            data: {

            }
        }).then(res => {
            alert('Them thanh cong !!!');
            Refesh();
            Close();
        })

    }

    const Delete = (id) => {
        request({
            method: 'DELETE',
            url: '/api/course/' + id,
            params: {

            },
            data: {

            }
        }).then(res => {
            alert('Xoa thanh cong !!!');
            Refesh();
        })
    }

    const [editshow, setEditshow] = useState(false);
    const [idup, setIdup] = useState("");
    const [nameup, setNameup] = useState("");

    const [saveitem, setSaveitem] = useState([]);



    const Update = () => {
        console.log(saveitem);
        request({
            method: 'PUT',
            url: '/api/course/' + saveitem.id,
            params: {
                id: idup,
                name: nameup,
            },
            data: {

            }
        }).then(res => {
            alert("Update thanh cong !!!");
            Refesh();
            Close();
        })

    }

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(4);
    const [totalPage, setTotalPage] = useState(0);
    const [newdata, setNewdata] = useState([]);
    // const [startindex, setStartindex] = useState();
    // const startindex = 0;

    const handleData = () => {
        setNewdata(data.slice((page - 1) *size,page *size));
        // startindex = ((page-1) * size) +index+ 1;
        console.log('render')
    }
    useEffect(() => {
        handleData();
    },[data,page])


    

    useEffect(() => {

        request.get('/api/course', {
            params: {


            },
            data: {

            }
        }).then(res => {
            console.log(res.data);
            setData(res.data);

            // Phân trang 
            const resData = res.data;
            
            const totalRecord = resData.length;
            setTotalPage(Math.ceil(totalRecord / size));


        })
    }, [page,change])


    return (
        <div className="Khoa">
            <div style={{ display: 'flex', gap: '85%', borderBottom: "1px solid #ccc" }}>
                <p>Khóa (20) </p>
                <button style={{
                    background: '#1890FF',
                    borderRadius: "3px white",
                    padding: "8px 16px",
                    border: '0px solid #000',
                    color: '#fff',
                    cursor: 'pointer',
                    height: "20%",
                    marginTop: "12px",


                }} onClick={() => setShow(true)}> + Thêm Khóa</button>
            </div>
            <Modal show={show} close={Close} title='Thêm Khóa' width="70%" height="auto">
                <div className="body-modal">
                    <div style={{ width: '45%' }}>
                        <p>Tên Khóa</p>
                        <input type="text" placeholder='Nhập tên khóa' style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setId(event.target.value)}></input>
                    </div>
                    <div style={{ width: '45%' }}>
                        <p>Năm bắt đầu</p>
                        <input type="text" placeholder='Nhập năm bắt đầu ' style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setName(event.target.value)}></input>
                    </div>
                </div>
                <div className="foot">
                    <button style={{ padding: '8px 16px' }} onClick={() => Close()}>Hủy</button>
                    <button style={{ padding: '8px 16px' }} onClick={() => Add()}>Thêm</button>
                </div>
            </Modal>

            <Modal show={editshow} close={Close} title='Sửa Khóa' width="70%" height="auto">
                <div className="body-modal">
                    <div style={{ width: '45%' }}>
                        <p>Tên Khóa</p>
                        <input type="text" placeholder='Nhập tên khóa' defaultValue={saveitem?.id} style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setIdup(event.target.value)} ></input>
                    </div>
                    <div style={{ width: '45%' }}>
                        <p>Năm bắt đầu</p>
                        <input type="text" placeholder='Nhập năm bắt đầu' defaultValue={saveitem?.name} style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setNameup(event.target.value)}></input>
                    </div>
                </div>
                <div className="foot">
                    <button style={{ padding: '8px 16px' }} onClick={() => Close()}>Hủy</button>
                    <button style={{ padding: '8px 16px' }} onClick={() => Update()}>Sửa</button>
                </div>
            </Modal>

            <div>
                <table style={{ width: '100%', borderColor: "#F0F0F0" }}>
                    <thead style={{ background: "#F0F0F0" }}>
                        <th style={{ width: '3%' }}>STT</th>
                        <th style={{ width: '4%' }}><img src={IMG11} ></img></th>
                        <th>ID</th>
                        <th>Tên Khóa</th>
                    </thead>
                    <tbody>

                        {/* {data.map((item, index) => ( */}
                        {newdata.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td className="dropdown"> <img className="drop-img" src={IMG12} style={{ maxWidth: '100%' }} ></img>
                                    <div className="drop-content">
                                        <button onClick={() => {
                                            setEditshow(true)
                                            setSaveitem(item)
                                            console.log(item)
                                        }}>Sửa</button>
                                        <button onClick={() => {
                                            console.log(item);
                                            Delete(item.id);
                                        }}>Xóa</button>
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
                            style={{
                                width:'60px',
                                height:'40px',
                            }}
                        >
                            Trước
                        </button>
                        {/* Hiện ra các trang */}
                        {[...Array(totalPage)].map((item, index) => (
                            <button
                                style={{
                                    background: index + 1 === page ? 'blue' : '',
                                    width:'40px',
                                    height:'40px',
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
                            style={{
                                width:'60px',
                                height:'40px',
                            }}
                        >
                            Sau
                        </button>
                        {/* <p> {totalPage}/trang </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Khoa;