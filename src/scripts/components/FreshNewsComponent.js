
import NavsComponent from './NavsComponent'


class FreshNewsComponent extends React.Component{
    constructor(props,content){
        super(props,content)
        this.state = {

        }
    }


    render(){
        return (
            <div>
                FreshNewsComponent
                <NavsComponent active="/fresh"/>
            </div>
        )
        
    }
}

FreshNewsComponent.defaultProps = {

}

export default FreshNewsComponent