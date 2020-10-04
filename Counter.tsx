import { stat } from 'fs';
import { connect } from 'react-redux'
import * as React from 'react';
import { myState } from './ReducerA';
import { myStateB } from './ReducerB';

export interface IAppProps {
  countA:number,
  countB:number,
  IncA:()=>void,
  DecA:()=>void,
  IncB:()=>void,
  DecB:()=>void
 
}

export interface IAppState {
 
}

class Counter extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
       countA:0
    }
   
  }
 
  public render() {
  
    return (
      <div>
 
<div>
A:  {this.props.countA}
<button onClick={this.props.IncA}>+A</button>
<button onClick={this.props.DecA}>-A</button>
</div>

<div>
B:  {this.props.countB}
<button onClick={this.props.IncB}>+B</button>
<button onClick={this.props.DecB}>-B</button>
</div>



      </div>
    );
  }
}
interface RootState {
    countA:number,
    countB:number
    A: myState;
    B:myStateB
  }
  
  function mapState (state: RootState)  {
   return { 
     
       countA:state.A.countA,
    countB:state.B.countB}
  }
  
  const mapDispatch = {
    IncA: () => ({ type: 'incA' }),
    DecA:()=>({ type: 'decA' }),
    IncB: () => ({ type: 'incB' }),
    DecB:()=>({ type: 'decB' })
  }

export default connect(mapState,mapDispatch)(Counter);