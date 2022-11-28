import img3 from '../assets/3.png';
import img8 from '../assets/8.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img5 from '../assets/5.png';
import img10 from '../assets/10.png';
import '../CSS/homepage.css';

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
                                <img src={img8} width="30px" height="30px"></img>
                                <p className='text1'>Quản trị thành viên</p>
                            </a>

                        </li>
                        <li >
                            <a className='category' href="#">
                                <img src={img6} width="30px" height="30px" style={{padding: "10px"}}></img>
                                <p>Danh mục</p>
                                <img src={img10} width="30px" height="30px" style={{padding: "10px"}}></img>
                            </a>
                            <ul className='DM'>
                                <li>Ngành nghề</li>
                                <li>Khóa</li>
                                <li>Lớp</li>
                            </ul>

                        </li>
                        <li >
                            <a className='project' href="#">
                                <img src={img7} width="30px" height="30px" style={{padding: "10px"}}></img>
                                <p>Đồ án</p>
                                <img src={img10} width="30px" height="30px" style={{padding: "10px"}}></img>

                            </a>

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


