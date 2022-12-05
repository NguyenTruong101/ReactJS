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
           
            </div>
     
    )
}

export default Home;
