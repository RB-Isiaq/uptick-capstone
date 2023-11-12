'use client';

import { useSearchParams } from 'next/navigation';
import SoftwareForm from './SoftwareForm';
import DesignForm from './DesignForm';
import ProductForm from './ProductForm';
const Form = () => {
  const params = useSearchParams();
  const programId = params.get('programId');

  switch (programId) {
    case '1':
      return <SoftwareForm />;
    case '2':
      return <DesignForm />;
    case '3':
      return <ProductForm />;

    default:
      return <SoftwareForm />;
  }
};

export default Form;
