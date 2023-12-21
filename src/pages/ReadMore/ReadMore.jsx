import { useParams } from 'react-router-dom';

const ReadMore = () => {
 
    const { id } = useParams();

  return (
    <h1>
        { id }
    </h1>
  )
}

export default ReadMore
