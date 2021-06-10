import React, {useState} from "react";
import { useHistory } from "react-router";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
//7. satır inverted => menü siyah hale gelir. <Menu inverted size="mini"> burdaki mini menuyu
//kucuk hale getir silince default olarak normal gelir.Fixed ise asagıya inince menuyu de aynı anda gormemizi saglar.
//9. satırda menunun ıcınde container olusturduk container mantıgı ders 11 2 saat 27dk 48. saniyede onemli.
export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true) //ilki state bilgisi aut olan, statei değiştircek method ikinci kısım set ile başlayan. false = default false yani auth değil.
  const history= useHistory()
  function handleSignOut(params) { //fonsiyon yazıyoruz, çıkış yapma işlemi handle edilcek.(çıkış yap)
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn(params) { //fonsiyon yazıyoruz, çıkış yapma işlemi handle edilcek.(çıkış yap)
    setIsAuthenticated(true)
  }


  return (
    <div>
      <Menu inverted fixed="top"> 
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
 
          <Menu.Menu position="right"> 
          <CartSummary />
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn} bisey="1"/>}   {/*eğer authenticaed ise sıgneın goster, değilse out goster,
             signIn ın içinde sigout diye fonksıyon var gibi düşünürüz
            ve o da handleSignOut tetıkler.Bunlara props denir signOut bisey gibi */}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
