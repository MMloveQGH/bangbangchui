
import NavsComponent from './NavsComponent'
import IndexHeader from './IndexHeader'

import store from '../flux/store'
import actions from '../flux/actions'

class IndexComponent extends React.Component {
    constructor(props,content){
        super(props,content)
        this.state={
            position_info:store.getPositionInfo()
        }
    }
    componentWillMount(){
        if(!this.state.position_info.latitude){
        	actions.getPosition()
        }
    }

    render(){
        let {position_info} = this.state
        return (
            <div className="full-height waimai">
                <IndexHeader position_info={position_info}/>
                <NavsComponent active="/index"/>
            </div>            
        )

    }
    componentDidMount(){
        let that = this
        store.addPositionChangeListener(()=>{
    		that.setState({
	            position_info:store.getPositionInfo()
	       	})
    	})
    }
}

IndexComponent.defaultProps = {

}

export default IndexComponent


