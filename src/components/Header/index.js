export default function Header (){
  return (
    <header className="App-header">
    <div className="header-container-links">
      <span 
        className="iconify" 
        data-icon="clarity:email-line"
       >
      </span>
      <p>example@gmail.com</p>
    </div>
    <div className="header-container-links">
      <span 
        className="iconify" 
        data-icon="akar-icons:whatsapp-fill" 
       >
      </span>
      <p>+54 9 11 1234-5678</p>
    </div>
    <div className="header-container-links">
      <p>Redes sociales:</p>
      <span 
        className="iconify" 
        data-icon="akar-icons:facebook-fill"
       >
      </span>
      <span 
        className="iconify" 
        data-icon="akar-icons:instagram-fill"
       >
      </span>
    </div>
  </header>

  )
}