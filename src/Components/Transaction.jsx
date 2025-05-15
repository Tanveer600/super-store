import React, {useEffect, useState } from 'react';
  import Swal from 'sweetalert2';
  import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; // ✅ this registers the plugin

import withReactContent from 'sweetalert2-react-content';
import Modal from 'react-modal';
import TransactionFormModal from './TransactionFormModel.jsx';
import TransactionTable from './TransactionTable.jsx';
import { getAccounts } from '../Services/AccountService.js';
import {
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
} from '../Services/TransactionService.js';

Modal.setAppElement('#root');

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);

  const [accounts, setAccounts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    transactionDate: '',
    accountID: '',
    description: '',
    debitAmount: 0,
    creditAmount: 0,
  });


const MySwal = withReactContent(Swal);

  const [editing, setEditing] = useState(false);

  const fetchData = async () => {
    const txRes = await getTransactions();
    setTransactions(txRes.data);
    const accRes = await getAccounts();
    setAccounts(accRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (tx = null) => {
    if (tx) {
      setFormData({
        id: tx.id,
        transactionDate: tx.transactionDate.slice(0, 10),
        accountID: tx.accountID,
        description: tx.description || '',
        debitAmount: tx.debitAmount,
        creditAmount: tx.creditAmount,
      });
      setEditing(true);
    } else {
      setFormData({
        id: 0, transactionDate: '', accountID: '', description: '',
        debitAmount: 0, creditAmount: 0,
      });
      setEditing(false);
    }
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);
const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
};

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (editing) {
     await updateTransaction(formData);
    MySwal.fire({
      icon: 'success',
      title: 'Transaction Updated!',
      text: 'The transaction has been successfully updated.',
    });
    } else {
      await addTransaction(formData);
       MySwal.fire({
      icon: 'success',
      title: 'Transaction Added!',
      text: 'The transaction has been successfully saved.',
    });
    }
    fetchData();
    closeModal();
  };

const handleDelete = async (id) => {
  const result = await MySwal.fire({
    title: 'Are you sure?',
    text: 'You won’t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
  });

  if (result.isConfirmed) {
    await deleteTransaction(id);
    fetchData();
    MySwal.fire({
      icon: 'success',
      title: 'Deleted!',
      text: 'The transaction has been deleted.',
    });
  }
};

const filteredTransactions = transactions.filter((t) =>
  t.description.toLowerCase().includes(searchTerm.toLowerCase())
);
const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(filteredTransactions);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(data, 'Transactions.xlsx');
};

const printToPDF = () => {
  const doc = new jsPDF();

  doc.text("Transaction Voucher", 14, 15);

  doc.autoTable({
    head: [['Date', 'Account', 'Description', 'Debit', 'Credit']],
    body: filteredTransactions.map(tx => [
      tx.transactionDate,
      accounts.find(a => a.id === tx.accountID)?.name || 'N/A',
      tx.description,
      tx.debitAmount,
      tx.creditAmount
    ]),
    startY: 25,
    styles: { fontSize: 9 },
  });

  doc.save("Transaction-Voucher.pdf");
};

  return (
    
 <div className="container mt-5 pt-4">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h2>Transactions</h2>
    <button className="btn btn-success btn-sm" onClick={() => openModal()}>
      + Add New
    </button>
  </div>

  {/* Search Bar */}
  <div className="mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Search transactions..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  </div>
 {/* Export and Print Buttons */}
    <div className="mb-3 d-flex gap-2">
      <button className="btn btn-outline-primary" onClick={exportToExcel}>
        Export to Excel
      </button>
      <button className="btn btn-outline-danger" onClick={printToPDF}>
        Print PDF
      </button>
    </div>
  <TransactionTable
    transactions={filteredTransactions}
    accounts={accounts}
    onEdit={openModal}
    onDelete={handleDelete}
  />

  <TransactionFormModal
    isOpen={modalIsOpen}
    onClose={closeModal}
    onSubmit={handleSubmit}
    formData={formData}
    onChange={handleChange}
    editing={editing}
    accounts={accounts}
  />
</div>


  );
}
