import bell from '../assets/bell.png';
import img9 from '../assets/9.png';
import vn from '../assets/vn.png';

const Navbar = () => {
    return (
        <div className="nav">
            <div className='nav-top'>
                <p style={{ padding: "25px" }}>Trường đại học A</p>
                <div className='nav-icon'>
                    <img src={vn} width="30px" height="30px" ></img>
                    <img src={bell} width="30px" height="30px" ></img>
                    <img src={img9} width="30px" height="30px"></img>
                </div>
            </div>
            <div className='nav-bottom'>
                <p>Thành viên (0) </p>

            </div>



        </div>
    )
}

export default Navbar;
