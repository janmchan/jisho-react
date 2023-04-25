import Reach, {Component} from 'react';


const initialState = {
    name: 'Manny',
    message: 'HOCs are cool',
  };

  type State = Readonly<typeof initialState>;

  //name={this.state.name} message={this.state.message}
  const messageHoc = (WrappedCompoent: any) => {
    class HOC extends Component<{}, State> {
        readonly state: State = initialState; 
        render() {
            return (
                <WrappedCompoent name={this.state.name} message={this.state.message}/>
            )
        }
    }
    return HOC;
  }

  export default messageHoc;