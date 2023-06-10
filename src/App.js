import { Button, Badge } from 'react-bootstrap';
import NavBarMenu from './components/NavBarMenu';
import Introduction from './components/Introduction/Introduction';
import Services from './components/Services/Services';
import CardService from './components/Services/CardService/CardService';
import DynamicForm from './components/DynamicForm/DynamicForm';

function App() {
  return (
    <div>
      <NavBarMenu />
      <Introduction/>
      <Services/>
      <DynamicForm/>
    </div>
  );
}

export default App;
