import AppDispatcher from '../AppDispatcher'

const InterfaceActions = {
  modalSwitch (modalState, content) {
    AppDispatcher.dispatch({
      type: 'SWITCH_MODAL',
      payload: { modalState, content }
    })
  }
}

export default InterfaceActions
