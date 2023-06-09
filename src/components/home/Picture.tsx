import React from 'react';
import Image from 'next/image';
import { m2 } from '../../../public/images';

const Picture = (): JSX.Element => {
  return (
    <div className='fixed bottom-[4.5rem] right-0 pl-[2rem] lg:max-w-[900px] xl:max-w-[80%]'>
      <Image src={m2} alt="pogi" priority={true}/>
    </div>
  );
};

export default Picture;
