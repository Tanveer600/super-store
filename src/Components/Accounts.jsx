import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import AccountFormModel from './AccountFormModel.jsx';
import AccountTable from './AccountTable.jsx';  // renamed for clarity
import {
  getAccounts,
  addAccount,
  updateAccount,
  deleteAccount,
} from '../Services/AccountService.js';

Modal.setAppElement('#root');

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    name: '',
    accountType: '',
   
  });
  const [editing, setEditing] = useState(false);

  const fetchData = async () => {
    const accRes = await getAccounts();
    setAccounts(accRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (account = null) => {
    if (account) {
      setFormData({
        id: account.id,
        name: account.name || '',
        accountType: account.accountType || '',
        description: account.description || '',
      });
      setEditing(true);
    } else {
      setFormData({
        id: 0,
        name: '',
        accountType: '',
        
      });
      setEditing(false);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fd) => ({ ...fd, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await updateAccount(formData);
    } else {
      await addAccount(formData);
    }
    fetchData();
    closeModal();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this account?')) {
      await deleteAccount(id);
      fetchData();
    }
  };

  // Filter accounts by name or description
  const filteredAccounts = accounts.filter(
    (a) =>
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (a.description && a.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mt-5 pt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Accounts</h2>
        <button className="btn btn-success btn-sm" onClick={() => openModal()}>
          + Add New
        </button>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search accounts..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <AccountTable
        accounts={filteredAccounts}
        onEdit={openModal}
        onDelete={handleDelete}
      />

      <AccountFormModel
        isOpen={modalIsOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        formData={formData}
        onChange={handleChange}
        editing={editing}
      />
    </div>
  );
}
