import "./App.css";
import { Banner } from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
   return (
      <>
         <header className="mx-auto max-w-[1320px] w-[90%] lg:w-[85%] py-3  md:py-4">
            <Navbar></Navbar>
         </header>

         <main>
            <Banner></Banner>
         </main>
      </>
   );
}

export default App;
