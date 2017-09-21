
import NavsComponent from './NavsComponent'


class ShopCarComponent extends React.Component{
    constructor(props,content){
        super(props,content)
        this.state = {

        }
    }


    render(){
        return (
            <div>
                ShopCarComponent
                <NavsComponent active="/shopcar"/>
            </div>            
        )
    }
}

ShopCarComponent.defaultProps = {

}

export default ShopCarComponent