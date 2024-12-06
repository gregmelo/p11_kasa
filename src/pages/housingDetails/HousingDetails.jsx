import { useParams } from 'react-router-dom';
import Dropdown from '../../components/dropdown/Dropdown';
import StarRating from "../../components/starRating/StarRating";
import TagList from "../../components/tagList/TagList";
import logements from '../../data/logements';
import Carousel from '../../components/carousel/Carousel';
import Errors from '../errors/Errors';
import './HousingDetails.scss';

export default function HousingDetails() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Errors />;
  }

  return (
    <div className="housing-details">
      <Carousel images={logement.pictures} />
      <div className="housing-details-content">
        <div className="housing-details-title-tags">
          <div className="housing-details-title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <TagList tags={logement.tags} />
        </div>
        <div className="housing-details-infos">
          <StarRating rating={parseInt(logement.rating, 10)} />
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={`photo de ${logement.host.name}`} />
          </div>
        </div>
      </div>
      <div className="housing-dropdowns">
        <div>
        <Dropdown 
          key={`${logement.id}-description`} 
          title="Description" 
          description={logement.description} 
        />
        </div>
        <div>
        <Dropdown 
          key={`${logement.id}-equipments`} 
          title="Équipements" 
          description={logement.equipments} 
        />
        </div>
      </div>
    </div>
  );
}