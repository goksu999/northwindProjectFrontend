import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Table } from "semantic-ui-react";
import ProductService from "../services/productService";
export default function ProductList() {
  //react hooks yapısı, useState snippetdan sectik ve asagıdakı guncel haline getirdik
  //useState bir fonksıyon ve bombos bir array almış neden fonksıyon cnku () bunu almış
  //useState bize bir nesne dönüyor ve onu da destructor edecegiz.
  //döndürdüğü yapıda bir data oluyor(state yani products) ve bir fonksıyon oluyor(setProducts productsın fonksiyonu)
  //productsı datayı değiştirmek için de setProducts kullanılır.

  //Swaggeruı deki response body de datanın baslıklarını(isim category acıklaması vb vb ) 18. satırdan baslıyor.
  //products dan bana data gelicek.
  const [products, setProducts] = useState([]);

  //sayfa yerlesti, şimdi state'i değiştir yani useEffect , product'a mudahale ettiğin anda table celled yenıren calısır render edilir.

  //burda useEffect fonksıyon olustur, component yuklendıgınde yapılmasını istediğin kodu bunun ıcıne yaz.içeriyede bir fonksiyon gir => ()
  useEffect(()=>{
      //let productService newle
      let productService = new ProductService()
      //productsı 12. satırdaki, set etmen lazım yani setProductsı cagırman lazım
      productService.getProducts().then(result=>setProducts(result.data.data))
    
  },[])
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      
        <Table.Body>
          {
            //productsa ulas ve maple, her bir product icin jsx üret demek ve onu döndür diye okunur jsx => ()
            //tablerow her bir product içi tekrar edıcek bu yuzden urettiğimiz jsx in içine koyduk
            //50. satırda swagger da categorının categorıname kısmında categornameı yazıyor o yuzden oyle yazdık burda swaggerdan bak getall contorllerda.
            //table row a key değeri ister mappinglerde semantık uı da verılıyor bu, bu verilmezse hata alırız bi id vermemiz lazım o yuzden hepsinin unique olması için
            products.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
                <Table.Cell>{product.unitPrice}</Table.Cell>
                <Table.Cell>{product.unitsInStock}</Table.Cell>
                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                <Table.Cell>{product.category.categoryName}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
