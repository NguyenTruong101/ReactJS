import IMG11 from '../../assets/11.png';
import SideBar from "../Sidebar";
import axios from "axios";
import { useState, useEffect } from 'react';
import request from "../../utils/request";
import Modal from './Modal';
import IMG12 from '../../assets/12.png';
import '../../CSS/NganhNghe.css';
import { render } from '@testing-library/react';



const NganhNghe = () => {
    const [data, setData] = useState([]);
    const [change, setChange] = useState(0);



    const [show, setShow] = useState(false);

    const [editshow, setEditshow] = useState(false);

    const [saveitem, setSaveitem] = useState([]);


    const Close = () => {
        setShow(false);
        setEditshow(false);
    }

    const Refresh = () => {
        // window.location.reload();
        setChange(Date.now());
    }





    const [NN, setNN] = useState("");

    const [savename, setSavename] = useState("");

    const Add = () => {
        // request.post('/api/field', JSON.stringify({ name: NN }), {

        // })
        // setShow(false);
        // Refresh();
        request({
            method: 'POST',
            url: '/api/field',
            // JSON.stringify({ name: NN}),
            params: {
                name: NN,
            },
            data: {

            }
        }).then(res => {
            alert('Them thanh cong !!!')
            Refresh();
            Close();
        })
    }

    const Delete = (id) => {
        request.delete(`/api/field/${id}`,).then(res => {
            alert("Xóa thành công");
            Refresh();

        });

    }

    const Update = () => {
        console.log(saveitem);
        request({
            method: 'PUT',
            url: '/api/field/' + saveitem.id,
            params: {
                name: savename,
            },
            data: {

            }
        }).then(res => {
            alert("Update thanh cong !!!");
            Refresh();
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

        request.get('/api/field', {
            params: {

            },
            data: {

            },
        }).then(res => {
            // console.log(res);
            console.log(res.data);
            setData(res.data);

            console.log(res.data.length);


            // setTotalPage(Math.ceil(res.data.length / size));
            // res.data.slice(0, 5)

            // Phan trang
            const resData = res.data
            setData(resData);
            // Tinh so trang
            const totalRecord = resData.length;
            setTotalPage(Math.ceil(totalRecord / size));
            // setData(resData.slice(0, size))

        });
    }, [page, change])
    return (
        <div className="NganhNghe">

            <div style={{ display: 'flex', gap: '80%', borderBottom: '1px solid #ccc' }}>
                <p style={{ width: '30%' }}>Ngành nghề</p>
                <button style={{
                    background: '#1890FF',
                    borderRadius: "3px white",
                    padding: "8px 16px",
                    border: '0px solid #000',
                    color: '#fff',
                    width: '30%',
                    height: "20%",
                    cursor: 'pointer',
                }} onClick={() => setShow(true)}> + Thêm Ngành Nghề</button>
            </div>
            {/* Thêmm */}
            <Modal show={show} close={Close} title='Them lop' width='70%' height='auto' >
                <div style={{ display: 'flex', width: '100%', gap: "10%", borderTop: "1px solid #E2E3E9" }}>

                    <div style={{ width: '45%' }}>
                        {/* {NN} */}

                        <p>Ngành nghề</p>
                        <input type="text" placeholder='Nhập ngành nghề' defaultValue={''} style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => setNN(event.target.value)}></input>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: "59px", justifyContent: 'flex-end', gap: '10px', borderTop: "1px solid #E2E3E9", paddingTop: "11px" }}>
                    <button style={{ padding: '8px 16px', fontSize: '14px' }} onClick={() => Close()}>Hủy</button>
                    <button style={{ padding: '8px 16px', fontSize: '14px' }} onClick={() => Add()}>Thêm</button>
                </div>

            </Modal>
            {/* Sửa */}
            <Modal show={editshow} close={Close} title='Sửa lop' width='70%' height='auto' >
                <div style={{ display: 'flex', width: '100%', gap: "10%", borderTop: "1px solid #E2E3E9" }}>

                    <div style={{ width: '45%' }}>
                        {/* {NN} */}

                        <p>Ngành nghề</p>
                        <input type="text" placeholder='Nhập ngành nghề' defaultValue={saveitem?.name} style={{ width: '100%', padding: '8px 16px', border: '1px solid #E2E3E9', borderRadius: '3px', boxSizing: 'border-box' }} onChange={(event) => { setSavename(event.target.value) }}></input>
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: "59px", justifyContent: 'flex-end', gap: '10px', borderTop: "1px solid #E2E3E9", paddingTop: "11px" }}>
                    <button style={{ padding: '8px 16px', fontSize: '14px' }} onClick={() => Close()}>Hủy</button>
                    <button style={{ padding: '8px 16px', fontSize: '14px' }} onClick={() => Update()}>Sửa</button>
                </div>

            </Modal>
            <div>
                <table style={{ width: '100%' }}>
                    <thead style={{ background: "#F0F0F0" }}>
                        <th>STT</th>
                        <td style={{ width: '4%' }}><img src={IMG11}></img></td>
                        <th>Ngành nghề</th>
                    </thead>
                    <tbody>
                        {newdata.map((item, index) => (
                            <tr>
                                <td style={{ width: '4%', textAlign: "center" }}>{((page-1)*(size)) + index +1}</td>
                                <td className='dropdown'><img className='drop-img' src={IMG12}></img>
                                    <div className='drop-content' key={index}>
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
                        {/* <p>Tổng {totalPage} trang </p> */}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default NganhNghe;
