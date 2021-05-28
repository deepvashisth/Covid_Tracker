import CommingSoon from '../images/coming-soon.png'




const Medicine = () => {

    const imgStyle = {
        margin:'auto'
    }
    

    return (
        <div className='bg-dark' style={{display:'flex',height:'100vh'}}>
            <img src={CommingSoon} style={imgStyle} alt="comming soon img" />
            
            <br></br>
        </div>
    )
}

export default Medicine
