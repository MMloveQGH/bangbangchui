

import NavsComponent from './NavsComponent'

class WelfareComponent extends React.Component{
    constructor(props,content){
        super(props,content)
        this.state = {

        }
    }


    render(){
        return (
            <div>
                WelfareComponent
                <NavsComponent active="/welfare"/>
            </div>            
        )
    }
}

WelfareComponent.defaultProps = {

}

export default WelfareComponent