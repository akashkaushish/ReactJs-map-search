//import useFetch from "../hooks/useFetch";

function Brands()
{
    //const [isLoading, data, error] = useFetch("http://localhost:8888/search/alldata.php");
    
    const brandData = [
        {"id":"1",
        "brand_name":"Adidas",
        "address":"Champ de Mars, 5 Av. Anatole France, 75007 Paris",
        "brand_logo":"https://www.adidas.co.in/glass/react/800f8a1/assets/img/icon-adidas-logo.svg",
        "latitude":"48.855709","longitude":"2.298890","distance":"0.4055761454822305"
        },
        {"id":"10","brand_name":"Saint Gobain","address":"129 Rue de Grenelle, 75007 Paris","brand_logo":"https://www.saint-gobain.com/sites/saint-gobain.com/themes/custom/sg_radix/logo.svg","latitude":"48.858060","longitude":"2.311520","distance":"1.2309041635885523"},{"id":"3","brand_name":"Toshiba","address":"Pl. Charles de Gaulle, 75008 Paris","brand_logo":"https://www.toshiba.com/tai/img/logo_l.gif?v=1","latitude":"48.873830","longitude":"2.295910","distance":"1.7520493764885163"},{"id":"5","brand_name":"Peugeot","address":"75008 Paris","brand_logo":"https://static.dezeen.com/uploads/2021/03/peugeot-1960s-logo_dezeen_2364_col_0.jpg","latitude":"48.871872","longitude":"2.317643","distance":"2.272651598847715"},{"id":"6","brand_name":"Groupebpce","address":"75006 Paris","brand_logo":"https://groupebpce.com/bundles/main/Main/img/logo_BPCE_1ligne.svg","latitude":"48.850571","longitude":"2.332920","distance":"2.9190014984405597"},{"id":"2","brand_name":"Reebok","address":"Rue de Rivoli, 75001 Paris","brand_logo":"https://1000logos.net/wp-content/uploads/2017/05/Reebok-logo.png","latitude":"48.861488","longitude":"2.339130","distance":"3.272430220092913"},{"id":"4","brand_name":"McDonald's","address":"6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris","brand_logo":"https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/Logo.svg","latitude":"48.853851","longitude":"2.348050","distance":"3.93179250121059"},{"id":"7","brand_name":"Vinci","address":"Pl. du Panth\u00e9on, 75005 Paris","brand_logo":"https://www.vinci.com/vinci.nsf/en/images/$file/logo_vinci_rvb_light.svg","latitude":"48.845730","longitude":"2.345660","distance":"3.9741643991212956"},{"id":"9","brand_name":"Schneider Electric","address":"Place Georges-Pompidou, 75004 Paris","brand_logo":"https://www.adidas.co.in/glass/react/800f8a1/assets/img/icon-adidas-logo.svg","latitude":"48.861401","longitude":"2.351590","distance":"4.1782839796991444"},{"id":"8","brand_name":"Bouygues","address":"Pl. des Vosges, 75004 Paris","brand_logo":"https://www.adidas.co.in/glass/react/800f8a1/assets/img/icon-adidas-logo.svg","latitude":"48.855480","longitude":"2.366340","distance":"5.2494131323512"}]
    return brandData;

   /*return {
        loading:isLoading,
        data:data,
        error:error
        }; */
}

export default Brands;