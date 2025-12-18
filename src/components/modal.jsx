import './modal.css'


function Modal({title, modalCancel, modalConfirm}) {

  

return (
<div>
  <div className="modal">
    <p className="modal__title">{title}</p>
    <div className="modal__buttons">
      <button className="btn btn__cancel" onClick={modalCancel}>Cancel</button>
      <button className="btn" onClick={modalConfirm}>Confirm</button>
    </div>
  </div>
  <div className="backdrop" />
</div>
)
}

export default Modal