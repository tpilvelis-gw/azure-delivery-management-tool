import logo from '../glasswall-logo-white.png'

function GWLogo() {


    return (
        <>
            <img src={logo} alt="Logo" style={{display:'block', margin:"0 auto", width:"20%"}}/>
            <h1 style={{textAlign:'center', color:"white"}}>Glasswall Rebuild Lite</h1>
        </>
    );
}

export default GWLogo;