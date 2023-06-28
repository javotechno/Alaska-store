import "../scss/item.scss";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Card = styled.div`
  height: 300px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  img {
    width: 250px;
  }
`

const Item = ({ info }) => {
  return (
    <Card className="card overflow-hidden cardItem">
      <div className="row g-0">
        <img src={info.image} />
        <div className="col-md-4 info-card">
          <div className="card-body">
            <h5 className="card-title">{info.title}</h5>
            <p className="card-text">{info.descripcion}</p>
            <Link to={`/detalle/${info.id}`} className="btn btn-secondary">
              Ver
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Item;
