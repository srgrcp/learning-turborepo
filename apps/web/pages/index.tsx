import { getAllFruits, RootState, useAppDispatch } from "store";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { useCallback } from "react";

export default function Web() {
  const { fruits, loading, error } = useSelector((state: RootState) => state.fruitList)
  const dispatch = useAppDispatch();

  const fetchFruits = useCallback(
    () => {
      dispatch(getAllFruits())
    },
    [dispatch],
  )

  useEffect(() => {
    console.log('fruits', fruits)
    console.log('loading', loading)
    console.log('error', error)
  }, [fruits, loading, error])

  return (
    <div>
      <h1>Web</h1>
      <button onClick={() => fetchFruits()}>Boop</button>
    </div>
  );
}
