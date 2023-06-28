import React, { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import CustomLoader from "../components/CustomLoader";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { detalleId } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", detalleId);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [detalleId]);

  if (Object.keys(data).length === 0) {
    return (
      <>
        <CustomLoader />
      </>
    );
  } else {
    return <ItemDetail data={data} />;
  }
};

export default ItemDetailContainer;
