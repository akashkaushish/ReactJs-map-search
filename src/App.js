import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Brands from './components/Brands';
import BrandListing from './components/BrandListing';
import Brandmap from './components/Brandmap';

function App() {
  const brandData = Brands();
  const [brands, setbrands] = useState(brandData);
  const initialValues = { searchKey:""};
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    //console.log(formValues);
  }
  function filterIt(arr, searchItem) {
    return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchItem)));
  }
  const submitForm=(e)=>{
    e.preventDefault();
    const searchedKey = formValues.searchKey; 
    //let selectedBrand = brandData.find(brand => brand.brand_name === searchedKey );
    let selectedBrand = filterIt(brandData, searchedKey); 
    if(selectedBrand && selectedBrand.length > 0)
      setbrands(selectedBrand);
    else
      setbrands(brandData);
  };

  
   //
  return (
    <>
      <Header />
      <main id="main">
      <section className="site-content">
          <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 detail_view" >
                          <div className="search_bar">    
                                <form className="d-flex" onSubmit={submitForm}>
                                  <input className="form-control me-2" 
                                  type="text" 
                                  name="searchKey" 
                                  value={formValues.searchKey} 
                                  onChange={handleChange}
                                  placeholder="Search" aria-label="Search" />
                                  <button className="btn btn-outline-secondary" type="submit">Search</button>
                                </form>
                          </div>
                          <div class="row item">
                            <BrandListing data={brands} />
                          </div>
                    </div>
                    <div className="col-lg-6 col-md-6 map_view">
                      <Brandmap data={brands} />
                    </div>
                
                </div>
          </div>          
      </section>
      </main>
    </>
  );
}

export default App;
