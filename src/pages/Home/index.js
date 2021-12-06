import Banner from "components/Banner";
import Header from "components/Header";
import CardSection from "components/CardSection";
import firstPhoto from 'assets/first-photo.png'
import 'pages/Home/index.css'
import firstEx from 'assets/photo-example-1.png'
import secondEx from 'assets/photo-example-2.png'
import thirdEx from 'assets/photo-example-3.png'
import quarterEx from 'assets/photo-example-4.png'
import CardLocation from "components/CardLocation";
import LinkWA from "components/LinkWA";


export default function Home(){
  return(<>
    <Header/>
    <Banner/>
    <img src={firstPhoto} alt="firstPhoto" className="first-photo"/>
    <CardSection title="Barberia Homero" colorCard="white">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta nisi eget erat porta, non hendrerit justo finibus. Aliquam volutpat nisi hendrerit, accumsan nisi a, lobortis felis. Mauris a neque fermentum, lobortis neque a, lacinia velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
    </CardSection>
    <CardSection title="Ultimos Trabajos" colorCard="black">
      <section className="Card-Section-container-photos">
        <img src={firstEx} alt="firstEx" className="Card-Section-photos"/>
        <img src={secondEx} alt="secondEx" />
        <img src={thirdEx} alt="thirdEx" />
        <img src={quarterEx} alt="quarterEx" />
      </section>
    </CardSection>
    <CardSection title="Sedes" colorCard="gray">
      <section className="container-card-location">
      <CardLocation 
        title="Barber Miami" 
        location="Miami" 
        path="GRAL. BELGRANO 3300"/>
      <CardLocation 
        title="Barber Miami" 
        location="Miami" 
        path="GRAL. BELGRANO 3300"/>
      <CardLocation 
        title="Barber Miami" 
        location="Miami" 
        path="GRAL. BELGRANO 3300"/>
      <CardLocation 
        title="Barber Miami" 
        location="Miami" 
        path="GRAL. BELGRANO 3300"/>
      <CardLocation 
        title="Barber Miami" 
        location="Miami" 
        path="GRAL. BELGRANO 3300"/>
      <CardLocation 
        title="Barber Miami" 
        location="Miami" 
        path="GRAL. BELGRANO 3300"/>
      </section>
    </CardSection>
    <CardSection title="Sigamos Conectados" colorCard="black">
      <h3 className="last-section_title">Seguinos en nuestras Redes</h3>
      <div className="last-section_redes">
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
      <h3 className="last-section_title">Mandanos por WhatsApp o correo</h3>
      <div className="last-section_contact">
      <span 
        className="iconify" 
        data-icon="clarity:email-line"
       >
      </span>
      <p>
        example@gmail.com
      </p>
      </div>
      <div className="last-section_contact">
      <span 
        className="iconify" 
        data-icon="akar-icons:whatsapp-fill" 
       >
      </span>
      <p>
        +54 9 11 1234-5678
      </p>
      </div>
    </CardSection>
    <footer>
      <p>Copyright - EnzoGRDev</p>
    </footer>
    <LinkWA/>
    </>
  )
}