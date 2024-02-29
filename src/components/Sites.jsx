import  {resourceLinks} from '../data/Data.jsx';

function Sites() {
  return (
    <div class='resources_accordion'>
        {resourceLinks.map((item, index) => {
          return (
            <a class='accordion_item' href={item.description}>
                <span class='accordion_title'>{item.title}</span>
                <span class='accordion_meta'>{item.description}</span>
            </a>
          );
        })}
    </div>
  );
};

export default Sites;