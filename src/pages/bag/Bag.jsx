import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBag } from "@store/bagSlice/bagActions";

import BagBlock from "@components/bagBlock/BagBlock";

const Bag = () => {
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag.bag)

  // console.log(bag)

  useEffect(() => {
    dispatch(getBag());
  }, []);

  return (
    <section className="bag">
      <BagBlock productsBag={bag}/>
    </section>
  )
};

export default Bag;
