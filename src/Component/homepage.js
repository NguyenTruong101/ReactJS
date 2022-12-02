import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import '../CSS/homepage.css';



import axios from "axios";
import { useEffect, useState } from 'react';






const Home = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(3);

    const [totalPage, setTotalPage] = useState(5);


    // useEffect(() => {
    //     axios.get('', {},
    //         params: {
    //         page: page,
    //         size: size,
    //     }).then(res => {
    //         const resData = res.data
    //         setData(resData.data);

    //         const totalRecord = resData.totalRecord;
    //         // tinh so trang 
    //         setTotalPage(Math.ceil(totalRecord / size));
    //     })
    // }, [page])
    return (
        <div>
            <Sidebar />
            <Navbar />
            <p>HOMEPAGE</p>
            <div className='body-home'>
                <form>
                    <table style={{}}>
                        <th>STT</th>
                        <th>@@</th>
                        <th>Họ tên</th>
                        <th>SĐT</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>

                    </table>
                </form>
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

export default Home;
