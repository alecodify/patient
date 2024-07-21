import React from 'react';
import "../styles/document.scss";
import { Header } from '../components';

const Document = () => {
  const files = [
    { name: 'File1.txt', date: '2024-07-11', type: 'Text File' },
    { name: 'File2.jpg', date: '2024-07-10', type: 'Image File' },
    { name: 'File3.pdf', date: '2024-07-09', type: 'PDF File' },
    { name: 'File4.mp4', date: '2024-07-08', type: 'Video File' },
    { name: 'File5.docx', date: '2024-07-07', type: 'Docs File' },
  ];

  return (
    <div className='content'>
      <main>
        <Header header={"Home"} main={""} title={"Document"} />

        <div className="documents-container">
          <ul className='flex items-center justify-end'>
            <li>
              <button className='button'>Upload</button>
            </li>
          </ul>

          <div className=' mx-auto mt-10 p-4 bg-gray-100 rounded-lg'>
            <div className='flex justify-between bg-[#2a3556] rounded-lg text-white py-3 pl-4 pr-4 items-center lg:text-xl'>
              <div className='document-heading w-1/3 text-center'>Name</div>
              <div className='document-heading w-1/3 text-center'>Date</div>
              <div className='document-heading w-1/3 text-center'>Type</div>
            </div>
            <div className='bg-white rounded-lg mt-2'>
              {files.map((file, index) => (
                <div key={index} className='flex items-center justify-between gap-4 py-2 px-2 border-b'>
                  <div className='w-1/3 flex items-center justify-center'>
                    <div className='mr-2'>📄</div>
                    <div className='document-title'>{file.name}</div>
                  </div>
                  <div className='document-date w-1/3 text-center'>{file.date}</div>
                  <div className='document-type w-1/3 text-center'>{file.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Document