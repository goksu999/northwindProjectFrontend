//services klasorunde apiden gelen istekler burada yazılır.
//camelCase yazılır standat javascrip codu javascript klası için dosya isimlendirmesi böyledir.
//burada axios kullanıcaz, get-post işlemleri bununla yapılır.
import axios from 'axios'

export default class ProductService{
   //getProducts metodu yaz.
   getProducts(){
       //asagıdaki işlem önemli eclise swagger uıden getall execute ettik, sonra curl deki url kopyaladık asagıya yapıstırdık,
       //bu işlem bize apideki, yani bir restfull servise request atmaya yarıyor.COK ONEMLİİİİ dk 3.23.40 ders 11.
       //asagıdakı url ye bir istekte bulunacagız
       return axios.get("http://localhost:8082/api/products/getall")//buraya apimizin adresini yazarız, ürünleri getiren servisin adresi yazılır.
   }
   getByProductName(productName){
       return axios.get("http://localhost:8082/api/products/getByProductName?productName="+ productName)
   }
}