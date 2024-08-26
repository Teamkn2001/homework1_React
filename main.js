
const universalContent = {display:'flex', flexDirection: 'column', alignItems:'center', gap: '-10px'}

function App() {

    const cardStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', margin: '30px', borderRadius: '12px', padding:'20px 0 18px 0', maxWidth: '750px'}
    const bottomContent = { display: 'flex', justifyContent: 'space-around',  width: '80%' }
    
    
    return (

        <div className="card" style={cardStyle}>
            <div style={universalContent}>
                {proPic()}
                {proName()}
            </div>

            <div style={bottomContent}>
                {infoReusable(25, 'Posts')}
                {infoReusable(350, 'Following')}
                {infoReusable("1.5k", 'Followers')}
            </div>
        </div>

    )
}

function proPic() {
    return (
        <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="profile image" width='130px'/>
    )
}

function proName() {
    return (
        <div style={universalContent}> 
            <h1 style={{marginBottom:'-12px', fontSize:'18px'}}>Julienne Moore</h1>
            <p style={{color:'#81889B'}}>jilianne.moore@company.com</p>
        </div>
    )
}

function infoReusable(number, content_type) {
    return (
        <div style={universalContent}>
            <h1 style={{marginBottom:'-12px'}}>{number}</h1>
            <p style={{color:'#81889B'}}>{content_type}</p>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)