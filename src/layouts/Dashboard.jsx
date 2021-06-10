import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid} from 'semantic-ui-react'
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
//grid row içindeki grid column içine  categories ve produclist al,  3.09.48 anlatıyor.

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories/>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList}/> {/*path / =  anasayfa demek , domainin üstüne demek localhost 3000 üstü demek., component olarak productList i  ac demek. exact olmasa liste yinede gelir.*/}
            <Route exact path="/products" component={ProductList}/>
            <Route path="/products/:name" component={ProductDetail}/>     {/* :id parametre demek bu sayede sadece istediğimiz id gelir. 1-2-3 istediğimizi verebiliriz. name dedik cnkü apide getByProductName dediğimiz için.*/}
            <Route path="/cart" component={CartDetail}/>
          </Grid.Column> 
        </Grid.Row>
      </Grid>
      
     
    </div>
  );
}
