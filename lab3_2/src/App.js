import './App.css';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="p-5">
        <div className="flex flex-row">
          <div className="lg:basis-1/4 sm:basis-1/3 basis-1/3 bg-sky-500 p-5">01</div>
          <div className="lg:basis-1/4 sm:basis-1/3 basis-1/3 bg-sky-600 text-left p-5">02</div>
          <div className="lg:basis-1/2 sm:basis-1/3 basis-1/3 bg-sky-900 text-right p-5">03</div>
        </div>

        <div className="flex flex-row-reverse">
          <div className="p-2 bg-red-500">01</div>
          <div className="p-2 bg-red-400">02</div>
          <div className="p-2 bg-red-500">03</div>
        </div>

        <div className="flex flex-col mt-5">
          <div className="p-2 bg-green-500">01</div>
          <div className="p-2 bg-green-400">02</div>
          <div className="p-2 bg-green-500">03</div>
        </div>

        <div className="flex flex-row hover:flex-col mt-5">
          <div className="p-2 bg-green-500 text-black">01</div>
          <div className="p-2 bg-green-400 text-black">02</div>
          <div className="p-2 bg-green-500 text-black">03</div>
        </div>

        {/* ส่วนคั่นหน้าจอ */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-2xl font-bold mb-4">ทดสอบ Grid Layout</h2>
        
        {/* เริ่มโค้ด Grid */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-blue-500 text-white p-4">Item 1</div>
          <div className="bg-blue-500 text-white p-4">Item 2</div>
          <div className="bg-blue-500 text-white p-4">Item 3</div>
          <div className="bg-blue-500 text-white p-4">Item 4</div>
        </div>

                {/* ส่วนคั่นหน้าจอ */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-2xl font-bold mb-4">ทดสอบ Grid แบบข้ามช่อง (หน้า 5)</h2>
        
        {/* เริ่มโค้ดหน้า 5 */}
        <div className="grid grid-cols-7 gap-4">
          <div className="bg-blue-500 text-white p-4 col-span-2">Item 1</div>
          <div className="bg-blue-500 text-white p-4 col-span-2 col-start-2">Item 2</div>
          <div className="bg-blue-500 text-white p-4 col-span-2 col-start-4">Item 3</div>
          <div className="bg-blue-500 text-white p-4">Item 4</div>
        </div>

        {/* ส่วนคั่นหน้าจอ */}
        <hr className="my-8 border-gray-300" />
        <h2 className="text-2xl font-bold mb-4">ทดสอบการจัดตำแหน่ง (หน้า 6)</h2>
        
        {/* เริ่มโค้ดหน้า 6 */}
        <div className="grid grid-cols-3 gap-4 text-white">
          <div className="bg-purple-500 p-4 flex justify-start">Left</div>
          <div className="bg-purple-500 p-4 flex justify-center">Center</div>
          <div className="bg-purple-500 p-4 flex justify-end">Right</div>
          
          <div className="bg-purple-500 p-4 flex items-start h-24">Top</div>
          <div className="bg-purple-500 p-4 flex items-center h-24">Middle</div>
          <div className="bg-purple-500 p-4 flex items-end h-24">Bottom</div>
        </div>
      </div>
    </div>
  );
}

export default App;