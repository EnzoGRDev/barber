import "components/CardSection/index.css"

export default function CardSection({ children, colorCard, title = "", id }) {
  return (
    <section
      className={`Card-Section ${
        colorCard !== "black" ? "Card-Section-Gray" : " Card-Section-Black"
      }  `}
      id={id}
    >
      <span className="line"></span>
      {!title ? (
        ""
      ) : (
        <div className="Card_title-container">
          <span className="iconify" data-icon="ant-design:star-filled"></span>
          <h2>{title}</h2>
          <span className="iconify" data-icon="ant-design:star-filled"></span>
        </div>
      )}
      {children}
      <span className="iconify" data-icon="raphael:scissors"></span>
    </section>
  )
}
