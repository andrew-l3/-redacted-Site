import  {resourceLinks} from '../data/Data';

function Sites() {
  return (
    <div className='resources_accordion'>
        {resourceLinks.map((item) => {
          return (
            <a className='accordion_item' href='/#'>
                <span className='accordion_title'>{item.title}</span>
                <span className='accordion_meta'>{item.description}</span>
            </a>
          );
        })}
    </div>
  );
};

export default Sites;