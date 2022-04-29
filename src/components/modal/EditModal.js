import React, { useEffect } from "react";
import { ReactDOM } from "react";
import { CSSTransition } from "react-transition-group";
import "./EditModal.css"

export const EditModal = props => {

    var ReactDOM = require('react-dom')

    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown' , closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    return ReactDOM.createPortal(
        <CSSTransition
        in={props.show}
        unmountOnExit
        timeout={{enter: 0, exit: 300}}>
            <div className={`edit-modal ${props.show ?'show' : ''}`} onClick={props.onClose}>
                <div className="edit-modal-content" onClick={e => e.stopPropagation()}>
                    <div className="edit-modal-header">
                        <h4 className="edit-modal-title">Edit Your Goal</h4>
                        <div className="edit-modal-body">
                            Edit Content
                        </div>
                        <div className="edit-modal-footer">
                            <button type="button" className="edit-save-button" onClick={props.onClose}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>, document.getElementById('root')
    )
}