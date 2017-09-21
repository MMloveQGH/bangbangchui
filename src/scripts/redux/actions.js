

import store from './store'
const actions = {
	sumBtnA(val){
		let action = {
			type:'COMTA_BTN',
			val
		}
		store.dispatch(action)
	},
	sumBtnB(val){
		let action = {
			type:'COMTB_BTN',
			val
		}
		store.dispatch(action)
	}
}

export default actions