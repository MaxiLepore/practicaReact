import Header from '../components/header'
import Footer from '../components/footer'
import Carrousel from '../components/carrousel'
import Panel from '../components/panel'


export const Principal = () => {
    return (<div className="flex flex-col justify-start items-start w-full bg-purple-900 min-h-screen overflow-hidden">
    <div className="flex justify-center w-full h-20 m-0.5 bg-blue-200 flex-shrink-0" >
      <Header></Header>
    </div>
    <div className="w-full flex-grow m-0.5 bg-blue-200">
        <Carrousel /> 
    </div>
    <div className="w-full flex-grow m-0.5 bg-blue-200">
        <Panel />
    </div>
    <div className="w-full h-41 m-0.5 bg-blue-200 flex-shrink-0">
        <Footer />
    </div>
</div>)

};

export default Principal;
