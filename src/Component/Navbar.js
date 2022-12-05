import bell from '../assets/bell.png';
import img9 from '../assets/9.png';
import vn from '../assets/vn.png';

const Navbar = () => {
    return (
        
            <div className='nav-top'>
                <p style={{ padding: "3px", fontWeight:'500px',fontSize:"20px", lineHeight:"23px",color:"#172B4D"}}>Trường đại học A</p>
                <div className='nav-icon'>
                    <img src={vn} width="30px" height="30px" ></img>
                    <img src={bell} width="30px" height="30px" ></img>
                    <img src={img9} width="30px" height="30px"></img>
                </div>
            </div>
            

    )
}

export default Navbar;
