

export default function AccountTable({accounts, onEdit, onDelete }) {
  return (
    <table className="table table-bordered table-striped table-hover">
      <thead className="table-dark">
        <tr>
        
          <th>Name</th>
          <th>Account type</th>
          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(tx => (
          <tr key={tx.id}>           
            <td>{tx.name}</td>
            <td>{tx.accountType}</td>
          
            <td>
              <button className="btn btn-primary btn-sm me-2" onClick={() => onEdit(tx)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(tx.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
