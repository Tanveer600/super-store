
import Modal from 'react-modal';

export default function AccountFormModel({
  isOpen,
  onClose,
  onSubmit,
  formData,
  onChange,
  editing,
  accounts,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Transaction Form"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        },
        content: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          maxHeight: '90vh',
          overflowY: 'auto',
        },
      }}
    >
      <div className="container p-4 bg-white rounded shadow-sm">
        <h5>{editing ? 'Edit' : 'Add'} Account</h5>
        <form onSubmit={onSubmit}>
          <div className="row g-3 my-3">
            <div className="col-md-4">
              <label className="form-label">name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                className="form-control"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Account Type</label>
              <input
                type="text"
                name="accounttype"
                step="0.01"
                value={formData.accountType}
                onChange={onChange}
                className="form-control"
              />
            </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-secondary me-2" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              {editing ? 'Update' : 'Add'}
            </button>
          </div>
             </div>
        </form>
      </div>
      
    </Modal>
  );
}
