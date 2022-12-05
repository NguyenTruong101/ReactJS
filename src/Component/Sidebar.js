import img3 from '../assets/3.png';
import img8 from '../assets/8.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img5 from '../assets/5.png';
import img10 from '../assets/10.png';
import '../CSS/homepage.css';
import {
    Link,
  } from "react-router-dom";

const SideBar = () => {
    return(
        <div className="nav-left">
                <div className="nav-left-top">
                    <img className='img3' src={img3} width="50px" height="50px"></img>

                </div>
                <div className="nav-left-bottom">

                    <ul className='nav-content'>
                        <li>
                            <a className='member' href='#'>
                                <img src={img8} width="30px" height="30px" style={{paddingLeft:"10px",paddingRight:"10px"}}></img>
                                <Link className='text1' to="/thanh-vien">Quản trị thành viên</Link>
                            </a>

                        </li>
                        <li >
                            <a className='category' href="#">
                                <img src={img6} width="30px" height="30px" style={{padding: "10px"}}></img>
                                <p>Danh mục</p>
                                <img src={img10} width="30px" height="30px" style={{padding: "10px"}}></img>
                            </a>
                            <ul className='DM'>
                                <li className='itemli'><Link to="/danh-muc/nganh-nghe">Ngành Nghề</Link></li>
                                <li  className='itemli' ><Link to="/danh-muc/khoa">Khóa</Link></li>
                                <li   className='itemli' ><Link to="/danh-muc/lop">Lớp</Link></li>
                            </ul>

                        </li>
                        <li >
                            <a className='project' href="#">
                                <img src={img7} width="30px" height="30px" style={{padding: "10px"}}></img>
                                <p>Đồ án</p>
                                <img src={img10} width="30px" height="30px" style={{padding: "10px"}}></img>
                            </a>
                            <ul className='DM'>
                                <li className='itemli'><Link to="/danh-muc/quan-ly-dot">Quản lý đợt</Link></li>
                                <li  className='itemli' ><Link to="/danh-muc/kho-de-tai">Kho đề tài</Link></li>
                                
                            </ul>

                        </li>
                        <li>
                            <a className='organi' href="#">
                                <img src={img5} width="30px" height="30px" style={{padding: "10px"}}></img>
                                <p>Tổ chức</p>
                                <img src={img10} width="30px" height="30px" style={{padding: "10px"}}></img>
                            </a>

                        </li>

                    </ul>

                </div>

            </div>
    )
}
export default SideBar;


