import Main from './main'
import Bar from './bar'
import Footer from './footer'

export default function BasicBlocks() {
  return (
    <div className="wrapper">
      <div className="container">
        <Main />
        <Bar />
        <Footer />
      </div>
    </div>
  )
}
