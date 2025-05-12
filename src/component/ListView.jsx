import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, addUser, editUser, deleteUser } from '../store/redux/userSlice';
import { getData, addData, editData, deleteData } from '../services/api';

const ListView = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [form, setForm] = useState({ namaLengkap: '', email: '', nohp: '', kataSandi: '', id: null });

  useEffect(() => {
    getData().then(res => dispatch(setUsers(res.data)));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      editData(form.id, form).then(res => {
        dispatch(editUser(res.data));
        setForm({ namaLengkap: '', email: '', nohp: '', kataSandi: '', id: null });
      });
    } else {
      addData(form).then(res => {
        dispatch(addUser(res.data));
        setForm({  namaLengkap: '', email: '', nohp: '', kataSandi: '', id: null });
      });
    }
  };

  const handleEdit = (user) => setForm(user);
  const handleDelete = (id) => {
    deleteData(id).then(() => dispatch(deleteUser(id)));
  };

  return (
    <div>
      <h2>List View</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={form.namaLengkap}
          onChange={e => setForm({ ...form, namaLengkap: e.target.value })}
          placeholder="Nama"
          required
        />
        <input
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          required
        />
        <input
          value={form.nohp}
          onChange={e => setForm({ ...form, nohp: e.target.value })}
          placeholder="No Hp"
          required
        />
        <input
          value={form.kataSandi}
          onChange={e => setForm({ ...form, kataSandi: e.target.value })}
          placeholder="Kata Sandi"
          required
        />
        <button type="submit">{form.id ? 'Edit' : 'Add'}</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.namaLengkap} - {user.email} - {user.nohp} <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
