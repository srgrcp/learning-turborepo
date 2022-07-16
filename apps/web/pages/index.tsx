import { getAllFruits, RootState, store } from "store";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { useCallback } from "react";

export default function Web() {
  const { fruits, loading, error } = useSelector((state: RootState) => state.fruitList)
  const dispatch = useDispatch<typeof store.dispatch>();

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
    <div className="p-10">
      <button
        className="text-zinc-50 bg-violet-700 px-12 py-2 rounded-md shadow-xl hover:shadow-xl shadow-violet-700/20 hover:shadow-violet-700/30 hover:scale-105 transition"
        onClick={() => fetchFruits()}
      >Boop</button>
    </div>
  );
}
