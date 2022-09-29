export default function Attributes({ attributes }) {
  return (
    <div className="acc-attributes">
      {attributes.map((attr, index) => {
        return (
          <div key={index}>
            <img src={attr.img} alt="" />
            <div>{attr.title}</div>
          </div>
        );
      })}
    </div>
  );
}
