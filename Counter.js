import React, { useState } from 'react';

// TODO: เขียน Counter Component ที่นี่
const Counter = () => { // ไม่ต้องใช้ React.FC ก็ได้ครับถ้าเป็น JS ธรรมดา
  
  // TODO: สร้าง state สำหรับเก็บค่า count
  const [count, setCount] = useState(0);

  // ฟังก์ชันสำหรับจัดการปุ่ม
  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Counter Exercise</h2>
      
      {/* TODO: แสดงค่า count */}
      <h1>{count}</h1>

      <div style={{ margin: '20px 0' }}>
        {/* TODO: สร้างปุ่มทั้ง 3 ปุ่ม */}
        <button onClick={handleIncrease} style={{ marginRight: '10px' }}>
          + เพิ่ม
        </button>
        <button onClick={handleDecrease} style={{ marginRight: '10px' }}>
          - ลด
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
