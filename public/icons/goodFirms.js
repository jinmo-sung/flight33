import React from 'react'
import Image from 'next/image'

const GoodFirms = () => {
    return (
        // <svg xmlns="http://www.w3.org/2000/svg" width="70" height="69" viewBox="0 0 70 69" fill="none">
        //     <path d="M28.3929 24.2078C28.3929 24.2078 24.5382 23.8224 24.5382 27.2145V42.4022H49.8253V46.9509C49.8253 46.9509 49.9024 49.1866 47.5125 49.1866H24.5382V68.9229H52.1382C52.1382 68.9229 68.8678 66.3788 69.022 49.1866V24.2078H28.3929ZM68.251 0H18.4477C0.407449 4.24022 0.0219727 19.0425 0.0219727 19.0425V69H19.1415V23.514C19.1415 19.6592 22.9963 18.9654 22.9963 18.9654H68.1739L68.251 0Z" fill="#3A7AF3" />
        // </svg>
        <div className='w-full h-full'>
          <Image src='/images/icons/company2.png' alt='google' fill/>
        </div>
    )
}

export default GoodFirms