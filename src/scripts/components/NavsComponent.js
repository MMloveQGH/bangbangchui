
import {Link} from 'react-router'

class NavsComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){
       let {active} = this.props
        return (
            <div className="navs">
                <Link to="/index" className={active=='/index'?'active':''}>
                    <span className="iconfont icon-shouye"></span>
                    <span>首页</span>
                </Link>
                <Link to="/fresh" className={active=='/fresh'?'active':''}>
                    <span className="iconfont icon-xinxianshi"></span>
                    <span>新鲜事</span>
                </Link>
                <Link to="/welfare" className={active=='/welfare'?'active':''}>
                    <span className="iconfont icon-fafuli-"></span>
                    <span>发福利</span>
                </Link>
                <Link to="/shopcar" className={active=='/shopcar'?'active':''}>
                    <span className="iconfont icon-gouwuche"></span>
                    <span>购物车</span>
                </Link>
                <Link to="/mine" className={active=='/mine'?'active':''}>
                    <span className="iconfont icon-wode"></span>
                    <span>我的</span>
                </Link>
            </div>
        )
    }
}
//定义默认属性
NavsComponent.defaultProps={
    active:"/index"
}



export default NavsComponent