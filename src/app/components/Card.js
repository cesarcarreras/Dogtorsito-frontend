const Card = ({img,children}) => (
    <div className="card">
        {img ? <img src={img} className="card-img-top" alt="Foto"/> : ''}
        <div className="caard-body">
            {children}
        </div>
    </div>
 )

 export default Card;