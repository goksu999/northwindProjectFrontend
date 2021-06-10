import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
//diiv in içinde iki buton oolcak,primary renk mavi yapar.
export default function SignedOut({signIn}) { //burda obje destruc ettik önceden props yazıyordu oyle yapmaya gerek yok.
    return (
        <div>
            <Menu.Item>
            <Button primary onClick={signIn}>Giriş yap</Button>
            <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
            </Menu.Item>
           
        </div>
    )
}
