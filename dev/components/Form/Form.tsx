'use client';

import { useSearchParams } from 'next/navigation';
import SoftwareForm from './SoftwareForm';
import DesignForm from './DesignForm';
import ProductForm from './ProductForm';
import { programId } from '@/sections/programs/tech/internals/Programs/constants';
const Form = () => {
  const params = useSearchParams();
  const id = params.get('programId');

  switch (id) {
    case programId.SE_TECH:
      return <SoftwareForm />;
    case programId.DESIGN_TECH:
      return <DesignForm />;
    case programId.PRODUCT_TECH:
      return <ProductForm />;

    default:
      return <SoftwareForm />;
  }
};

export default Form;
