import Download from '../../assets/Download.png';
import Upload from '../../assets/Upload.png';
import '../../CSS/ThanhVien.css';
import IMG11 from '../../assets/11.png';
import IMG12 from '../../assets/12.png';
import { useState } from 'react';
import { useEffect } from 'react';
import request from "../../utils/request";
import SideBar from '../Sidebar';
import Navbar from '../Navbar';





const Member = () => {
    const [data, setData] = useState([]);

    const totalElement = 0;
    


    useEffect(() => {

        request.get('/api/admin/user', {
            params: {
                page_index: 0,
                page_size: 1,

            },
            data: {

            }
        }).then(res => {
            console.log(res.data);
            setData(res.data);

            console.log(res.data.length);


        })
    }, [])

    return (
        <div className="Member">
            <div className="header">
                <p>Thành Viên</p>
                <div>
                    <button style={{
                        width: '162px',
                        height: "32px",
                        backgroundColor: "#1890FF",
                        background: '#1890FF',
                        borderRadius: "3px white",
                        // padding: "8px 16px",
                        border: '0px solid #000',
                        color: '#fff',
                        cursor: 'pointer',
                    }}>+ Thêm thành viên</button>
                    <div style={{marginTop:'10px', display:'inline-block'}}>
                        <img src={Upload} width="32px" height="32px" style={{ cursor: 'pointer', }} ></img>
                        <img src={Download} width="32px" height="32px" style={{ cursor: 'pointer' }} ></img>
                    </div>
                </div>
                
            </div>
            <div>
                <table style={{ width: '100%', borderColor: "#F0F0F0" }}>
                    <thead style={{ background: "#F0F0F0" }}>
                        <th style={{ width: '3%' }}>STT</th>
                        <td style={{ width: '4%' }}><img src={IMG11}></img></td>
                        <td>SĐT</td>
                        <td>Email</td>
                        <td>Địa chỉ</td>
                        <td>Giới tính</td>
                        <td>Ngày sinh</td>
                    </thead>
                    <tbody>
                       
                        {data.map((item, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td className='dropdown'><img className='drop-img' src={IMG12}></img>
                                    <div className='drop-content'>
                                        <a>Sửa</a>
                                        <a>Xóa</a>
                                    </div>
                                </td>
                                {/* <td>{item.fullName}</td> */}
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td>{item.gender == 1 ? 'Nam':'Nu'}</td>
                                <td>{item.birthday_start}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default Member;
