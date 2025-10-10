import styled from "styled-components";
import { useCustomeFilterContext } from "../Context/Filtercontext";
import { FaCheck } from "react-icons/fa";
import Formateprice from "../Helper/Formateprice";
import { Button } from "../styles/Button";

const Wrapper = styled.section`
 padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }`
  ;

const Filtersection = () => {

  const { filters: { text, category, company, color,price,maxPrice,minPrice },clearfilter, updateFilterValue, allproducts } = useCustomeFilterContext();

  //get category filterdata
  const getUniqueData = (data, property) => {
    let newVal = data.map((v, i) => {
      return v[property];
    })

    if (property === "colors") {
      // return (newVal=['All', ...new Set([].concat(...newVal))])
      newVal = newVal.flat()
    }


    newVal = ['all', ...new Set(newVal)]//using this get only unique if we have multiple mobile then show one only
    console.log(newVal);//see in console
    return newVal;
  }

  const categoryOnlyData = getUniqueData(allproducts, "category");

  const companyOnlyData = getUniqueData(allproducts, "company");

  const colorsOnlyData = getUniqueData(allproducts, "colors");

  return (
    <Wrapper>
      <div className="filter-search">
        {/* get input search filter data */}
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" value={text} onChange={updateFilterValue} placeholder="search.." />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categoryOnlyData.map((v, i) => {
              return (
                <button key={i} type="button" name="category" value={v} onClick={updateFilterValue}>
                  {v}
                </button>
              )
            })
          }
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select name="company" id="company" className="filter-company--select" onClick={updateFilterValue}>
            {
              companyOnlyData.map((v, i) => {
                return (<option key={i} value={v} name="company">{v}</option>)
              })
            }
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          {
            colorsOnlyData.map((v, i) => {
              if (v === "all") {
                return (
                  <button key={i} type="button" value={v} className="color-all--style" name="color" onClick={updateFilterValue}>
                    all
                  </button>
                )
              }
              return (
                <button key={i} type="button" value={v} className={color === v ? "btnStyle active" : "btnStyle"} name="color" style={{ background: v }} onClick={updateFilterValue}>
                  {color == v ? <FaCheck className="checkStyle" /> : null}
                </button>
              )
            })
          }
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p><Formateprice price={price}/></p>
        <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue}/>
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearfilter}>Clear Filter</Button>
      </div>
    </Wrapper>
  )
}

export default Filtersection;