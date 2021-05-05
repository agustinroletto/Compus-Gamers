import React from "react";
import ItemListContainer from "../../components/ItemsList/ItemListContainer/ItemListContainer";
import Footer from "../../components/footer/Footer";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';

function Home() {
  return (
    <div>
      <div>
        <ItemListContainer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
