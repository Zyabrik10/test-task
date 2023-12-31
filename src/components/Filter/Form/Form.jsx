import { useDispatch, useSelector } from 'react-redux';
import { filterCars } from 'redux/cars/cars-actions';

import css from './Form.module.css';
import { selectFilters } from 'redux/filter/filters-selector';

import CarBrandInput from './components/CarBrandInput/CarBrandInput';
import CarsPricesInput from './components/CarsPricesInput/CarsPricesInput';
import FromToInputs from './components/FromToInputs/FromToInputs';

import globalCss from 'css/global.module.css';

export default function Form() {
  const { carBrand, price, from, to } = useSelector(selectFilters);
  const dispatch = useDispatch();

  function buttonHandler(e) {
    e.preventDefault();

    const filterObject = {
      carBrand,
      price: Number.parseInt(price),
      from: Number.parseInt(from),
      to: Number.parseInt(to),
    };

    dispatch(filterCars(filterObject));
  }

  return (
    <form className={css['form']}>
      <CarBrandInput value={carBrand} />
      <CarsPricesInput value={price} />
      <FromToInputs fromValue={from} toValue={to} />
      <button
        className={`${css['search-button']} ${globalCss["global-button"]}`}
        type="submit"
        onClick={buttonHandler}
      >
        search
      </button>
    </form>
  );
}
