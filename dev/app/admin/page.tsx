'use client';

import { useState, useCallback, useEffect } from 'react';
import { getData } from '@/Services/ApiCalls';
import { programId } from '@/sections/programs/tech/internals/Programs/constants';
const AdminPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [seData, setSeData] = useState([]);
  const [designData, setDesignData] = useState([]);
  const [pmData, setPmData] = useState([]);

  const getProgramApplicants = useCallback(async () => {
    try {
      setIsLoading(true);
      const resultSE = await getData(
        `programs/${programId.SE_TECH}/applicants`,
      );
      const resultD = await getData(
        `programs/${programId.DESIGN_TECH}/applicants`,
      );
      const resultPM = await getData(
        `programs/${programId.PRODUCT_TECH}/applicants`,
      );
      console.log(resultSE);
      console.log(resultD);
      console.log(resultPM);
      setSeData(resultSE);
      setDesignData(resultD);
      setPmData(resultPM);

      setMessage(resultSE.message);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProgramApplicants();
  }, [getProgramApplicants]);
  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className="p-4 flex flex-col gap-3">
          <p>Software Engineering applicants: {seData.length}</p>
          <p>UI/UX applicants: {designData.length}</p>
          <p>Product Management applicants: {pmData.length}</p>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
