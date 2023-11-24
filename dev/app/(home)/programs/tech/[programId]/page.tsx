import DesignForm from '@/components/Form/DesignForm';
import ProductForm from '@/components/Form/ProductForm';
import SoftwareForm from '@/components/Form/SoftwareForm';
import { programId } from '@/sections/programs/tech/internals/Programs/constants';

const ProgramPage = ({ params }: { params: { programId: string } }) => {
  const { programId: id } = params;

  switch (id) {
    case programId.SE_TECH:
      return <SoftwareForm programId={id} />;
    case programId.DESIGN_TECH:
      return <DesignForm programId={id} />;
    case programId.PRODUCT_TECH:
      return <ProductForm programId={id} />;

    default:
      return <SoftwareForm programId={id} />;
  }
};

export default ProgramPage;
