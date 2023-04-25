import Reach, {FC} from 'react';

import { ListProps } from './ListInterface';
  //name={this.state.name} message={this.state.message}
const List : FC<ListProps> = ({data}) => {
    return (
        <>
        <ul>
        {
            !data.length ? (<li>No items</li>) :
            (data.map((item) => <li>{item.slug} : {item.senses.map((s) => s.english_definitions + " ")}</li>) )
        }
        </ul>
        </>
    );
};

  export default List;

  