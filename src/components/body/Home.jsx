import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'

export class Home extends Component {
  render() {
    document.title = 'Home Page'
    return (
      <div>
        <Fragment>
          <Container>
            <h1>Welcome to the Restaraunt</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
              aspernatur ratione? Quia, perspiciatis. Quis eum, perferendis
              dolorem esse sed aliquid commodi, sapiente modi rem laborum
              officia culpa sint teasdasnetur? Consequuntur eligendi iusto soluta
              molestias magni et maxime expedita possimus fugit quam! Laudantium
              asperiores officia neque autem? Enim iusto eveniet fuga sequi
              repudiandae saepe ad autem ea, quod animi veritatis alias
              doloribus officiis! Vitae aperiam sit eligendi sint assumenda
              cupiditate suscipit, id voluptates recusandae? Excepturi fugiat,
              corporis debitis minus dolorum ad, laboriosam repudiandae dolores
              itaque perspiciatis accusantium blanditiis hic qui reiciendis,
              illo dignissimos autem tempore assumenda illum nisi nesciunt sed!
              Atque.
            </p>
            <br />
            <h2>Our Menu</h2>
            
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
              aspernatur ratione? Quia, perspiciatis. Quis eum, perferendis
              dolorem esse sed aliquid commodi, sapiente modi rem laborum
              officia culpa sint tenetur? Consequuntur eligendi iusto soluta
              molestias magni et maxime expedita possimus fugit quam! Laudantium
              asperiores officia neque autem? Enim iusto eveniet fuga sequi
              repudiandae saepe ad autem ea, quod animi veritatis alias
              doloribus officiis! Vitae aperiam sit eligendi sint assumenda
              cupiditate suscipit, id voluptates recusandae? Excepturi fugiat,
              corporis debitis minus dolorum ad, laboriosam repudiandae dolores
              itaque perspiciatis accusantium blanditiis hic qui reiciendis,
              illo dignissimos autem tempore assumenda illum nisi nesciunt sed!
              Atque.
            </p>
            <br />
          </Container>
        </Fragment>
      </div>
    )
  }
}

export default Home
