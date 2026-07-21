import React from 'react';

function Login() {
  return (
    // จัดกล่องให้อยู่กึ่งกลางจอเป๊ะๆ ด้วย flex และ items-center
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Jan POP</h1>
        <h2 className="text-xl text-center text-gray-500 mb-6">Please sign in</h2>
        
        {/* เดี๋ยวสเต็ปหน้าเราจะมาเติมช่องกรอกอีเมลกับพาสเวิร์ดตรงนี้ครับ */}

      </div>
    </div>
  );
}

export default Login;