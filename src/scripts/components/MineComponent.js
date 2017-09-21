

import NavsComponent from './NavsComponent'

class MineComponent extends React.Component{
    constructor(props,content){
        super(props,content)
        this.state = {

        }
    }


    render(){
        return (
            <div>
                MineComponent
                <NavsComponent active="/mine"/>
            </div>            
        )
        
    }
}

MineComponent.defaultProps = {

}

export default MineComponent