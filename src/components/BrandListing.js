import React from 'react'; 

function BrandListing(props)
{
    const brands = props.data; 
    return (  <>
            {brands && brands.map((brand)=>{ 
                return <div className="row item" key={brand.id}>
                    <div className="col-md-4">
                        <img src={brand.brand_logo} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8">
                        <h2>{brand.brand_name}</h2>
                        <p>{brand.address}</p>
                    </div>
                </div>
            })}
            </>
        );
}
    
export default BrandListing;