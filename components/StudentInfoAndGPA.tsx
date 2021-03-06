import React from 'react'

interface sgpaInfoProps {
  SGPA: string
}

interface Props {
  studentName: string
  studentHTNO: string
  sgpaInfo?: sgpaInfoProps
}

export const StudentInfoAndGPA = (props: Props) => {
  const { studentName, studentHTNO, sgpaInfo } = props
  return (
    <div className='flex flex-col items-center justify-center text-center text-white'>
      <div className='p-6'>
        <h1 className='text-xl sm:text-4xl'>{studentName}</h1>
        <h1 className='text-lg text-gray-400 sm:text-xl'>{studentHTNO}</h1>
        <hr className='w-full border-gray-700' />
      </div>
      {sgpaInfo ? (
        <div>
          <h1 className='text-xs text-gray-400 sm:text-lg'> SGPA/Verdict</h1>
          <h1
            className={`text-xl sm:text-2xl ${
              sgpaInfo.SGPA !== 'FAIL' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {sgpaInfo.SGPA}
          </h1>
          <br />
        </div>
      ) : null}
    </div>
  )
}
