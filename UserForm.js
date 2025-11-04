import React, { useState } from 'react';

// const UserForm: React.FC = () => { // ถ้าใช้ .js ธรรมดา ไม่ต้องมี : React.FC
const UserForm = () => {

  // TODO: สร้าง state สำหรับเก็บข้อมูล form
  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  // TODO: สร้างฟังก์ชันสำหรับการเปลี่ยนแปลงข้อมูล
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  // TODO: สร้างฟังก์ชัน submit
  const handleSubmit = (e) => {
    e.preventDefault(); // กันหน้าเว็บ refresh
    alert(`ข้อมูลที่ส่ง:\nชื่อ: ${form.name}\nอีเมล: ${form.email}`);
  };

  // TODO: สร้างฟังก์ชัน clear
  const handleClear = () => {
    setForm({ name: '', email: '' });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>User Form Exercise</h2>

      {/* สร้าง form โดยใช้ onSubmit */}
      <form onSubmit={handleSubmit}>
        
        {/* TODO: สร้าง form input fields */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name-input">ชื่อ:</label>
          <input
            id="name-input"
            type="text"
            name="name" // 'name' attribute ต้องตรงกับ key ใน state
            value={form.name} // ผูกค่ากับ state
            onChange={handleChange} // ผูก event กับ handler
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email-input">อีเมล:</label>
          <input
            id="email-input"
            type="email"
            name="email" // 'name' attribute ต้องตรงกับ key ใน state
            value={form.email} // ผูกค่ากับ state
            onChange={handleChange} // ผูก event กับ handler
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        {/* TODO: สร้างปุ่ม Submit และ clear */}
        <div>
          <button type="submit" style={{ marginRight: '10px' }}>
            Submit
          </button>
          <button type="button" onClick={handleClear}> {/* type="button" เพื่อไม่ให้มัน submit form */}
            Clear
          </button>
        </div>
      </form>

      {/* TODO: แสดงข้อมูลแบบ real-time */}
      <div style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '10px' }}>
        <h3>ข้อมูลปัจจุบัน:</h3>
        <p>ชื่อ: {form.name || '(ยังไม่ได้กรอก)'}</p>
        <p>อีเมล: {form.email || '(ยังไม่ได้กรอก)'}</p>
      </div>
    </div>
  );
};

export default UserForm;
