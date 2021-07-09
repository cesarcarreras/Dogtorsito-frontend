const Card = ({img,children}) => (
    <div className="card">
        {/* esto eess un if ternario y validamos si exite imagen
            de lo contrario renderizara otra
         */}
        {img ? <img src={img} className="card-img-top" alt="Foto"/> : ''}
        <div className="caard-body">
            {children}
        </div>
    </div>
 )

 export default Card