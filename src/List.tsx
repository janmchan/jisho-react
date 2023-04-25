import Reach, {FC} from 'react';

import { ListProps } from './ListInterface';
import ListGroup from 'react-bootstrap/ListGroup'
  //name={this.state.name} message={this.state.message}
const List : FC<ListProps> = ({data}) => {
    return (
        <>
        <ListGroup>
        {
            !data.length ? (<ListGroup.Item>No items</ListGroup.Item>) :
            (data.map((item) => 
            <ListGroup.Item as="li">
                <div>
                    <div className="fw-bold">{item.slug}</div>
                    {item.senses.map((s) => s.english_definitions + " ")}
                </div>
                 </ListGroup.Item>) )
        }
        </ListGroup>
        </>
    );
};

  export default List;

  